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

import CameraIcon from "../../components/CameraIcon"; // Import CameraIcon component

const FinalPictures = () => {
  const [gasLevelImage, setGasLevelImage] = useState("Gas");
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
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Just a few more details!</Text>

      {/* Gas Level Photo */}
      <TouchableOpacity onPress={async () => handleOpenCamera(gasLevelImage)}>
        <View style={styles.photoContainer}>
          {gasLevelImage ? (
            <Image source={{ uri: gasLevelImage }} style={styles.photo} />
          ) : (
            <CameraIcon style={styles.cameraIcon} />
          )}
          <Text style={styles.photoText}>
            Please take a photo of the gas level on the dashboard
          </Text>
        </View>
      </TouchableOpacity>

      {/* Disclaimer */}
      <View style={styles.disclaimerContainer}>
        <View style={styles.disclaimerBox}>
          <Text style={styles.disclaimerText}>
            Please note that it is your responsibility to fill up the gas tank,
            and if you go overtime, you will be charged a premium.
          </Text>
          <Text style={[styles.disclaimerText, styles.agreementText]}>
            By pressing “Start” you agree that you have read the above.
          </Text>
        </View>
      </View>

      {/* Submit Button */}
      <AppButton style={styles.submitButton} onPress={handleSubmission}>
        <Text style={styles.buttonText}>Start</Text>
      </AppButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(20),
    backgroundColor: "white",
  },
  title: {
    fontSize: moderateScale(35),
    fontWeight: "bold",
    marginBottom: moderateScale(45),
    marginTop: verticalScale(50),

    flexDirection: "row",
  },
  photoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: moderateScale(40),
  },
  cameraIcon: {
    width: moderateScale(60),
    height: moderateScale(60),
    marginRight: moderateScale(40),
  },
  photoText: {
    flexShrink: 1,
    fontSize: moderateScale(28),
    marginLeft: verticalScale(10),
  },
  photo: {
    width: moderateScale(60),
    height: moderateScale(60),
    borderRadius: moderateScale(10),
    marginRight: moderateScale(10),
  },
  disclaimerContainer: {
    alignItems: "center",
    marginBottom: moderateScale(40),
    marginTop: verticalScale(30),
  },
  disclaimerBox: {
    borderWidth: moderateScale(2),
    borderColor: "red",
    padding: moderateScale(20),
    borderRadius: moderateScale(4),
  },
  disclaimerText: {
    fontSize: moderateScale(24),
  },
  agreementText: {
    marginTop: moderateScale(30),
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
