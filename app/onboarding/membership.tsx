import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppButton from "../../components/AppButton";
import { Link, useRouter } from "expo-router";
import Card from "../../components/card";
import { verticalScale, moderateScale } from "@/constants/Metrics";

const Membership = () => {
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#FFFFFF", "#0099CC"]}
      start={{ x: 1, y: 0.2 }}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>Membership</Text>
          <Text style={styles.subtitle}>Select a membership plan</Text>
        </View>
        <View style={styles.cardContainer}>
          <Card>
            <Text style={styles.cardTitle}>Monthly Plan</Text>
            <Text style={styles.cardPrice}>$12.99</Text>
            <Text style={styles.cardDescription}>per Month</Text>
          </Card>
        </View>
        <View style={styles.cardContainer}>
          <Card>
            <Text style={styles.cardTitle}>Yearly Plan</Text>
            <Text style={styles.cardPrice}>$120.99</Text>
            <Text style={styles.cardDescription}>per Year</Text>
          </Card>
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
           borderRadius={20}
           widthPercentage={85}
           paddingVertical={11}
           onPress={() => router.push("/onboarding/paymentInfo")}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </AppButton>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    backgroundColor: "transparent",
  },
  container: {
    alignItems: 'center',
    backgroundColor: "transparent",
  },
  title: {
    fontFamily: 'karlaM',
    marginTop: verticalScale(20),
    fontSize: moderateScale(44),
    backgroundColor: "transparent",
  },
  subtitle: {
    fontFamily: 'karlaM',
    marginVertical: verticalScale(30),
    fontSize: moderateScale(26),
  },
  cardContainer: {
    width: '100%',
    alignItems: 'center',
    marginVertical: verticalScale(25),
  },
  cardTitle: {
    fontFamily: 'karlaR',
    textAlign:'center',
    fontSize: moderateScale(28),
    backgroundColor: "transparent",
    marginTop:verticalScale(10),
  },
  cardPrice: {
    fontFamily: 'karlaM',
    textAlign:'center',
    fontSize: moderateScale(40),
    marginVertical:verticalScale(15),
  },
  cardDescription: {
    fontFamily: 'karlaR',
    textAlign:'center',
    fontSize: moderateScale(20),
  },
  buttonContainer: {
    marginTop: verticalScale(55),
    backgroundColor: "transparent",
  },
  buttonText: {
    fontFamily: 'karlaR',
    fontSize: 24,
  },
});

export default Membership;
