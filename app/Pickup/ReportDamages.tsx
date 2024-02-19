import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import AppButton from '../../components/AppButton';
import * as ImagePicker from 'expo-image-picker';

const ReportDamages = () => {
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [time, setTime] = useState('');
  const [photos, setPhotos] = useState([]);

  const openCamera = async () => {
    const imageResult = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!imageResult.cancelled) {
      setPhotos([...photos, imageResult.uri]);
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
    <View style={{ flex: 1, padding: 20, backgroundColor: 'white' }}>
      <Text style={{ fontSize: 40, fontWeight: 'bold', marginBottom: 20, marginTop: 20}}>
        Report Accident or Damages
      </Text>

      <Text style={{ fontSize: 24, marginBottom: 10 }}>
        Please describe the damages or report it as much in detail as possible:
      </Text>
      <TextInput
        multiline
        numberOfLines={10}
        style={{ borderWidth: 1, borderColor: 'black', padding: 10, marginBottom: 20, height: '20%' }}
        value={description}
        onChangeText={text => setDescription(text)}
      />

      <Text style={{ fontSize: 24, marginBottom: 10 }}>Location of damage/accident:</Text>
      <TextInput
        style={{ borderBottomWidth: 1, borderColor: 'black', padding: 10, marginBottom: 20, height: 40 }}
        value={location}
        onChangeText={text => setLocation(text)}
      />

      <Text style={{ fontSize: 24, marginBottom: 10 }}>Time of damage/accident occurring:</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: 'black', padding: 8, marginBottom: 20, height: 40, borderRadius: 10, flex: 1 }}
        value={time}
        onChangeText={text => setTime(text)}
      />

      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
        <TouchableOpacity onPress={openCamera}>
          <Image source={require('../../components/images/camera.png')} style={{ width: 60, height: 60 }} />
        </TouchableOpacity>
        <Text style={{ fontSize: 30, flexShrink: 1, marginLeft: 10 }}>
          Attach photos of the accident/damages
        </Text>
      </View>

      {/* Display selected photos */}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 20 }}>
        {photos.map((photo, index) => (
          <Image key={index} source={{ uri: photo }} style={{ width: 100, height: 100, marginRight: 10, marginBottom: 10 }} />
        ))}
      </View>

      <AppButton
       style={{ height: 50, width: '90%', justifyContent: 'center', alignSelf: 'center', backgroundColor: 'orange', marginBottom: 20}}
        onPress={handleSubmit}
      >
        Submit
      </AppButton>
    </View>
  );
};

export default ReportDamages;
