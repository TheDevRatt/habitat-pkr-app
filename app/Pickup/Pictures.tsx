import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import AppButton from "../../components/AppButton";
import { useRouter } from "expo-router";
import { openCamera } from "./../classes/CloudStorage";
import { selectedVehicle, selectedReservation } from "../(tabs)/Bookings";
import { getUserID } from "../classes/UserUtils";
import { AntDesign } from "@expo/vector-icons";
// import CameraIcon from "@/components/CameraIcon"; // Import CameraIcon component
import Camera from "../../assets/images/camera.png";
import {
  verticalScale,
  moderateScale,
  horizontalScale,
} from "@/constants/Metrics";
import { SafeAreaView } from "@/components/Themed";

const Pictures = () => {
  const [frontImage, setFrontImage] = useState("Front");
  const [backImage, setBackImage] = useState("Back");
  const [rightImage, setRightImage] = useState("Right");
  const [leftImage, setLeftImage] = useState("Left");
  const [isFrontImageTaken, setIsFrontImageTaken] = useState(false);
  const [isBackImageTaken, setIsBackImageTaken] = useState(false);
  const [isRightImageTaken, setIsRightImageTaken] = useState(false);
  const [isLeftImageTaken, setIsLeftImageTaken] = useState(false);
  const router = useRouter();

  const userID = getUserID();

  const handleSubmission = () => {
    console.log("Photos submitted!");
    router.push("/Pickup/FinalPictures");
  };

  let imageURI;
  function handleOpenCamera(imageSide) {
    let filename = "pickup" + imageSide;
    let location = "Reservations/" + selectedReservation.id;
    openCamera(filename, location);
    imageURI = "gs://pkrides-d3c59.appspot.com/" + location + "/" + filename;
    // Update the state based on which button was pressed.
    switch (imageSide) {
      case "Front":
        setFrontImage(imageURI);
        setIsFrontImageTaken(true);
        break;
      case "Back":
        setBackImage(imageURI);
        setIsBackImageTaken(true);
        break;
      case "Right":
        setRightImage(imageURI);
        setIsRightImageTaken(true);
        break;
      case "Left":
        setLeftImage(imageURI);
        setIsLeftImageTaken(true);
        break;
      default:
        console.log("Unknown side");
    }
  }

  const renderImage = (imageUri: string | null | undefined) => {
    return imageUri ? (
      <Image source={{ uri: imageUri }}/>
    ) : (
      <Image source={Camera}/>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={[
          styles.title,
        ]}
      >
        Photo Time!
      </Text>

      {/* Front Photo */}
      <TouchableOpacity onPress={() => handleOpenCamera(frontImage)}>
        <View style={styles.photoContainer}>
        <Image source={Camera} style={styles.image} />
          {renderImage(frontImage)}
          <Text style={styles.photoText}>
            Please take a photo of the front of the car
          </Text>
          {isFrontImageTaken && (
            <AntDesign name="checkcircle" size={24} color="green" />
          )}
        </View>
      </TouchableOpacity>

      {/* Back Photo */}
      <TouchableOpacity onPress={() => handleOpenCamera(backImage)}>
        <View style={styles.photoContainer}>
        <Image source={Camera} style={styles.image} />
          {renderImage(backImage)}
          <Text style={styles.photoText}>
            Please take a photo of the back of the car
          </Text>
          {isBackImageTaken && (
            <AntDesign name="checkcircle" size={24} color="green" />
          )}
        </View>
      </TouchableOpacity>

      {/* Right Side Photo */}
      <TouchableOpacity onPress={() => handleOpenCamera(rightImage)}>
        <View style={styles.photoContainer}>
        <Image source={Camera} style={styles.image} />
          {renderImage(rightImage)}
          <Text style={styles.photoText}>
            Please take a photo of the right side of the car
          </Text>
          {isRightImageTaken && (
            <AntDesign name="checkcircle" size={24} color="green" />
          )}
        </View>
      </TouchableOpacity>

      {/* Left Side Photo */}
      <TouchableOpacity onPress={() => handleOpenCamera(leftImage)}>
        <View style={styles.photoContainer}>
        <Image source={Camera} style={styles.image} />
          {renderImage(leftImage)}
          <Text style={styles.photoText}>
            Please take a photo of the left side of the car
          </Text>
          {isLeftImageTaken && (
            <AntDesign name="checkcircle" size={24} color="green" />
          )}
        </View>
      </TouchableOpacity>

      {/* Submit Button */}
      <View style={styles.submitButton}>
      <AppButton backgroundColor="#E55D25" onPress={handleSubmission}>
        <Text style={styles.buttonText}>Submit</Text>
      </AppButton>
      </View>
    </SafeAreaView>
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
    textAlign: "center",
  },
  photoContainer: {
    flexDirection: "row",
    marginHorizontal: horizontalScale(20),
    alignContent: "center",
    justifyContent: "space-between",
    width: "90%",
  },
  cameraIcon: {
    width: moderateScale(70),
    height: moderateScale(70),
    marginRight: horizontalScale(30),
  },
  photoText: {
    flexShrink: 1,
    fontSize: moderateScale(25),
    fontFamily: "karlaR",
  },
  image: {
    backgroundColor: "#ECFAFF",
    borderRadius: moderateScale(10),
    marginRight: horizontalScale(10),
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  submitButton: {
    height: verticalScale(50),
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: verticalScale(30),
    borderRadius: moderateScale(25),
  },
});

export default Pictures;
