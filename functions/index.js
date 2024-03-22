/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const sgMail = require("@sendgrid/mail");
const sendGridAPIKey = functions.config().sendgrid.key;

admin.initializeApp();

sgMail.setApiKey(sendGridAPIKey);

exports.sendApprovalEmail = functions.firestore
    .document("users/{userId}")
    .onUpdate(async (change, context) => {
    // Get the before and after snapshot
      const before = change.before.data();
      const after = change.after.data();

      // Check if Approved changed from false to true
      if (!before.Approved && after.Approved) {
        const emailLogoUrl =
        "https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Habitat_for_humanity.svg/1200px-Habitat_for_humanity.svg.png";
        const msg = {
          to: after.Email,
          from: "pkrides@habitatpkr.ca",
          subject: "Your PKRides account has been approved! 🎉",
          html: `
          <div style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; color: #333;">
            <div style="text-align: center;">
              <img src="${emailLogoUrl}" alt="PKRides Logo" style="width: 150px; margin-bottom: 20px;">
            </div>
            <p>Hello <strong>${after.FirstName}</strong>,</p>
            <p>We're excited to let you know that your account has been approved! 🎉</p>
            <p>You can now log in to the PKRides app and start renting. We're thrilled to have you on board and look forward to seeing you enjoy our services.</p>
            <p>If you have any questions or need assistance, don't hesitate to get in touch with our support team.</p>
            <p>Best wishes,</p>
            <p>The PKRides Team</p>
          </div>
        `,
        };

        // Send the email
        try {
          await sgMail.send(msg);
          console.log("Approval email sent to", after.Email);
        } catch (error) {
          console.error("Error sending approval email:", error);
        }
      }
    });

exports.addAdminRole = functions.https.onCall((data, context) => {
  // Check if request is made by an authenticated admin
  if (context.auth.token.admin !== true) {
    return {error: "Only admins can add other admins, sucker!"};
  }

  // Get user and add custom claim (admin)
  return admin
      .auth()
      .getUserByEmail(data.email)
      .then((user) => {
        return admin.auth().setCustomUserClaims(user.uid, {
          admin: true,
        });
      })
      .then(() => {
        return {
          message: `Success! ${data.email} has been made an admin.`,
        };
      })
      .catch((err) => {
        return err;
      });
});

exports.createUserByAdmin = functions.https.onCall(async (data, context) => {
  // Check if the request is made by an authenticated user with the admin claim
  if (context.auth.token.admin !== true) {
    throw new functions.https.HttpsError(
        "permission-denied",
        "Only admins can create new users.",
    );
  }

  // Create the user with the provided information
  try {
    const userRecord = await admin.auth().createUser({
      email: data.email,
      emailVerified: false, // You might want to verify this later
      phoneNumber: data.phoneNumber,
      password: data.password,
      displayName: `${data.firstName} ${data.lastName}`,
    });

    const usersCollectionRef = admin.firestore().collection("users");
    await usersCollectionRef.doc(userRecord.uid).set({
      firstName: data.firstName,
      lastName: data.lastName,
      age: data.age,
      pronouns: data.pronouns,
      // You might want to add other fields here
    });

    return {
      result: `New user ${data.email} created successfully with UID: ${userRecord.uid}`,
    };
  } catch (error) {
    console.error("Error creating new user:", error);
    throw new functions.https.HttpsError(
        "internal",
        "Unable to create new user.",
        error,
    );
  }
});

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
