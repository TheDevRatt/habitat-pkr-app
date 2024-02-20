import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AppButton from '../../components/AppButton';

const PicturesPage = () => {
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [rightImage, setRightImage] = useState(null);
  const [leftImage, setLeftImage] = useState(null);

  const handleSubmission = () => {
    console.log('Photos submitted!');
    console.log('Front Image:', frontImage);
    console.log('Back Image:', backImage);
    console.log('Right Image:', rightImage);
    console.log('Left Image:', leftImage);
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
      const imageResult = pickerResult.assets[0]; // Extract the first item from the assets array
      const newUri = imageResult.uri + '?' + new Date().getTime(); // Add timestamp to URI
      console.log('New photo URI:', newUri); // Log the new URI for debugging
      setImage(newUri);
    }
  };
  

  const renderImage = (imageUri) => {
    return imageUri ? (
      <Image source={{ uri: imageUri }} style={styles.photo} key={imageUri} />
    ) : (
      <Image source={require('../../components/images/camera.png')} style={styles.cameraIcon} />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Photo time!
      </Text>

      {/* Front Photo */}
      <TouchableOpacity onPress={() => openCamera(setFrontImage)}>
        <View style={styles.photoContainer}>
          {renderImage(frontImage)}
          <Text style={styles.photoText}>Please take a photo of the front of the car</Text>
        </View>
      </TouchableOpacity>

      {/* Back Photo */}
      <TouchableOpacity onPress={() => openCamera(setBackImage)}>
        <View style={styles.photoContainer}>
          {renderImage(backImage)}
          <Text style={styles.photoText}>Please take a photo of the back of the car</Text>
        </View>
      </TouchableOpacity>

      {/* Right Side Photo */}
      <TouchableOpacity onPress={() => openCamera(setRightImage)}>
        <View style={styles.photoContainer}>
          {renderImage(rightImage)}
          <Text style={styles.photoText}>Please take a photo of the right side of the car</Text>
        </View>
      </TouchableOpacity>

      {/* Left Side Photo */}
      <TouchableOpacity onPress={() => openCamera(setLeftImage)}>
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
        Submit
      </AppButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white', 
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 80,
    textAlign: 'center',
  },
  photoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  cameraIcon: {
    width: 60,
    height: 60,
  },
  photoText: {
    flexShrink: 1,
    fontSize: 22,
    fontWeight: 'bold',
  },
  photo: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  submitButton: {
    height: 50,
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
    backgroundColor: 'orange', 
    borderRadius: 25, 
    color: 'white', 
  },
});

export default PicturesPage;
