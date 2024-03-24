import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import AnalogClock from '@/components/AnalogClock';
import AppButton from '@/components/AppButton';
import { useRouter } from 'expo-router';
import { verticalScale, moderateScale, horizontalScale } from '@/constants/Metrics';
import { selectedVehicle, selectedReservation } from "../(tabs)/Bookings";


const ONE_MINUTE = 60000;

const ActiveBooking = () => {
  const router = useRouter();

  const reportAccident = () => {
    router.push('/Pickup/ReportDamages');
  };

  const endReservationEarly = () => {
    router.push('/Pickup/DropOff');
  };
  const [timer, setTimer] = useState("timer");
  const [time, setTime] = useState(new Date());
  function isActive(){
    let currentTime = new Date();
    let timeWindow = new Date(selectedReservation.EndTime.toDate() + ONE_MINUTE*30);
    timeWindow = (currentTime - timeWindow)/1000;

    if(timeWindow < ONE_MINUTE*30){
        router.push("Pickup/DropOff")
    }

    setTimer(new Date(timeWindow * 1000).toISOString().slice(11, 19));
  }

  useEffect(() => {
    const interval = setInterval(() => {
        setTime(isActive());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Your Reservation is Active</Text>

      {/* Active Duration Box */}
       <View style={styles.durationBox}>
        <View style={styles.clockContainer}>
        </View>
        <View>
            <Text style={styles.durationText}>
                {timer}
            </Text>
        </View>
        </View>

      {/* Report Accident Button */}
      <AppButton style={styles.button} onPress={reportAccident}>
        <Text style={styles.buttonText}>Report an accident or damages</Text>
      </AppButton>

      {/* End Reservation Button */}
      <AppButton style={[styles.button, styles.endButton]} onPress={endReservationEarly}>
        <Text style={styles.buttonText}>End reservation early</Text>
      </AppButton>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: verticalScale(20),
    paddingHorizontal: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  heading: {
    fontSize: moderateScale(40),
    fontWeight: 'bold',
    marginBottom: verticalScale(5),
    marginTop: horizontalScale(30),
    textAlign: 'center',
  },
  durationBox: {
    alignItems: 'center',
    marginBottom: verticalScale(40),
    marginTop: verticalScale(100),
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    padding: horizontalScale(40),
    borderRadius: moderateScale(5),
    flexDirection: 'row',
    justifyContent: 'space-between', // Adjusted alignment
    shadowColor: '0000',
    shadowOffset: {
      width: 0,
      height: verticalScale(2),
    },
    shadowOpacity: 0.25,
    shadowRadius: moderateScale(3.84),
    elevation: 5,
  },
  durationText: {},
  duration: {
    fontSize: moderateScale(28),
    fontWeight: 'bold',
    marginBottom: verticalScale(10),
  },
  button: {
    height: verticalScale(80),
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: verticalScale(30),
    marginBottom: verticalScale(20),
    borderRadius: moderateScale(20),
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: moderateScale(20),
  },
  endButton: {
    height: verticalScale(50),
    marginTop: verticalScale(20),
  },
});

export default ActiveBooking;
