import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppButton from '../../components/AppButton';
import AnalogClock from '../../components/AnalogClock';
import { useRouter } from "expo-router";
import { verticalScale, moderateScale, horizontalScale } from "@/constants/Metrics";







const DropOff = () => {
  const router = useRouter();

  const handleDropOff = () => {
    router.push('/Pickup/ReservationEnded');
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
        Please return to drop off location and press drop off location and press drop off before the timer ends
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
    paddingVertical: verticalScale(20),
    paddingHorizontal: moderateScale(20),
    backgroundColor: 'white',
  },
  heading: {
    fontSize: moderateScale(40),
    fontWeight: 'bold',
    marginBottom: verticalScale(5),
    marginTop: verticalScale(80),
    textAlign: 'center',
  },
  durationBox: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: verticalScale(40),
    marginTop: verticalScale(80),
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: moderateScale(50),
    paddingHorizontal: moderateScale(50),
    borderRadius: moderateScale(10),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: verticalScale(2),
    },
    shadowOpacity: 0.23,
    shadowRadius: verticalScale(2.62),
    elevation: verticalScale(4),
  },
  clockContainer: {
    marginRight: moderateScale(20), 
  },
  durationText: {
    fontSize: moderateScale(28),
    fontWeight: 'bold',
    marginBottom: verticalScale(10),
  },
  infoText: {
    fontSize: moderateScale(25),
    marginBottom: verticalScale(50),
    marginTop: verticalScale(30),
    textAlign: 'center',
  },
  button: {
    height: verticalScale(50),
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: verticalScale(20),
    borderRadius: moderateScale(25),
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

