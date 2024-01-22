import React from 'react';
import { View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppButton from '../../components/AppButton';

const ActiveBooking = () => {
  return (
    <LinearGradient
      colors={['#FFFFFF', '#0099CC']}
      start={{ x: 1, y: 0.3 }}
      style={{ flex: 1, padding: 20, backgroundColor: 'white' }}
    >
      <Text style={{ fontSize: 40, fontWeight: 'bold', marginBottom: 10, marginTop: 80 }}>
        Your reservation is active
      </Text>

      {/* Active Duration Box */}
      <View style={{ alignItems: 'center', marginBottom: 40, marginTop: 100}}>
        <View style={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'black', padding: 50, borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
          <Image source={require('../../components/images/clock.png')} style={{ marginRight: 20, width: 100, height: 100 }} />
          <View>
            <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 10 }}>4 days</Text>
            <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 10 }}>23 hours</Text>
            <Text style={{ fontSize: 28, fontWeight: 'bold' }}>42 mins</Text>
          </View>
        </View>
      </View>

      {/* Report Accident Button */}
      <AppButton
        style={{ height: 80, width: '90%', justifyContent: 'center', alignSelf: 'center', marginTop: 30, marginBottom: 20 }}
        onPress={() => console.log('Report an accident or damages')}
      >
        Report an accident or damages
      </AppButton>

      {/* End Reservation Button */}
      <AppButton
        style={{ height: 50, width: '90%', justifyContent: 'center', alignSelf: 'center', marginTop: 20 }}
        onPress={() => console.log('End reservation early')}
      >
        End reservation early
      </AppButton>
    </LinearGradient>
  );
};

export default ActiveBooking;
