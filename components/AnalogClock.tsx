import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

const AnalogClock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const secondHand = {
    transform: [{ rotateZ: ((date.getSeconds()/60)*360 - 90).toString() + 'deg' }],
    height: 70,
    position: 'absolute',
    bottom: 40, // adjusted this to center the hand
    width: 2,
    backgroundColor: 'black',
    left: 74,
  };

  const minuteHand = {
    transform: [{ rotateZ: ((date.getMinutes()/60)*360 - 90).toString() + 'deg' }],
    height: 55,
    position: 'absolute',
    bottom: 47.5, // adjusted this to center the hand
    width: 4,
    backgroundColor: 'black',
    left: 74,
  };

  const hourHand = {
    transform: [{ rotateZ: ((date.getHours()/12)*360 - 90).toString() + 'deg' }],
    height: 40,
    position: 'absolute',
    bottom: 55, // adjusted this to center the hand
    width: 6,
    backgroundColor: 'black',
    left: 74,
  };

  return (
    <View style={styles.clockFace}>
      <View style={hourHand} />
      <View style={minuteHand} />
      <View style={secondHand} />
    </View>
  );
};

const styles = StyleSheet.create({
  clockFace: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderColor: 'black',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
});

export default AnalogClock;
