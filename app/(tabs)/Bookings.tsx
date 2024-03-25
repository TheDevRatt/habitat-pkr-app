import React, { useState, useEffect } from "react";
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
import { fetchUserReservations } from "../classes/UserUtils";
import { vehicleList } from "../(tabs)/Home";

export let selectedReservation = [];
export let selectedVehicle = [];
let userReservations = [];
let currentReservations = [];
let previousReservations = [];

const Bookings = () => {

  // console.log(vehicles)

  loadData();

  const router = useRouter();
  const [currentVisible, setCurrentVisible] = useState(true);

  const goToPickup = () => {
    router.push("/Pickup/ActiveReservation");
  };

  const goToDetails = (reservationID : number) => {
    selectedReservation = userReservations[userReservations.findIndex(p => p.id == reservationID)];
    selectedVehicle = vehicleList[vehicleList.findIndex(p => p.id == selectedReservation.CarID)];
    router.push("/Pickup/Reservation");
  }

  if(userReservations){
    currentReservations = userReservations.filter(
        (reservation) => reservation.Active
    );
    previousReservations = userReservations.filter(
        (reservation) => !reservation.Active
    );
  }

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
              textColor={currentVisible ? "#fff" : "#333" }
            >
              Current
            </AppButton>
          </View>
          <View style={styles.externalButton}>
            <AppButton
              onPress={handlePreviousPress}
              widthPercentage={40}
              backgroundColor={currentVisible ? "transparent" : "#E55D25"}
              textColor={currentVisible ? "#333" : "#fff" }
            >
              Previous
            </AppButton>
          </View>
        </View>
        <ScrollView style={styles.carList}>
          {currentVisible ? (
            <View style={styles.section}>
              {currentReservations.map((reservation, index) => (
                <TouchableOpacity
                  key={reservation.id}
                  onPress={() => goToDetails(reservation.id)}
                  style={styles.bookingCardContainer}
                >
                  <BookingCard
                    make={Object.values(vehicleList)[vehicleList.findIndex(p => p.CarID == userReservations.CarID)].Make}
                    model={Object.values(vehicleList)[vehicleList.findIndex(p => p.CarID == userReservations.CarID)].Model}
                    date={reservation.StartTime.toDate().toLocaleString()}
                    amount={reservation.Cost}
                    time={reservation.TotalTime}
                    unit={"hours"}
                    bookingId={reservation.id}
                    imageUrl={Object.values(vehicleList)[vehicleList.findIndex(p => p.CarID == userReservations.CarID)].imageURL}
                  />
                </TouchableOpacity>
              ))}
            </View>
          ) : (
            <View style={styles.section}>
              {previousReservations.map((reservation) => (
                <TouchableOpacity
                  key={reservation.id}
                  style={styles.bookingCardContainer}
                  onPress={() => goToDetails(reservation.id)}
                >
                  <BookingCard
                    make={Object.values(vehicleList)[vehicleList.findIndex(p => p.CarID == userReservations.CarID)].Make}
                    model={Object.values(vehicleList)[vehicleList.findIndex(p => p.CarID == userReservations.CarID)].Model}
                    date={reservation.StartTime.toDate().toLocaleString()}
                    amount={reservation.Cost}
                    time={reservation.TotalTime}
                    unit={"hours"}
                    // bookingId={reservation.id}
                    imageUrl={Object.values(vehicleList)[vehicleList.findIndex(p => p.CarID == userReservations.CarID)].imageURL}                  />                                 />
                </TouchableOpacity>
              ))}
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const loadData = () =>{
let [reservationList, setReservationList] = useState(null);
let [loading, setLoading] = useState(true);
let [error, setError] = useState(null);
    useEffect(() => {
        async function fetchUserReservationsList() {
            try {
                reservationList = await fetchUserReservations();
                setReservationList(reservationList);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        fetchUserReservationsList();
        }, []);
    if (loading) {
        return <Text style={styles.greeting}>Loading</Text>;
        }
    if (error) {
        return <Text style={styles.greeting}>Error: {error.message}</Text>;
        }
    userReservations = reservationList;
    return;
}


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