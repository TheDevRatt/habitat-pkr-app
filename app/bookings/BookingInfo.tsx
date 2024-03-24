import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Stack, useRouter, useLocalSearchParams } from "expo-router";
import { SafeAreaView, Text, TouchableOpacity } from "@/components/Themed";
import { LinearGradient } from "expo-linear-gradient";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "@/constants/Metrics";
import { selectedVehicle, selectedReservation } from "../(tabs)/Bookings";

const BookingDetails = () => {
  const ident = useLocalSearchParams();
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack(); // Navigate to the previous screen
  };

  const bookingDetails = {
    make: selectedVehicle.Make,
    model: selectedVehicle.Model,
    bookingId: ident.toString(),
    pickUpDate: "08/11/2023",
    pickUpTime: "9:30 AM",
    dropOffDate: "08/15/2023",
    dropOffTime: "11:30 AM",
    totalPrice: "$700",
  };

  return (
    <LinearGradient colors={["#FFFFFF", "#59C9F0"]} style={styles.gradient}>
      <SafeAreaView style={styles.container}>
        <View style={styles.back}>
          <AntDesign
            name="arrowleft"
            size={24}
            color="black"
            onPress={goBack} 
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Booking Details:</Text>
        </View>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>
            {bookingDetails.make} {bookingDetails.model}
          </Text>
        </View>
        <Image
          source={{uri: selectedVehicle.imageURL}}
          style={styles.image}
        />
        <View style={styles.detailsContainer}>
          <View style={styles.idContainer}>
            <Text style={styles.id}>#743774432</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Pick Up:</Text>

            <Text style={styles.detailValue}>
              <EvilIcons name="calendar" size={24} color="#0099cc" />{" "}
              {bookingDetails.pickUpDate}
              {"     "}
              <EvilIcons name="clock" size={24} color="#0099cc" />
              {bookingDetails.pickUpTime}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Drop Off:</Text>
            <Text style={styles.detailValue}>
              <EvilIcons name="calendar" size={24} color="#0099cc" />{" "}
              {bookingDetails.dropOffDate}
              {"    "}
              <EvilIcons name="clock" size={24} color="#0099cc" />
              {bookingDetails.dropOffTime}
            </Text>
          </View>
          <View style={styles.detailPrice}>
            <Text style={styles.detailPriceLabel}>Total Price:</Text>
            <Text style={styles.detailPriceValue}>
              {bookingDetails.totalPrice}
            </Text>
          </View>
          <Text style={styles.note}>
            Your booking will become active when the handover period of 15
            minutes starts.
          </Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  back: {
    width: "90%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: verticalScale(20),
    paddingHorizontal: horizontalScale(20),
    backgroundColor: "transparent",
  },
  titleContainer: {
    marginVertical: moderateScale(15),
  },
  title: {
    fontFamily: "karlaM",
    fontSize: moderateScale(44),
    alignItems: "center",
  },
  subtitle: {
    fontSize: moderateScale(20),
    fontFamily: "karlaB",
  },
  subtitleContainer: {
    width: "80%",
    marginTop: moderateScale(15),
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: verticalScale(20),
    resizeMode: "contain",
  },
  detailsContainer: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: moderateScale(20),
    marginVertical: verticalScale(15),
    width: "90%",
  },
  detailRow: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: verticalScale(20),
  },
  detailLabel: {
    fontFamily: "karlaB",
    fontSize: moderateScale(25),
    marginBottom: verticalScale(10),
  },
  detailValue: {
    marginLeft: moderateScale(10),
    fontFamily: "karlaR",
    fontSize: moderateScale(22),
  },
  detailPrice: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: verticalScale(20),
  },
  detailPriceLabel: {
    fontSize: moderateScale(20),
    fontFamily: "karlaB",
  },
  detailPriceValue: {
    fontSize: moderateScale(20),
    fontFamily: "karlaB",
  },
  note: {
    fontFamily: "karlaL",
    fontSize: moderateScale(20),
  },
  id: {
    fontSize: moderateScale(14),
    fontFamily: "karlaL",
    color: "#666",
    textAlign: "right",
  },
  idContainer: {
    width: "100%",
  },
});
export default BookingDetails;
