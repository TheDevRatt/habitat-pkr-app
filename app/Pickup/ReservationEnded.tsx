import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import AppButton from "../../components/AppButton";
import { useRouter } from "expo-router";
import Camera from "../../assets/images/camera.png";
import {
  verticalScale,
  moderateScale,
  horizontalScale,
} from "@/constants/Metrics";
import { SafeAreaView } from "@/components/Themed";
import CameraIcon from '@/components/CameraIcon'; // Import CameraIcon component
import { verticalScale, moderateScale, horizontalScale } from '@/constants/Metrics';
import { openCamera } from "./../classes/CloudStorage";
import { selectedVehicle, selectedReservation } from "../(tabs)/Bookings";


const ReservationEnded = () => {
  const [frontImage, setFrontImage] = useState('Front');
  const [backImage, setBackImage] = useState('Back');
  const [rightImage, setRightImage] = useState('Right');
  const [leftImage, setLeftImage] = useState('Left');
  const router = useRouter();

  const handleSubmission = () => {
    console.log('Photos submitted!');
    router.push('Pickup/ReservationEnding');
  };

  let imageURI;
  function handleOpenCamera(imageSide){
    let filename = ("dropoff" + imageSide) ;
    let location = ("Reservations/" + selectedReservation.id);
    openCamera(filename, location);
    imageURI = ("gs://pkrides-d3c59.appspot.com/" + location + "/" + filename);
  }



  const renderImage = (imageUri: string | null | undefined) => {
    return imageUri ? (
      <Image source={{ uri: imageUri }} style={styles.image} />
    ) : (
      <Image
        source={require("../../components/CameraIcon.tsx")}
        style={styles.cameraIcon}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Reservation Ended</Text>

      {/* Front Photo */}
      <TouchableOpacity onPress={() => handleOpenCamera(frontImage)}>
        <View style={styles.photoContainer}>
          <Image source={Camera} style={styles.image} />
          {renderImage(frontImage)}
          <Text style={styles.photoText}>
            Please take a photo of the front of the car
          </Text>
        </View>
      </TouchableOpacity>

      {/* Back Photo */}
      <TouchableOpacity onPress={() => handleOpenCamera(setBackImage)}>
        <View style={styles.photoContainer}>
          <Image source={Camera} style={styles.image} />
          {renderImage(backImage)}
          <Text style={styles.photoText}>
            Please take a photo of the back of the car
          </Text>
        </View>
      </TouchableOpacity>

      {/* Right Side Photo */}
      <TouchableOpacity onPress={() => handleOpenCamera(setRightImage)}>
        <View style={styles.photoContainer}>
          <Image source={Camera} style={styles.image} />
          {renderImage(rightImage)}
          <Text style={styles.photoText}>
            Please take a photo of the right side of the car
          </Text>
        </View>
      </TouchableOpacity>

      {/* Left Side Photo */}
      <TouchableOpacity onPress={() => handleOpenCamera(setLeftImage)}>
        <View style={styles.photoContainer}>
          <Image source={Camera} style={styles.image} />
          {renderImage(leftImage)}
          <Text style={styles.photoText}>
            Please take a photo of the left side of the car
          </Text>
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
    justifyContent: "center",
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
  photo: {
    width: moderateScale(60),
    height: moderateScale(60),
    borderRadius: moderateScale(10),
    marginRight: horizontalScale(10),
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  submitButton: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: verticalScale(30),
    borderRadius: moderateScale(25),
  },
  image: {
    backgroundColor: "#ECFAFF",
    borderRadius: moderateScale(10),
    marginRight: horizontalScale(10),
  },
});

export default ReservationEnded;
