import React from "react";
import { StyleSheet, View } from "react-native";
import { Link, useRouter } from "expo-router";
import { SafeAreaView, Text, TouchableOpacity } from "@/components/Themed";
import { LinearGradient } from "expo-linear-gradient";
import { horizontalScale, moderateScale, verticalScale } from "@/constants/Metrics";
import { Ionicons } from "@expo/vector-icons";
import CarCard from "@/components/CarCard";
import AppButton from "@/components/AppButton";

const Bookings = () => {
  const router = useRouter();

  const goToPickup = () => {
    router.push("/Pickup/ActiveReservation");
  };
  return (
    <LinearGradient colors={["#FFFFFF", "#59C9F0"]} style={styles.gradient}>
      <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Reservations </Text>
      <View style={styles.externalButtonContainer}>
          <View style={styles.externalButton}>
            <AppButton 
            onPress={() => router.push("/onboarding/signUp")}
              widthPercentage={40}
              backgroundColor="#E55D25"
              textStyle={{ colour: "white",}}
            >
              Current
            </AppButton>
          </View>
          <View style={styles.externalButton}>
            <AppButton  onPress={() => router.push("/onboarding/signUp")}
              widthPercentage={40}
              backgroundColor="transparent"
            >
              Previous
            </AppButton>
          </View>
        </View>
        <View style={styles.carList}>
          <TouchableOpacity style={styles.carList} onPress={goToPickup}>
          <CarCard
            make="Honda"
            model="Civic"
            transmission="Automatic"
            dailyRate={150}
            hourlyRate={22}
            imageUrl={require("@/assets/images/carImagesTEMP/image 8.png")}
          />
          </TouchableOpacity>
         
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: verticalScale(20),
    paddingTop: verticalScale(20),
    backgroundColor: "transparent",
  }, 
  title: {
    fontFamily: "karlaM",
    fontSize: moderateScale(44),
    marginTop: verticalScale(10),
  },
  carList: {
    width: "100%",
    marginBottom:verticalScale(20),
    backgroundColor: "transparent",
  },
  externalButtonContainer: {
    flexDirection: "row",
    margin: moderateScale(30),
    backgroundColor: "transparent",
  },
  externalButton: {
    marginHorizontal: horizontalScale(15),
    backgroundColor: "transparent",
  },
});

export default Bookings;
