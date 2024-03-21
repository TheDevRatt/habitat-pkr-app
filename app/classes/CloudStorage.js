import {
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getUserID } from "./UserUtils";
import * as ImagePicker from "expo-image-picker";
import { Camera, CameraType } from "expo-camera";

const storage = getStorage();

// This function uploads a file to Firebase Storage and then updates the user document with the file URL
const uploadToFirebase = async (uri, name, location, userID = null) => {
  const fetchResponse = await fetch(uri);
  const theBlob = await fetchResponse.blob();
  const imageRef = ref(storage, `${location}/${name}`); // Use the initialized storage

  const effectiveUserID = userID || (await getUserID());

  const uploadTask = uploadBytesResumable(imageRef, theBlob);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        console.error(error);
        reject(error);
      },
      async () => {
        const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
        updateUserDocumentWithFileUrl(
          effectiveUserID,
          downloadUrl,
          location.toLowerCase()
        )
          .then(() => {
            resolve({
              downloadUrl,
              metadata: uploadTask.snapshot.metadata,
            });
          })
          .catch((error) => {
            console.error("Error updating user document with file URL:", error);
            reject(error);
          });
      }
    );
  });
};

// Open the camera and upload a file to Firebase
async function openCamera(fileName, location, userID) {
  const { status } = await Camera.requestCameraPermissionsAsync();
  if (status === "granted") {
    try {
      const cameraResp = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        quality: 0.2,
      });

      if (!cameraResp.canceled) {
        const { uri } = cameraResp.assets[0];
        print("Camera userID: " + userID);
        await uploadToFirebase(uri, fileName, location, userID);
      }
    } catch (e) {
      alert("Error Uploading Image " + e.message);
    }
  } else {
    alert("Camera permission not granted");
  }
}

// Open the file picker and upload a file to Firebase
async function openFilePicker(fileName, location, userID) {
  const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (status === "granted") {
    try {
      const libraryResp = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        quality: 0.2,
      });

      if (!libraryResp.canceled) {
        const { uri } = libraryResp.assets[0];
        await uploadToFirebase(uri, fileName, location, userID);
      }
    } catch (e) {
      alert("Error Uploading Image " + e.message);
    }
  } else {
    alert("File picker permission not granted");
  }
}

// Check if a file exists
async function fileExists(fileName, location) {
  const filepath = location + "/" + fileName;
  //console.log(filepath);
  const docRef = ref(storage, filepath);
  try {
    await getDownloadURL(docRef);
    return true;
  } catch (e) {
    return false;
  }
}

async function updateUserDocumentWithFileUrl(userID, fileUrl, fileType) {
  console.log(userID, fileUrl, fileType); // Add this to check values are as expected
  const userDocRef = doc(getFirestore(), "users", userID);
  const updateData = {};
  updateData[`${fileType}Url`] = fileUrl;
  console.log(updateData); // Verify the structure is correct
  await setDoc(userDocRef, updateData, { merge: true });
}

export { uploadToFirebase, openCamera, openFilePicker, fileExists };
