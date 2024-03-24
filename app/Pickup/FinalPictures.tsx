import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AppButton from '../../components/AppButton';
import { useRouter } from "expo-router"; // import useRouter
import { openCamera } from "./../classes/CloudStorage";
import { selectedVehicle, selectedReservation } from "../(tabs)/Bookings";
import { getUserID } from "../classes/UserUtils";


const FinalPictures = () => {
  const [gasLevelImage, setGasLevelImage] = useState("Gas");
  const router = useRouter(); // initialize router

  const handleSubmission = () => {
    if (!gasLevelImage) {
      alert('Error', 'Please take a photo of the gas level before submitting.');
      return;
    }
    console.log('Final photos submitted!');
    router.push('Pickup/ActiveReservation'); // navigate to Pickup/ActiveReservation
  };

  function handleOpenCamera(gasLevelImage){
    let filename = ("pickup" + gasLevelImage) ;
    let location = ("Reservations/" + selectedReservation.id);
    openCamera(filename, location, getUserID());
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Just a few more details!
      </Text>

      {/* Gas Level Photo */}
      <TouchableOpacity onPress={() => handleOpenCamera(gasLevelImage)}>
        <View style={styles.photoContainer}>
          {gasLevelImage ? (
            <Image source={{ uri: gasLevelImage }} style={styles.photo} />
          ) : (
            <Image source={require('../../components/CameraIcon.tsx')} style={styles.cameraIcon} />
          )}
          <Text style={styles.photoText}>Please take a photo of the gas level on the dashboard</Text>
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
      <AppButton
        style={styles.submitButton}
        onPress={handleSubmission}
      >
        <Text style={styles.buttonText}>Start</Text>
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
    marginRight: 30,
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
  disclaimerContainer: {
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 30,
  },
  disclaimerBox: {
    borderWidth: 2,
    borderColor: 'red',
    padding: 20,
    borderRadius: 4,
  },
  disclaimerText: {
    fontSize: 24,
  },
  agreementText: {
    marginTop: 30,
  },
  submitButton: {
    height: 50,
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 25, // Set border radius to half of the height for full roundness
    backgroundColor: 'orange', // Set the background color to orange
    color: 'white', // Set the text color to white
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default FinalPictures;
