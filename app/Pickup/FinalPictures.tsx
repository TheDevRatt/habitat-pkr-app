import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';
import AppButton from '../../components/AppButton';

const FinalPictures = () => {
  const [gasLevelImage, setGasLevelImage] = useState(null);

  const handleSubmission = () => {
    if (!gasLevelImage) {
      Alert.alert('Error', 'Please take a photo of the gas level before submitting.');
      return;
    }

    console.log('Final photos submitted!');
    console.log('Gas Level Image:', gasLevelImage);
  };

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert('Permission required', 'You need to grant camera permissions to take photos.');
      return;
    }

    const imageResult = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!imageResult.cancelled) {
      setGasLevelImage(imageResult.uri);
    }
  };

  return (
    <LinearGradient
      colors={['#FFFFFF', '#0099CC']}
      start={{ x: 1, y: 0.3 }}
      style={{ flex: 1, padding: 20, backgroundColor: 'white' }}
    >
      <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 30, marginTop: 80 }}>
        Just a few more details!
      </Text>

      {/* Gas Level Photo */}
      <TouchableOpacity onPress={openCamera}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 40 }}>
          <View style={{ backgroundColor: 'white', padding: 10, borderRadius: 10, marginRight: 10 }}>
            <Image source={require('../../components/images/camera.png')} />
          </View>
          <Text style={{ flexShrink: 1, fontSize: 22, fontWeight: 'bold' }}>Please take a photo of the gas level on the dashboard</Text>
        </View>
      </TouchableOpacity>

      {/* Disclaimer */}
      <View style={{ alignItems: 'center', marginBottom: 40, backgroundColor: 'white', marginTop:30 }}>
        <View style={{ borderWidth: 2, borderColor: 'red', padding: 20, borderRadius: 4 }}>
          <Text style={{ fontSize: 24 }}>
            Please note that it is your responsibility to fill up the gas tank,
            and if you go overtime, you will be charged a premium.
          </Text>
          <Text style={{ marginTop: 30, fontSize: 24 }}>
            By pressing “Start” you agree that you have read the above.
          </Text>
        </View>
      </View>

      {/* Submit Button */}
      <AppButton
        style={{ height: 50, width: '90%', justifyContent: 'center', alignSelf: 'center', marginTop: 30 }}
        onPress={handleSubmission}
      >
        Start
      </AppButton>
    </LinearGradient>
  );
};

export default FinalPictures;
