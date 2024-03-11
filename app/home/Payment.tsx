import React from "react";
import { StyleSheet, View, Image } from "react-native";
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
import { Link, useRouter } from "expo-router";
import AppButton from "@/components/AppButton";

const Payment = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack(); // Navigate to the previous screen
  };
  const router = useRouter();
  const bookingDetails = {
    make: "Honda",
    model: "Civic",
    bookingId: "743774432",
    pickUpDate: "08/11/2023",
    pickUpTime: "9:30 AM",
    dropOffDate: "08/15/2023",
    dropOffTime: "11:30 AM",
    mileage: "Unlimited",
    insurance: "Included",
    rentalPrice: "$600",
    weekendPremium: "$20",
    taxes: "$80",
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
          <Text style={styles.title}>Select Booking Dates:</Text>
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
        <View style={styles.detailsContainer}>
          <View style={styles.detailRowCard}>
            <Text style={styles.detailLabelCard}>Mileage:</Text>
            <Text style={styles.detailValueCard}>{bookingDetails.mileage}</Text>
          </View>
          <View style={styles.detailRowCard}>
            <Text style={styles.detailLabelCard}>Insurance:</Text>
            <Text style={styles.detailValueCard}>{bookingDetails.insurance}</Text>
          </View>
          <View style={styles.detailRowCard}>
            <Text style={styles.detailLabelCard}>Rental Price:</Text>
            <Text style={styles.detailValueCard}>{bookingDetails.rentalPrice}</Text>
          </View>
          <View style={styles.detailRowCard}>
            <Text style={styles.detailLabelCard}>Weekend Premium:</Text>
            <Text style={styles.detailValueCard}>
              {bookingDetails.weekendPremium}
            </Text>
          </View>
          <View style={styles.detailRowCard}>
            <Text style={styles.detailLabelCard}>Taxes:</Text>
            <Text style={styles.detailValueCard}>{bookingDetails.taxes}</Text>
          </View>
          <View style={styles.detailRowCard}>
            <Text style={styles.detailLabelCard}>Total Price:</Text>
            <Text style={styles.detailValueCard}>{bookingDetails.totalPrice}</Text>
          </View>
         
          </View>
          <View style={styles.buttonContainer}>
            <AppButton
              onPress={() => router.push({ pathname: "/home/${carId}" })}
              backgroundColor="#E55D25"
              widthPercentage={45}
                textStyle={{color:"#fff"}}
            >
              Pay
            </AppButton>
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
    marginVertical: verticalScale(20),
    width:"80%"
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
  buttonContainer: {
    alignItems: "center",
    marginTop: verticalScale(20),
  },
  payButton: {
    backgroundColor: "#0099cc",
    borderRadius: 10,
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(20),
  },
  payButtonText: {
    fontFamily: "karlaB",
    fontSize: moderateScale(18),
    color: "white",
  },
  detailRowCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: verticalScale(10),
  },
  detailLabelCard: {
    fontFamily: "karlaB",
    fontSize: moderateScale(16),
    marginBottom: verticalScale(5),
  },
  detailValueCard: {
    fontFamily: "karlaR",
    fontSize: moderateScale(16),
    marginBottom: verticalScale(5),
  },
});

export default Payment;
