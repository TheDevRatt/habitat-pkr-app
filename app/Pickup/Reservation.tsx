import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import AppButton from "../../components/AppButton";
import AnalogClock from "../../components/AnalogClock";
import { useRouter } from "expo-router";
import { selectedVehicle, selectedReservation } from "../(tabs)/Bookings";
import {
  verticalScale,
  moderateScale,
  horizontalScale,
} from "@/constants/Metrics";
import { EvilIcons } from "@expo/vector-icons";

const Reservation = () => {
  const router = useRouter();

  //const goBack = () => {
  //navigation.goBack();
  //};

  const handleDropOff = () => {
    router.push("/Pickup/ReservationEnded");
  };

  const [timer, setTimer] = useState("timer");
  const [time, setTime] = useState(new Date());
  function isActive() {
    let currentTime = new Date();
    let timeDifference =
      (selectedReservation.StartTime.toDate().getTime() -
        currentTime.getTime()) /
      1000;
    setTimer(new Date(timeDifference * 1000).toISOString().slice(11, 19));
    //router.push({ pathname: "/Pickup/Reservation" });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(isActive());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Reservation is Active</Text>

      {/* Active Duration Box */}
      <View style={styles.durationBox}>
        <View style={styles.clockContainer}></View>
        <View style={styles.timerContainer}>
          <EvilIcons
            name="clock"
            size={120}
            color="#E85E21"
            style={styles.clock}
          />
          <Text style={styles.durationText}>{timer}</Text>
        </View>
      </View>

      <Text style={styles.infoText}>
        Please meet the key-holder at location within the 15 minute time slot to
        pick up the keys.
      </Text>
      <View style={styles.button}>
        <AppButton
          onPress={() => router.push("/Pickup/Pictures")}
          widthPercentage={60}
          backgroundColor={"#E55D25"}
          textColor="#fff"
        >
          Key Collected
        </AppButton>
      </View>
    </View>
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
    marginBottom: verticalScale(5),
    marginTop: horizontalScale(50),
    fontFamily: "karlaM",
    textAlign: "left",
    marginHorizontal: horizontalScale(10),
  },
  durationBox: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2.8,
    elevation: 4,
    width: "95%",
  },
  clockContainer: {},
  clock: {
    marginBottom: verticalScale(20),
  },
  durationText: {
    fontSize: moderateScale(50),
    fontFamily: "karlaEB",
    marginBottom: 10,
  },
  infoText: {
    fontSize: moderateScale(25),
    fontFamily: "karlaR",
    marginBottom: 50,
    marginTop: 30,
    textAlign: "left",
    marginHorizontal: "8%",
  },
  timerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: verticalScale(30),
  },
  button: {
    alignItems: "center",
    marginBottom: verticalScale(20),
  },
});

export default Reservation;
