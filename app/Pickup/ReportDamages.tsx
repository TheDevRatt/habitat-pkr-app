import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';
import AppButton from '../../components/AppButton';
import * as ImagePicker from 'expo-image-picker';

const ReportDamages = () => {
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [time, setTime] = useState('');
  const [photos, setPhotos] = useState([]);

  const openCamera = async () => {
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
      setPhotos([...photos, newUri]);
    }
  };

  const handleSubmit = () => {
    // Handle submission logic here
    console.log('Description:', description);
    console.log('Location:', location);
    console.log('Time:', time);
    console.log('Photos:', photos);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Report Accident or Damages
      </Text>

      <Text style={styles.label}>
        Please describe the damages or report it as much in detail as possible:
      </Text>
      <TextInput
        multiline
        numberOfLines={10}
        style={styles.input}
        value={description}
        onChangeText={text => setDescription(text)}
      />

      <Text style={styles.label}>Location of damage/accident:</Text>
      <TextInput
        style={styles.input}
        value={location}
        onChangeText={text => setLocation(text)}
      />

      <Text style={styles.label}>Time of damage/accident occurring:</Text>
      <TextInput
        style={styles.input}
        value={time}
        onChangeText={text => setTime(text)}
      />

      <View style={styles.cameraRow}>
        <TouchableOpacity onPress={openCamera}>
          <Image source={require('../../components/images/camera.png')} style={styles.cameraIcon} />
        </TouchableOpacity>
        <Text style={styles.cameraLabel}>
          Attach photos of the accident/damages
        </Text>
      </View>

      {/* Display selected photos */}
      <View style={styles.photoContainer}>
        {photos.map((photo, index) => (
          <Image key={index} source={{ uri: photo }} style={styles.photo} />
        ))}
      </View>

      <AppButton
        style={styles.submitButton}
        onPress={handleSubmit}
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
    marginBottom: 10,
    marginTop: 20,
  },
  label: {
    fontSize: 24,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 20,
    height: '10%',
  },
  cameraRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  cameraIcon: {
    width: 60,
    height: 60,
  },
  cameraLabel: {
    fontSize: 30,
    flexShrink: 1,
    marginLeft: 10,
  },
  photoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
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
    backgroundColor: 'orange', 
    borderRadius: 25, 
    color: 'white', 
    marginBottom: 20,
  },
});

export default ReportDamages;
