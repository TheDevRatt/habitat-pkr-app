import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AppButton from '../../components/AppButton';
import { useRouter } from "expo-router";
import CameraIcon from '@/components/CameraIcon'; // Import CameraIcon component
import { verticalScale, moderateScale, horizontalScale } from '@/constants/Metrics';

const Pictures = () => {
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
    router.push('/Pickup/FinalPictures');
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
      <CameraIcon style={styles.cameraIcon} />
    );
  };

  const takePhoto = (setImage) => {
    openCamera(setImage);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { marginBottom: verticalScale(30), marginTop: verticalScale(80) }]}>
        Photo Time!
      </Text>

      {/* Front Photo */}
      <TouchableOpacity onPress={() => takePhoto(setFrontImage)}>
        <View style={styles.photoContainer}>
          {renderImage(frontImage)}
          <Text style={styles.photoText}>Please take a photo of the front of the car</Text>
        </View>
      </TouchableOpacity>

      {/* Back Photo */}
      <TouchableOpacity onPress={() => takePhoto(setBackImage)}>
        <View style={styles.photoContainer}>
          {renderImage(backImage)}
          <Text style={styles.photoText}>Please take a photo of the back of the car</Text>
        </View>
      </TouchableOpacity>

      {/* Right Side Photo */}
      <TouchableOpacity onPress={() => takePhoto(setRightImage)}>
        <View style={styles.photoContainer}>
          {renderImage(rightImage)}
          <Text style={styles.photoText}>Please take a photo of the right side of the car</Text>
        </View>
      </TouchableOpacity>

      {/* Left Side Photo */}
      <TouchableOpacity onPress={() => takePhoto(setLeftImage)}>
        <View style={styles.photoContainer}>
          {renderImage(leftImage)}
          <Text style={styles.photoText}>Please take a photo of the left side of the car</Text>
        </View>
      </TouchableOpacity>

      {/* Submit Button */}
      <AppButton
        style={styles.submitButton}
        onPress={handleSubmission}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </AppButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: horizontalScale(20),
    backgroundColor: 'white', 
  },
  title: {
    fontSize: moderateScale(35),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: horizontalScale(30),
  },
  photoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(30),
    marginTop: moderateScale(40),
  },
  cameraIcon: {
    width: moderateScale(70),
    height: moderateScale(70),
    marginRight: horizontalScale(30),
  },
  photoText: {
    flexShrink: 1,
    fontSize: moderateScale(25),
    fontWeight: 'bold',
  },
  photo: {
    width: moderateScale(60),
    height: moderateScale(60),
    borderRadius: moderateScale(10),
    marginRight: horizontalScale(10),
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  submitButton: {
    height: verticalScale(50),
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: verticalScale(30),
    backgroundColor: 'orange', 
    borderRadius: moderateScale(25), 
  },
});

export default Pictures;
