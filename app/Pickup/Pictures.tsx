import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AppButton from '../../components/AppButton';
import { useRouter } from "expo-router";
import { openCamera } from "./../classes/CloudStorage";
import { selectedVehicle, selectedReservation } from "../(tabs)/Bookings";
import { getUserID } from "../classes/UserUtils";


const Pictures = () => {
  const [frontImage, setFrontImage] = useState('Front');
  const [backImage, setBackImage] = useState('Back');
  const [rightImage, setRightImage] = useState('Right');
  const [leftImage, setLeftImage] = useState('Left');
  const router = useRouter();

  const userID = getUserID();

  const handleSubmission = () => {
    console.log('Photos submitted!');
    router.push('Pickup/FinalPictures');
  };

  let imageURI;
  function handleOpenCamera(imageSide){
    let filename = ("pickup" + imageSide) ;
    let location = ("Reservations/" + selectedReservation.id);
    console.log(filename);
    console.log(location);
    console.log(userID);
    openCamera(filename, location, userID);
    imageURI = ("gs://pkrides-d3c59.appspot.com/" + location + "/" + filename);

  }



  const renderImage = (imageUri: string | null | undefined) => {
    return imageUri ? (
      <Image source={{ uri: imageUri }} style={styles.image} />
    ) : (
      <Image source={{ uri: imageUri }} style={styles.cameraIcon} />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Photo Time!
      </Text>

      {/* Front Photo */}
      <TouchableOpacity onPress={() => handleOpenCamera(frontImage)}>
        <View style={styles.photoContainer}>
          {renderImage(frontImage)}
          <Text style={styles.photoText}>Please take a photo of the front of the car</Text>
        </View>
      </TouchableOpacity>

      {/* Back Photo */}
      <TouchableOpacity onPress={() => handleOpenCamera(backImage)}>
        <View style={styles.photoContainer}>
          {renderImage(backImage)}
          <Text style={styles.photoText}>Please take a photo of the back of the car</Text>
        </View>
      </TouchableOpacity>

      {/* Right Side Photo */}
      <TouchableOpacity onPress={() => handleOpenCamera(rightImage)}>
        <View style={styles.photoContainer}>
          {renderImage(rightImage)}
          <Text style={styles.photoText}>Please take a photo of the right side of the car</Text>
        </View>
      </TouchableOpacity>

      {/* Left Side Photo */}
      <TouchableOpacity onPress={() => handleOpenCamera(leftImage)}>
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
    width: 90,
    height: 90,
    marginRight:20
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
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  submitButton: {
    height: 50,
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
    backgroundColor: 'orange', 
    borderRadius: 25, 
  },
});

export default Pictures;
