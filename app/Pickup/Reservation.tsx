import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppButton from '../../components/AppButton';
import AnalogClock from '../../components/AnalogClock';
import { useRouter } from "expo-router";

const Reservation = () => {
  const router = useRouter();

  const handleDropOff = () => {
    router.push('Pickup/ReservationEnded');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Your Reservation is Active
      </Text>

      {/* Active Duration Box */}
      <View style={styles.durationBox}>
        <View style={styles.clockContainer}>
          <AnalogClock />
        </View>
        <View>
          <Text style={styles.durationText}>12:02PM</Text>
        </View>
      </View>

      <Text style={styles.infoText}>
      Please meet the key-holder at location within the 15 minute time slot to pick up the keys.
      </Text>

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
    marginBottom: 1,
    marginTop: 80,
    
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
  
});

export default Reservation;