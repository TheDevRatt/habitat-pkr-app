import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AppButton from '../../components/AppButton';
import { useRouter } from "expo-router";
import Camera from "../../assets/images/camera.png";
import {
  verticalScale,
  moderateScale,
  horizontalScale,
} from "@/constants/Metrics";
import { SafeAreaView } from "@/components/Themed";


const ReservationEnded = () => {
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [rightImage, setRightImage] = useState(null);
  const [leftImage, setLeftImage] = useState(null);
  const router = useRouter();

  const handleSubmission = () => {
    console.log('Photos submitted!');
    console.log('Front Image:', frontImage);
    console.log('Back Image:', backImage);
    console.log('Right Image:', rightImage);
    console.log('Left Image:', leftImage);
    router.push('/Pickup/ReservationEnding');
  };

  const openCamera = async (setImage) => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
  
    if (permissionResult.granted === false) {
      alert('Permission to access camera is required!');
      return;
    }
  
    const pickerResult = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
  
    if (!pickerResult.cancelled) {
      const imageResult = pickerResult.assets[0]; 
      const newUri = imageResult.uri + '?' + new Date().getTime(); 
      console.log('New photo URI:', newUri); 
      setImage(newUri);
    }
  };
  

  const renderImage = (imageUri) => {
    return imageUri ? (
      <Image source={{ uri: imageUri }} style={styles.photo} key={imageUri} />
    ) : (
      <Image source={require('../../components/CameraIcon.tsx')} style={styles.cameraIcon} />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Reservation Ended
      </Text>

      {/* Front Photo */}
      <TouchableOpacity onPress={() => openCamera(setFrontImage)}>
      <View style={styles.photoContainer}>
        <Image source={Camera} style={styles.image} />
          {renderImage(frontImage)}
          <Text style={styles.photoText}>Please take a photo of the front of the car</Text>
        </View>
      </TouchableOpacity>

      {/* Back Photo */}
      <TouchableOpacity onPress={() => openCamera(setBackImage)}>
        <View style={styles.photoContainer}>
        <Image source={Camera} style={styles.image} />
          {renderImage(backImage)}
          <Text style={styles.photoText}>Please take a photo of the back of the car</Text>
        </View>
      </TouchableOpacity>

      {/* Right Side Photo */}
      <TouchableOpacity onPress={() => openCamera(setRightImage)}>
        <View style={styles.photoContainer}>
        <Image source={Camera} style={styles.image} />
          {renderImage(rightImage)}
          <Text style={styles.photoText}>Please take a photo of the right side of the car</Text>
        </View>
      </TouchableOpacity>

      {/* Left Side Photo */}
      <TouchableOpacity onPress={() => openCamera(setLeftImage)}>
        <View style={styles.photoContainer}>
        <Image source={Camera} style={styles.image} />
          {renderImage(leftImage)}
          <Text style={styles.photoText}>Please take a photo of the left side of the car</Text>
        </View>
      </TouchableOpacity>

      {/* Submit Button */}
      <View style={styles.submitButton}>
      <AppButton
        backgroundColor="#E55D25" onPress={handleSubmission}>
    
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
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
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
