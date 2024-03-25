import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import AppButton from "../../components/AppButton";
import { useRouter } from "expo-router"; // import useRouter
import { openCamera } from "./../classes/CloudStorage";
import { selectedVehicle, selectedReservation } from "../(tabs)/Bookings";
import { getUserID } from "../classes/UserUtils";
import {
  verticalScale,
  moderateScale,
  horizontalScale,
} from "@/constants/Metrics"; // Import scales
import { updateProgress } from "../classes/Rental";
import Camera from "../../assets/images/camera.png";

import CameraIcon from "../../components/CameraIcon"; // Import CameraIcon component
import { AntDesign } from "@expo/vector-icons";

const FinalPictures = () => {
  const [gasLevelImage, setGasLevelImage] = useState("Gas");
  const [gasLevelPhotoTaken, setGasLevelPhotoTaken] = useState(false);
  const router = useRouter(); // initialize router

  const handleSubmission = () => {
    if (!gasLevelImage) {
      alert("Error", "Please take a photo of the gas level before submitting.");
      return;
    }
    updateProgress(getUserID());
    console.log("Final photos submitted!");
    router.push("/Pickup/ActiveReservation"); // navigate to Pickup/ActiveReservation
  };

  function handleOpenCamera(gasLevelImage) {
    let filename = "pickup" + gasLevelImage;
    let location = "Reservations/" + selectedReservation.id;
    openCamera(filename, location);
    setGasLevelPhotoTaken(true);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Just a few more details!</Text>

      {/* Gas Level Photo */}
      <TouchableOpacity onPress={async () => handleOpenCamera(gasLevelImage)}>
        <View style={styles.photoContainer}>
        <Image source={Camera} style={styles.image} />
          {gasLevelImage ? (
            <Image source={{ uri: gasLevelImage }} style={styles.photo} />
          ) : (
            <CameraIcon style={styles.cameraIcon} />
          )}
          <Text style={styles.photoText}>
            Please take a photo of the gas level on the dashboard
          </Text>
          {gasLevelPhotoTaken && (
            <AntDesign
              name="checkcircle"
              size={24}
              color="green"
              style={styles.checkIcon}
            />
          )}
        </View>
      </TouchableOpacity>

      {/* Disclaimer */}
      <View style={styles.disclaimerContainer}>
        <View style={styles.disclaimerBox}>
          <Text style={styles.disclaimerText}>
            Please note that it is your responsibility to fill up the gas tank,
            and if you go overtime, you will be charged a premium. By pressing
            “Start” you agree that you have read the above.{"\n"}
          </Text>
          <Text style={styles.disclaimerText}>
            Please note that it is your responsibility to fill up the gas tank,
            and if you go overtime, you will be charged a premium. By pressing
            “Start” you agree that you have read the above.
          </Text>
        </View>
      </View>

      {/* Submit Button */}
      <AppButton backgroundColor="#E55D25" onPress={handleSubmission}>
        <Text style={styles.buttonText}>Start</Text>
      </AppButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: verticalScale(20),
    backgroundColor: "white",
    alignContent: "center",
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: moderateScale(40),
    marginTop: verticalScale(10),
    fontFamily: "karlaM",
    textAlign: "left",
  },
  photoContainer: {
    flexDirection: "row",
    marginHorizontal: horizontalScale(10),
    alignContent: "center",
    justifyContent: "center",
  },
  cameraIcon: {
    width: moderateScale(60),
    height: moderateScale(60),
    marginRight: moderateScale(40),
  },
  photoText: {
    flexShrink: 1,
    alignItems: "flex-start",
    fontSize: moderateScale(28),
  },
  checkIcon: {
    marginRight: moderateScale(20),
  },
  photo: {
    height: moderateScale(60),
    borderRadius: moderateScale(10),
  },
  disclaimerContainer: {
    alignItems: "center",
  },
  disclaimerBox: {
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2.8,
    elevation: 4,
    width: "95%",
    padding: moderateScale(15),
  },
  disclaimerText: {
    fontSize: moderateScale(20),
    fontFamily: "karlaL",
  },
  agreementText: {
    marginTop: moderateScale(30),
  },
  image: {
    backgroundColor: "#ECFAFF",
    borderRadius: moderateScale(10),
    marginTop: verticalScale(30),
    alignContent: "center",
    justifyContent: "center",
  },
  submitButton: {
    height: verticalScale(50),
    width: "90%",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: verticalScale(30),
    borderRadius: moderateScale(25),
    backgroundColor: "orange",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

export default FinalPictures;
