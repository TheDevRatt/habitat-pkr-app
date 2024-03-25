import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Link, useRouter } from "expo-router";
import { SafeAreaView, Text, TouchableOpacity } from "@/components/Themed";
import { LinearGradient } from "expo-linear-gradient";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "@/constants/Metrics";
import { Ionicons } from "@expo/vector-icons";
import BookingCard from "@/components/BookingCard";
import AppButton from "@/components/AppButton";

const Bookings = () => {
  const router = useRouter();
  const [currentVisible, setCurrentVisible] = useState(true);

  const goToPickup = () => {
    router.push("/Pickup/ActiveReservation");
  };

  const goToDetails = (bookingId: number) => {
    //router.push({ pathname: "/bookings/${bookingId}" });
  };

  const bookings = [
    {
      id: 1,
      make: "Honda",
      model: "Civic",
      date: "Dec 11 2023",
      amount: 700,
      time: 5,
      unit: "days",
      bookingId: "74374432",
      bookingComplete: false,
      imageUrl: require("@/assets/images/carImagesTEMP/image 13.png"),
    },
    {
      id: 2,
      make: "Honda",
      model: "Civic",
      date: "Dec 15 2023",
      amount: 700,
      time: 2,
      unit: "days",
      bookingId: "74374432",
      bookingComplete: true,
      imageUrl: require("@/assets/images/carImagesTEMP/image 13.png"),
    },
    {
      id: 3,
      make: "Nissan",
      model: "Juke",
      date: "Feb 22 2023",
      amount: 330,
      time: 2,
      unit: "days",
      bookingId: "74374793",
      bookingComplete: false,
      imageUrl: require("@/assets/images/carImagesTEMP/image 10.png"),
    },
  ];

  const currentBookings = bookings.filter(
    (booking) => !booking.bookingComplete
  );
  const previousBookings = bookings.filter(
    (booking) => booking.bookingComplete
  );

  const handleCurrentPress = () => {
    setCurrentVisible(true);
  };

  const handlePreviousPress = () => {
    setCurrentVisible(false);
  };

  return (
    <LinearGradient colors={["#FFFFFF", "#59C9F0"]} style={styles.gradient}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>My Reservations </Text>
        <View style={styles.externalButtonContainer}>
          <View style={styles.externalButton}>
            <AppButton
              onPress={handleCurrentPress}
              widthPercentage={40}
              backgroundColor={currentVisible ? "#E55D25" : "transparent"}
              textStyle={{ color: currentVisible ? "white" : "#333" }}
            >
              Current
            </AppButton>
          </View>
          <View style={styles.externalButton}>
            <AppButton
              onPress={handlePreviousPress}
              widthPercentage={40}
              backgroundColor={currentVisible ? "transparent" : "#E55D25"}
              textStyle={{ color: currentVisible ? "#333" : "white" }}
            >
              Previous
            </AppButton>
          </View>
        </View>
        <ScrollView style={styles.carList}>
          {currentVisible ? (
            <View style={styles.section}>
              {currentBookings.map((booking) => (
                <TouchableOpacity
                  key={booking.id}
                  onPress={() => goToDetails(booking.id)}
                  style={styles.bookingCardContainer}
                >
                  <BookingCard
                    make={booking.make}
                    model={booking.model}
                    date={booking.date}
                    amount={booking.amount}
                    time={booking.time}
                    unit={booking.unit}
                    bookingId={booking.bookingId}
                    imageUrl={booking.imageUrl}
                  />
                </TouchableOpacity>
              ))}
            </View>
          ) : (
            <View style={styles.section}>
              {previousBookings.map((booking) => (
                <TouchableOpacity
                  key={booking.id}
                  style={styles.bookingCardContainer}
                  onPress={() => goToDetails(booking.id)}
                >
                  <BookingCard
                    make={booking.make}
                    model={booking.model}
                    date={booking.date}
                    amount={booking.amount}
                    time={booking.time}
                    unit={booking.unit}
                    bookingId={booking.bookingId}
                    imageUrl={booking.imageUrl}
                  />
                </TouchableOpacity>
              ))}
            </View>
          )}
        </ScrollView>
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
  externalButtonContainer: {
    flexDirection: "row",
    margin: moderateScale(30),
    backgroundColor: "transparent",
  },
  externalButton: {
    marginHorizontal: horizontalScale(15),
    backgroundColor: "transparent",
  },
  section: {
    marginBottom: verticalScale(20),
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  bookingCardContainer: {
    marginBottom: verticalScale(10),
    backgroundColor: "transparent",
  },
  carList: {
    flex: 1,
    width: "100%",
    backgroundColor: "transparent",
  },
});

export default Bookings;
