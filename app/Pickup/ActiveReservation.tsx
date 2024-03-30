import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView } from "react-native";
import AnalogClock from "@/components/AnalogClock";
import AppButton from "@/components/AppButton";
import { useRouter } from "expo-router";
import {
  verticalScale,
  moderateScale,
  horizontalScale,
} from "@/constants/Metrics";
import { selectedVehicle, selectedReservation } from "../(tabs)/Bookings";
import { EvilIcons } from "@expo/vector-icons";

const ONE_MINUTE = 60000;

const ActiveBooking = () => {
  const router = useRouter();

  const reportAccident = () => {
    router.push("/Pickup/ReportDamages");
  };

  const endReservationEarly = () => {
    router.push("/Pickup/DropOff");
  };

  // Assuming selectedReservation.EndTime is a firebase timestamp, convert it to a Date object
  const endTime = selectedReservation.EndTime.toDate();

  const [timer, setTimer] = useState("");

  const updateTimer = () => {
    const currentTime = new Date();
    const remainingTime = endTime.getTime() - currentTime.getTime();

    // Check if the reservation time has ended plus 30 minutes buffer
    if (remainingTime + 30 * 60000 < 0) {
      router.push("/Pickup/DropOff");
    } else {
      // Update timer string HH:MM:SS
      const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((remainingTime / 1000 / 60) % 60);
      const seconds = Math.floor((remainingTime / 1000) % 60);
      setTimer(`${hours}:${minutes}:${seconds}`);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(updateTimer, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Your Reservation is Active</Text>

      {/* Active Duration Box */}
      <View style={styles.durationBox}>
        <View style={styles.timerContainer}>
          <EvilIcons name="clock" size={125} color="#E85E21" />
          <Text style={styles.durationText}>{timer}</Text>
          {/* <Text style={styles.durationText}>4 days 23 hours
42 min</Text> */}
        </View>
      </View>

      {/* Report Accident Button */}
      <View style={styles.buttonContainer}>
        <AppButton style={styles.button} onPress={reportAccident}>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: verticalScale(12),
    backgroundColor: "white",
    justifyContent: "space-around",
    alignItems: "center",
  },
  heading: {
    fontSize: moderateScale(40),
    fontWeight: "bold",
    marginBottom: verticalScale(5),
    marginTop: horizontalScale(30),
    fontFamily: "karlaM",
    textAlign: "left",
  },
  durationBox: {
    width: "85%",
    alignItems: "center",
    backgroundColor: "white",
    padding: "5%",
    borderRadius: moderateScale(5),
    shadowColor: "0000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: moderateScale(3.84),
    elevation: 5,
  },
  durationText: {
    fontSize: moderateScale(50),
    fontFamily: "karlaEB",
    marginBottom: 10,
    width: "75%",
  },
  duration: {
    fontSize: moderateScale(28),
    marginBottom: verticalScale(10),
  },
  timerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: verticalScale(25),
  },
  button: {
    width: "90%",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: verticalScale(30),
    marginBottom: verticalScale(20),
    borderRadius: moderateScale(20),
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    height: verticalScale(50),
  },
  buttonText: {
    color: "black",
    textAlign: "center",
    fontSize: moderateScale(20),
  },
  endButton: {
    marginTop: verticalScale(20),
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
  },
});

export default ActiveBooking;
