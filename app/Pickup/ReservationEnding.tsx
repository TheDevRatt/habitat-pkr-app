import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import AppButton from '../../components/AppButton';
import * as ImagePicker from 'expo-image-picker';

const ReservationEnded = () => {
  const [image, setImage] = useState(require('../../components/images/camera.png'));

  const openCamera = async () => {
    const imageResult = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!imageResult.cancelled) {
      setImage({ uri: imageResult.uri });
    }
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: 'white' }}>
      <Text style={{ fontSize: 50, fontWeight: 'bold', marginBottom: 10 }}>
        Reservation
      </Text>
      <Text style={{ fontSize: 50, fontWeight: 'bold', marginBottom: 30 }}>
        Ended
      </Text>

      {/* Gas Level Photo */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, flexWrap: 'wrap' }}>
        <TouchableOpacity onPress={openCamera}>
          <Image source={image} style={{ width: 80, height: 80, marginRight: 10 }} />
        </TouchableOpacity>
        <Text style={{ fontSize: 30 }}>
          Please take a photo of the gas level on the dashboard
        </Text>
      </View>

      {/* Submit Photo Button */}
      <AppButton
        style={{ height: 60, width: '100%', justifyContent: 'center', alignSelf: 'center', backgroundColor: 'orange', marginBottom: 20 }}
        onPress={() => console.log('Submit photo')}
      >
        Submit Photo
      </AppButton>

      {/* Time Slot Box */}
      <View style={{ borderWidth: 1, borderColor: 'black', padding: 20, borderRadius: 10, marginBottom: 20, height: 150 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={require('../../components/images/clock.png')} style={{ width: 80, height: 80, marginRight: 10 }} />
          <Text style={{ fontSize: 50, fontWeight: 'bold' }}>4:00</Text>
        </View>
      </View>

      <Text style={{ fontSize: 30, marginBottom: 20 }}>
        Please meet the key-holder at location within the 15-minute time slot to drop off the keys.
      </Text>
    </View>
  );
};

export default ReservationEnded;
