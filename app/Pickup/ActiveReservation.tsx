import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppButton from '../../components/AppButton';
import AnalogClock from '../../components/AnalogClock';
import { useRouter } from "expo-router";

const ActiveBooking = () => {
  const router = useRouter();

  const reportAccident = () => {
    router.push('Pickup/ReportDamages');
  };

  const endReservationEarly = () => {
    router.push('Pickup/DropOff');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Your Reservation is Active
      </Text>

      {/* Active Duration Box */}
      <View style={styles.durationBox}>
        <AnalogClock />
        <View style={styles.durationText}>
          <Text style={styles.duration}>4 days</Text>
          <Text style={styles.duration}>23 hours</Text>
          <Text style={styles.duration}>42 mins</Text>
        </View>
      </View>

      {/* Report Accident Button */}
      <AppButton
        style={styles.button}
        onPress={reportAccident}
      >
        <Text style={styles.buttonText}>Report an accident or damages</Text>
      </AppButton>

      {/* End Reservation Button */}
      <AppButton
        style={[styles.button, styles.endButton]}
        onPress={endReservationEarly}
      >
        <Text style={styles.buttonText}>End reservation early</Text>
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
    marginBottom: 10,
    marginTop: 80,
    textAlign: 'center',
  },
  durationBox: {
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 100,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    padding: 50,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    shadowColor: "0000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  durationText: {},
  duration: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    height: 80,
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
  },
  endButton: {
    height: 50,
    marginTop: 20,
  },
});

export default ActiveBooking;
