import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import AppButton from "../../components/AppButton";
import AnalogClock from "../../components/AnalogClock";
import { useRouter } from "expo-router";
import {
  verticalScale,
  moderateScale,
  horizontalScale,
} from "@/constants/Metrics";
import { EvilIcons } from "@expo/vector-icons";

const DropOff = () => {
  const router = useRouter();

  const handleDropOff = () => {
    router.push("/Pickup/ReservationEnded");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your reservation is ending soon</Text>

      {/* Active Duration Box */}
      <View style={styles.durationBox}>
        <View style={styles.clockContainer}>
          <EvilIcons name="clock" size={125} color="#E85E21" />

          <Text style={styles.durationText}>4:00Min</Text>
        </View>
      </View>
      <View></View>

      <Text style={styles.infoText}>
        Please return to drop off location and press drop off before the timer
        ends
      </Text>

      {/* Drop Off */}
      <AppButton
        widthPercentage={60}
        backgroundColor={"#E55D25"}
        textColor="#fff"
        onPress={handleDropOff}
      >
        <Text style={styles.buttonText}>Drop Off</Text>
      </AppButton>
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
    height: "35%",
  },
  clockContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: verticalScale(25),
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
  button: {
    alignItems: "center",
    marginBottom: verticalScale(20),
  },
});

export default DropOff;
