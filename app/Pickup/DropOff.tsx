import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppButton from '../../components/AppButton';
import AnalogClock from '../../components/AnalogClock';
import { useRouter } from "expo-router";







const DropOff = () => {
  const router = useRouter();

  const handleDropOff = () => {
    router.push('Pickup/ReservationEnded');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Your reservation is Ending soon
      </Text>

      {/* Active Duration Box */}
      <View style={styles.durationBox}>
        <View style={styles.clockContainer}>
          <AnalogClock />
        </View>
        <View>
          <Text style={styles.durationText}>4:00Min</Text>
        </View>
      </View>

      <Text style={styles.infoText}>
        Please return to drop off location and press drop off before the timer ends
      </Text>

      {/* Drop Off */}
      <AppButton
        style={styles.button}
        onPress={handleDropOff}
      >
        <Text style={styles.buttonText}>Drop Off</Text>
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
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 80,
    textAlign: 'center',
  },
  durationBox: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 40,
    marginTop: 80,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    padding: 50,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  clockContainer: {
    marginRight: 20, 
  },
  durationText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 50,
    marginTop: 30,
    textAlign: 'center',
  },
  button: {
    height: 50,
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 25,
    backgroundColor: 'orange',
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default DropOff;

