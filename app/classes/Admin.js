<<<<<<< HEAD
=======
// const admin = require("firebase-admin");

// // Initialize the Firebase Admin SDK
// admin.initializeApp();

// async function createNewUser(adminUid, userData) {
//   checkIfAdmin(adminUid)
//     .then((isAdmin) => {
//       if (!isAdmin) {
//         throw new Error("Not authorized as admin.");
//       }

//       // Admin is verified, proceed with creating a new user
//       admin
//         .auth()
//         .createUser({
//           email: userData.email,
//           emailVerified: false,
//           phoneNumber: userData.phoneNumber,
//           password: userData.password,
//           displayName: userData.displayName,
//           photoURL: userData.photoURL,
//           disabled: false,
//         })
//         .then((userRecord) => {
//           console.log("Successfully created new user:", userRecord.uid);
//           // Optionally, add the user's UID to your Firestore 'users' collection here
//         })
//         .catch((error) => {
//           console.log("Error creating new user:", error);
//         });
//     })
//     .catch((error) => {
//       console.log("Admin verification failed:", error);
//     });
// }

// function checkIfAdmin(uid) {
//   return admin
//     .auth()
//     .getUser(uid)
//     .then((userRecord) => {
//       return (
//         !!userRecord.customClaims && userRecord.customClaims.isAdmin === true
//       );
//     })
//     .catch((error) => {
//       console.log("Error fetching user data:", error);
//       throw error; // Handle the error appropriately in your app
//     });
// }

// export { createNewUser };
>>>>>>> remotes/origin/matthewmakary/feature/admin-panel
