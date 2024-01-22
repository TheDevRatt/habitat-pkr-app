import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
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

    const imageResult = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!imageResult.cancelled) {
      setImage(imageResult.uri);
    }
  };

  return (
    <LinearGradient
      colors={['#FFFFFF', '#0099CC']}
      start={{ x: 1, y: 0.3 }}
      style={{ flex: 1, padding: 20 }}
    >
      <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 30, marginTop: 80 }}>
        Photo time!
      </Text>

      {/* Front Photo */}
      <TouchableOpacity onPress={() => openCamera(setFrontImage)}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 40 }}>
          <View style={{ backgroundColor: 'white', padding: 10, borderRadius: 10, marginRight: 10 }}>
            <Image source={require('../../components/images/camera.png')} />
          </View>
          <Text style={{ flexShrink: 1, fontSize: 22, fontWeight: 'bold' }}>Please take a photo of the front of the car</Text>
        </View>
      </TouchableOpacity>

      {/* Back Photo */}
      <TouchableOpacity onPress={() => openCamera(setBackImage)}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 40 }}>
          <View style={{ backgroundColor: 'white', padding: 10, borderRadius: 10, marginRight: 10 }}>
            <Image source={require('../../components/images/camera.png')} />
          </View>
          <Text style={{ flexShrink: 1, fontSize: 22, fontWeight: 'bold' }}>Please take a photo of the back of the car</Text>
        </View>
      </TouchableOpacity>

      {/* Right Side Photo */}
      <TouchableOpacity onPress={() => openCamera(setRightImage)}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 40 }}>
          <View style={{ backgroundColor: 'white', padding: 10, borderRadius: 10, marginRight: 10 }}>
            <Image source={require('../../components/images/camera.png')} />
          </View>
          <Text style={{ flexShrink: 1, fontSize: 22, fontWeight: 'bold' }}>Please take a photo of the right side of the car</Text>
        </View>
      </TouchableOpacity>

      {/* Left Side Photo */}
      <TouchableOpacity onPress={() => openCamera(setLeftImage)}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 40 }}>
          <View style={{ backgroundColor: 'white', padding: 10, borderRadius: 10, marginRight: 10 }}>
            <Image source={require('../../components/images/camera.png')} />
          </View>
          <Text style={{ flexShrink: 1, fontSize: 22, fontWeight: 'bold' }}>Please take a photo of the left side of the car</Text>
        </View>
      </TouchableOpacity>

      {/* Submit Button */}
      <AppButton
        style={{ height: 50, width: '90%', justifyContent: 'center', alignSelf: 'center', marginTop: 30 }}
        onPress={handleSubmission}
      >
        Submit
      </AppButton>
    </LinearGradient>
  );
};

export default PicturesPage;
