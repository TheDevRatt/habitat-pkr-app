import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppButton from '../../components/AppButton';
import AnalogClock from '../../components/AnalogClock';
import { useRouter } from 'expo-router'; // Import useRouter
import { verticalScale, moderateScale, horizontalScale } from '@/constants/Metrics'; // Import all three scales

const Overtime = () => {
  const router = useRouter(); // Initialize router

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        Your Reservation
      </Text>
      <Text style={styles.headerText}>
        is ending soon
      </Text>

      {/* Time Slot Box */}
      <View style={styles.timeSlotBox}>
        <AnalogClock style={styles.clock} />
        <Text style={styles.TimeText}>-8:40Min</Text>
      </View>

      <Text style={styles.instructionText}>
      You are currently in OVERTIME and you are being charged a premium for which you will be billed for accordingly.
      </Text>
      <Text style={styles.instructionText}>
        {"\n"}Please return to drop off location and press drop of.
      </Text>

      <AppButton
        style={styles.button}
        onPress={() => router.push('/Pickup/ReservationEnded')} 
      >
        <Text style={styles.buttonText}>End Reservation</Text>
      </AppButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(20),
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: moderateScale(45),
    fontWeight: 'bold',
    marginBottom: moderateScale(10),
  },
  timeSlotBox: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    borderWidth: moderateScale(1),
    borderColor: 'black',
    padding: moderateScale(4),
    borderRadius: moderateScale(10),
    marginBottom: moderateScale(20),
    marginTop: verticalScale(10),
    height: verticalScale(250),
    alignItems: 'center', 
  },
  TimeText: {
   fontSize: moderateScale(45),
  },
  clock: {
    width: moderateScale(60),
    height: moderateScale(60),
  },
  instructionText: {
    fontSize: moderateScale(25),
  },
  button: {
    height: verticalScale(60),
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'orange',
    marginTop: verticalScale(40),
    marginBottom: verticalScale(20),
    borderRadius: moderateScale(30), 
  },
  buttonText: {
    color: 'white', 
  },
});

export default Overtime;
