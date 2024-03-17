import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView, Text } from "@/components/Themed";
import AppButton from "@/components/AppButton";

import { Stack, useRouter, useLocalSearchParams } from "expo-router";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "@/constants/Metrics";
import { LinearGradient } from "expo-linear-gradient";
import { selectedVehicle } from "../(tabs)/Home";

const Details = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack(); // Navigate to the previous screen
  };
  const router = useRouter();


  const Details = {
    make: selectedVehicle.Make,
    model: selectedVehicle.Model,
    specifications: [
      { label: "Capability", value: selectedVehicle.Capacity, icon: "car-seat" },
      { label: "Fuel Tank", value: "41 Litres", icon: "gas-station" },
      { label: "Engine Type", value: selectedVehicle.Transmission, icon: "engine" },
      { label: "Capacity", value: "5 bags", icon: "bag-suitcase" },
    ],
    dailyRate: selectedVehicle.DayRate,
    hourlyRate: selectedVehicle.HourlyRate,
    description:
      "This compact car is well-suited for both city and highway driving, making it an excellent option.",
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
        <ScrollView>
          <Text style={styles.title}>{Details.make}</Text>
          <Image
            source={{uri: selectedVehicle.imageURL}}
            style={styles.image}
          />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.specificationContainer}
          >
            {Details.specifications.map((spec, index) => (
              <View style={styles.specificationCard} key={index}>
                <Text style={styles.specificationLabel}>{spec.label}</Text>
                <View style={styles.specificationText}>
                  <MaterialCommunityIcons
                    name={spec.icon}
                    size={28}
                    color="#E55D25"
                  />
                  <Text style={styles.specificationValue}>{spec.value}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>
              {Details.make} {Details.model}
            </Text>
            <View style={styles.cardRate}>
            <Text style={styles.cardRateText}>{Details.dailyRate}</Text>
            <Text style={styles.cardRateText}>{Details.hourlyRate}</Text>
            </View>
            </View>
            <Text style={styles.cardText}>{Details.description}</Text>
            <View style={styles.buttonContainer}>
              <AppButton
                backgroundColor="#E55D25"
                widthPercentage={50}
                textStyle={{ color: "white" }}
                //onPress={() => console.log("Rent Now")}
                onPress={() => router.push("/home/Bookings")}
              >
                Rent Now
              </AppButton>
            </View>
          </View>
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
    alignItems: "center",
    paddingHorizontal: horizontalScale(20),
    paddingTop: verticalScale(20),
    backgroundColor: "transparent",
  },
  title: {
    fontFamily: "karlaM",
    fontSize: moderateScale(40),
    textAlign: "left",
    marginTop: verticalScale(20),
    marginLeft: horizontalScale(20),
  },
  subtitle: {
    fontFamily: "karlaB",
    fontSize: moderateScale(20),
    marginTop: verticalScale(20),
  },
  image: {
    width: moderateScale(300),
    height: moderateScale(200),
    marginVertical: verticalScale(20),
    alignSelf: "center",
    resizeMode: "contain",
  },
  specificationContainer: {
    marginTop: moderateScale(10),
  },
  specificationCard: {
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(5),
    marginHorizontal: moderateScale(5),
    backgroundColor: "#fff",
    borderRadius: moderateScale(10),
    // elevation: 3,
    height: verticalScale(60),
  },
  specificationText: {
    marginLeft: moderateScale(10),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  specificationLabel: {
    fontSize: moderateScale(12),
    fontFamily: "karlaEL",
    width: "100%",
    marginBottom: verticalScale(8),
  },
  specificationValue: {
    fontSize: moderateScale(18),
    fontFamily: "karlaL",
  },
  card: {
    backgroundColor: "white",
    borderRadius: moderateScale(15),
    padding: moderateScale(20),
    marginTop: 50,
    height:verticalScale(850)
  },
  cardHeader:{
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: verticalScale(20),
  },
  cardRate:{

  },
  cardRateText:{
    fontSize: moderateScale(20),
    fontFamily: "karlaEB",
  },
  
  cardTitle: {
    fontFamily: "karlaB",
    fontSize: moderateScale(30),
    marginBottom: verticalScale(25),
  },
  cardText: {
    fontFamily: "karlaR",
    fontSize: moderateScale(18),
  },
  back: {
    width: "90%",
  },
  buttonContainer: {
    alignItems: "center",
    marginVertical: verticalScale(10),
    marginTop:verticalScale(40),
  },
});

export default Details;
