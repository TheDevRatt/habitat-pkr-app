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
      const msg = {
        to: after.Email, // Assuming the user document has an Email field
        from: "your-email@example.com", // Replace with your SendGrid verified sender
        subject: "Your account has been approved! 🎉",
        text: `Hello ${after.FirstName}, your account has now been approved. You can now login to the PKRides app and begin renting!`,
        html: `<strong>Hello ${after.FirstName}, your account has now been approved. You can now login to the PKRides app and begin renting!.</strong>`,
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

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
