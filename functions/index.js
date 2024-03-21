/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const sgMail = require("@sendgrid/mail");
// const sendGridAPIKey = functions.config().sendgrid.key;

admin.initializeApp();

// sgMail.setApiKey(sendGridAPIKey);

// exports.sendApprovalEmail = functions.firestore
//   .document("users/{userId}")
//   .onUpdate(async (change, context) => {
//     // Get the before and after snapshot
//     const before = change.before.data();
//     const after = change.after.data();

//     // Check if Approved changed from false to true
//     if (!before.Approved && after.Approved) {
//       const msg = {
//         to: after.Email, // Assuming the user document has an Email field
//         from: "your-email@example.com", // Replace with your SendGrid verified sender
//         subject: "Your account has been approved! 🎉",
//         text: `Hello ${after.FirstName}, your account has now been approved. You can now login to the PKRides app and begin renting!`,
//         html: `<strong>Hello ${after.FirstName}, your account has now been approved. You can now login to the PKRides app and begin renting!.</strong>`,
//       };

//       // Send the email
//       try {
//         await sgMail.send(msg);
//         console.log("Approval email sent to", after.Email);
//       } catch (error) {
//         console.error("Error sending approval email:", error);
//       }
//     }
//   });

exports.addAdminRole = functions.https.onCall((data, context) => {
  // Check if request is made by an authenticated admin
  if (context.auth.token.admin !== true) {
    return { error: "Only admins can add other admins, sucker!" };
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
      "Only admins can create new users."
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

    // After creating the user, set custom user claims or additional information as needed
    // For example, setting `age` and `pronouns`, which might be stored in Firestore
    // since custom claims are limited in size and are not meant for large data sets.
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
      error
    );
  }
});

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
