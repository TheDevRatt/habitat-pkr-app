import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView, Text } from "@/components/Themed";
import { LinearGradient } from "expo-linear-gradient";
import { horizontalScale, moderateScale, verticalScale } from "@/constants/Metrics";
import { Ionicons } from "@expo/vector-icons";
import CarCard from "@/components/CarCard";

const Home = () => {
  const firstName = "John";

  return (
    <LinearGradient colors={["#FFFFFF", "#59C9F0"]} style={styles.gradient}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.smallImage} />
          <Text style={styles.greeting}>Hello, {firstName}!</Text>
          <Ionicons name="notifications" size={24} color="black" />
        </View>
        <Text style={styles.instructions}>Select a car to rent</Text>
        {/* Search Bar - To be implemented */}
        <View style={styles.filterLogos}>
          {/* Logos - To be implemented */}
        </View>
        <Text style={styles.location}>All cars - Location</Text>
        <View style={styles.carList}>
          <CarCard
            make="Honda"
            model="Civic"
            transmission="Automatic"
            dailyRate={150}
            hourlyRate={22}
            imageUrl={require("@/assets/images/carImagesTEMP/image 8.png")}
          />
          <CarCard
            make="Toyota"
            model="Yaris"
            transmission="Automatic"
            dailyRate={130}
            hourlyRate={20}
            imageUrl={require("@/assets/images/carImagesTEMP/image 9.png")}
          />
          <CarCard
            make="Nissan"
            model="Juke"
            transmission="Automatic"
            dailyRate={165}
            hourlyRate={25}
            imageUrl={require("@/assets/images/carImagesTEMP/image 10.png")}
          />
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: verticalScale(20),
  },
  smallImage: {
    width: 30,
    height: 30,
    backgroundColor: "gray", 
  },
  greeting: {
    fontSize: moderateScale(24),
    fontFamily: "karlaEB",
    marginLeft: 10,
    marginRight: "auto",
  },
  instructions: {
    fontSize: moderateScale(22),
    marginBottom: 20,
    marginTop: 10,
    marginLeft:horizontalScale(60),
    width:"100%",
    fontFamily:"karlaM",
  },
  location: {
    fontSize: moderateScale(20),
    fontFamily:"karlaR",
    marginLeft:horizontalScale(60),
    width:"100%"
  },
  carList: {
    width: "100%",
    marginBottom:verticalScale(20),
    backgroundColor: "transparent",
  },
  filterLogos: {
    flexDirection: "row",
    marginBottom: 10,
  },
});

export default Home;
