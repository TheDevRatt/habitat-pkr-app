import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppButton from '../../components/AppButton';
import AnalogClock from '../../components/AnalogClock';
import { useRouter } from 'expo-router'; // Import useRouter
import { verticalScale, moderateScale, horizontalScale } from '@/constants/Metrics'; // Import all three scales

const Forfeited = () => {
  const router = useRouter(); // Initialize router

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        Your Reservation
      </Text>
      <Text style={styles.headerText}>
        is forfeited
      </Text>

      {/* Time Slot Box */}
      <View style={styles.timeSlotBox}>
        <AnalogClock style={styles.clock} />
        <Text style={styles.headerText}>00:00</Text>
      </View>

      <Text style={styles.instructionText}>
        Unfortunately, you have missed your handover period and you have been billed accordingly.
      </Text>
      <Text style={styles.instructionText}>
        {"\n"}For more information, please read FAQ or reach out to Habitat PKR.
      </Text>

      <AppButton
        style={styles.button}
        onPress={() => router.push('/(tabs)/Bookings')} // Navigate to Pickup/UserReservation
      >
        <Text style={styles.buttonText}>Go to My Reservations</Text>
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
    marginBottom: moderateScale(20),
    marginTop: horizontalScale(20),
  },
  timeSlotBox: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    borderWidth: moderateScale(1),
    borderColor: 'black',
    padding: moderateScale(20),
    borderRadius: moderateScale(10),
    marginBottom: moderateScale(20),
    height: verticalScale(180),
    alignItems: 'center', 
  },
  clock: {
    width: moderateScale(60),
    height: moderateScale(60),
  },
  instructionText: {
    fontSize: moderateScale(30),
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

export default Forfeited;
