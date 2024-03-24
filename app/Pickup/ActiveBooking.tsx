import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AnalogClock from '../../components/AnalogClock';
import { verticalScale, moderateScale, horizontalScale } from "@/constants/Metrics";

const ActiveBooking = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Your reservation is Active
      </Text>

      {/* Active Duration Box */}
      <View style={styles.durationBox}>
        <View style={styles.clockContainer}>
          <AnalogClock />
        </View>
        <View>
          <Text style={styles.durationText}>12:02</Text>
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
});

export default ActiveBooking;
