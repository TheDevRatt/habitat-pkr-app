import React, {Component, useEffect} from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { LinearGradient } from "expo-linear-gradient";
import { verticalScale } from "@/constants/Metrics";
import {NavigationContainer, useIsFocused } from '@react-navigation/native';
import { auth } from "@/firebase";

//function HomeScreen(){
    //const isFocused = useIsFocused();
    //useEffect(() => {
      //if (isFocused) {
      //console.log("hello");
        // Perform actions you want when the screen is focused.
        // This could be fetching data, re-rendering components, or any other refresh logic.
        //const user = auth.currentUser;
        //let userName;
          //if (user !== null) {
            //userName = user.displayName;
          //}
      //}
    //}, [isFocused]);
//}

interface CarProps {
  name: string;
  transmission: string;
  pricePerDay: string;
  pricePerHour: string;
}

const Home = () => {

  const userName = "placeholder";

  return (
    <LinearGradient colors={["#FFFFFF", "#59C9F0"]} style={styles.gradient}>
      <View style={styles.container}>
        <Text style={styles.greeting}>Hello, {userName}!</Text>
        <Text style={styles.instructions}>Select a car to rent</Text>
        <View style={styles.carList}>
          <CarItem
            name="Honda Civic"
            transmission="Automatic"
            pricePerDay="$150 per day"
            pricePerHour="$22/hour"
          />
          <CarItem
            name="Toyota Yaris"
            transmission="Automatic"
            pricePerDay="$130 per day"
            pricePerHour="$20/hour"
          />
          <CarItem
            name="Nissan Juke"
            transmission="Automatic"
            pricePerDay="$165 per day"
            pricePerHour="$25/hour"
          />
        </View>
      </View>
    </LinearGradient>
  );
};

const CarItem: React.FC<CarProps> = ({
  name,
  transmission,
  pricePerDay,
  pricePerHour,
}) => {
  return (
    <View style={styles.carItem}>
      <Text style={styles.carName}>{name}</Text>
      <Text>{transmission}</Text>
      <Text>{pricePerDay}</Text>
      <Text>{pricePerHour}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    alignItems: "center",
    width:"100%",
    
  },
  container: {
    marginTop:verticalScale(65),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    width:"90%"
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  instructions: {
    fontSize: 18,
    marginBottom: 20,
  },
  carList: {
    marginTop:verticalScale(45),
    width: "100%",
    backgroundColor: "transparent",
  },
  carItem: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  carName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default Home;
