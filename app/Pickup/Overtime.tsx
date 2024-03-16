import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppButton from '../../components/AppButton';
import AnalogClock from '../../components/AnalogClock';
import { useRouter } from 'expo-router'; // import useRouter

const Overtime = () => {
  const router = useRouter(); // initialize router

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
        <Text style={styles.headerText}>-8:40min</Text>
      </View>

      <Text style={styles.instructionText}>
      You are currently in OVERTIME and you are being charged a premium for which you will be billed for accordingly.
      </Text>
      <Text style={styles.instructionText}>
        {"\n"}Please return to drop off location and press drop of.
      </Text>

      <AppButton
        style={styles.button}
        onPress={() => router.push('/Pickup/DropOff')} 
      >
        <Text style={styles.buttonText}>End Reservation</Text>
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
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  timeSlotBox: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    borderRadius: 10,
    marginBottom: 20,
    marginTop:10,
    height: 250,
    alignItems: 'center', 
  },
  clock: {
    width: 60,
    height: 60,
  },
  instructionText: {
    fontSize: 20,
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

export default Overtime;
