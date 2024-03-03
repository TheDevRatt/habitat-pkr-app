import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppButton from '../../components/AppButton';
import AnalogClock from '../../components/AnalogClock';
import { useRouter } from 'expo-router'; // import useRouter

const Forfeited = () => {
  const router = useRouter(); // initialize router

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
        onPress={() => router.push('/Pickup/UserReservation')} // navigate to Pickup/UserReservation
      >
        <Text style={styles.buttonText}>Go to My Reservations</Text>
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
  headerText: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  timeSlotBox: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    borderWidth: 1,
    borderColor: 'black',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    height: 150,
    alignItems: 'center', 
  },
  clock: {
    width: 60,
    height: 60,
  },
  instructionText: {
    fontSize: 30,
  },
  button: {
    height: 60,
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'orange',
    marginTop: 40,
    marginBottom: 20,
    borderRadius: 30, 
  },
  buttonText: {
    color: 'white', 
  },
});

export default Forfeited;
