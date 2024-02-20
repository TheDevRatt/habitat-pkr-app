import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppButton from '../../components/AppButton';
import AnalogClock from '../../components/AnalogClock';

const DropOff = () => {
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
        onPress={() => console.log('Drop off')}
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
    flexDirection: 'row', // added this to align the clock and the text horizontally
    alignItems: 'center', // added this to center the items vertically
    marginBottom: 40,
    marginTop: 80,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    padding: 50,
    borderRadius: 10,
  },
  clockContainer: {
    marginRight: 20, // added this to create some space between the clock and the text
  },
  durationText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 20,
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
    borderRadius: 10,
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
