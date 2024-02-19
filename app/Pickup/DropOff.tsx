import React from 'react';
import { View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppButton from '../../components/AppButton';

const DropOff = () => {
  return (
    <LinearGradient
      colors={['#FFFFFF', '#0099CC']}
      start={{ x: 1, y: 0.3 }}
      style={{ flex: 1, padding: 20, backgroundColor: 'white' }}
    >
      <Text style={{ fontSize: 40, fontWeight: 'bold', marginBottom: 5, marginTop: 80 }}>
        Your reservation is Ending soon
      </Text>

      {/* Active Duration Box */}
      <View style={{ alignItems: 'center', marginBottom: 40, marginTop: 80}}>
        <View style={{ backgroundColor: 'white', borderWidth: 1, borderColor: 'black', padding: 50, borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
          <Image source={require('../../components/images/clock.png')} style={{ marginRight: 20, width: 100, height: 100 }} />
          <View>
            <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 10 }}>4:00Min</Text>
          
          </View>
        </View>
      </View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 50, marginTop: 30 }}>
      Please return to drop off location and press drop off before the timer ends
      </Text>

      {/* Drop Off */}
      <AppButton
        style={{ height: 50, width: '90%', justifyContent: 'center', alignSelf: 'center', marginTop: 20 }}
        onPress={() => console.log('Drop off')}
      >
        Drop Off
      </AppButton>
    </LinearGradient>
  );
};

export default DropOff;
