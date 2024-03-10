import {
    getStorage,
    ref,
    uploadBytes,
    uploadBytesResumable,
    getDownloadURL,
    } from "firebase/storage";
import * as ImagePicker from "expo-image-picker";
import { Camera, CameraType } from "expo-camera";

const storage = getStorage();

    const uploadToFirebase = async (uri, name, location) => {
        const fetchResponse = await fetch(uri);
        const theBlob = await fetchResponse.blob();
        const imageRef = ref(getStorage(), `${location}/${name}`);

        const uploadTask = uploadBytesResumable(imageRef, theBlob);

          return new Promise((resolve, reject) => {
            uploadTask.on(
              "state_changed",
              (snapshot) => {
                //const progress =
                  //(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                //onProgress && onProgress(progress);
              },
              (error) => {
                // Handle unsuccessful uploads
                console.log(error);
                reject(error);
              },
              async () => {
                const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
                resolve({
                  downloadUrl,
                  metadata: uploadTask.snapshot.metadata,
                });
              }
            );
          });
        };

    async function openCamera(fileName, location){
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
                await uploadToFirebase(uri, fileName, location);
              }
            } catch (e) {
              alert("Error Uploading Image " + e.message);
            }
        } else {
        alert("Camera permission not granted");
        }
    };


    async function openFilePicker(fileName, location){
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
                await uploadToFirebase(uri, fileName, location);
            }
         } catch (e) {
         alert("Error Uploading Image " + e.message);
         }
        } else {
        alert("File picker permission not granted");
        }
    };

    // Check if a file exists
    async function fileExists(fileName, location){
        const filepath = (location + '/' + fileName);
        //console.log(filepath);
        const docRef = ref(storage, filepath);
        try{
            await getDownloadURL(docRef);
            return true;
        }catch(e){
            return false;
        }
    };







export {uploadToFirebase, openCamera, openFilePicker, fileExists};


















