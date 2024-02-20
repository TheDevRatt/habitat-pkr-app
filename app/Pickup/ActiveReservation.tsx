import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppButton from '../../components/AppButton';
import AnalogClock from '../../components/AnalogClock';

const ActiveBooking = ({ navigation }) => {
  const handleResetPassword = () => {
    console.log("Password reset link sent");
  };

  const goToLogin = () => {
    navigation.push('LogIn');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Your reservation is active
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
        onPress={handleResetPassword}
      >
        <Text style={styles.buttonText}>Report an accident or damages</Text>
      </AppButton>

      {/* End Reservation Button */}
      <AppButton
        style={[styles.button, styles.endButton]}
        onPress={goToLogin}
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
    backgroundColor: 'orange',
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  endButton: {
    height: 50,
    marginTop: 20,
  },
});

export default ActiveBooking;