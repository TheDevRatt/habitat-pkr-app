import React, { useState } from "react";
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
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "@/constants/Metrics";
import BackButton from "@/components/BackButton";

const Membership = () => {
  const router = useRouter();

  const [selectedMembership, setSelectedMembership] = useState(null);

  const handleSelectMembership = (membership: any) => {
    setSelectedMembership(membership);
  };

  return (
    <LinearGradient
      colors={["#FFFFFF", "#0099CC"]}
      start={{ x: 1, y: 0.2 }}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.backButtonContainer}>
          <BackButton />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Membership</Text>
        </View>

        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Select a membership plan</Text>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => handleSelectMembership("Monthly Plan")}
          >
            <View style={styles.cardContainer}>
              <Card
                isSelected={selectedMembership === "Monthly Plan"}
                onPress={() => handleSelectMembership("Monthly Plan")}
              >
                <Text style={styles.cardTitle}>Monthly Plan</Text>
                <Text style={styles.cardPrice}>$12.99</Text>
                <Text style={styles.cardDescription}>per Month</Text>
              </Card>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleSelectMembership("Yearly Plan")}
          >
            <View style={styles.cardContainer}>
              <Card
                isSelected={selectedMembership === "Yearly Plan"}
                onPress={() => handleSelectMembership("Yearly Plan")}
              >
                <Text style={styles.cardTitle}>Yearly Plan</Text>
                <Text style={styles.cardPrice}>$120.99</Text>
                <Text style={styles.cardDescription}>per Year</Text>
              </Card>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <AppButton
            widthPercentage={85}
            paddingVertical={10}
            onPress={() => router.push("/onboarding/paymentInfo")}
          >
            <Text>Continue</Text>
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
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "space-around",
    paddingHorizontal: horizontalScale(10),
  },
  backButtonContainer: {
    flexDirection: "row",
    backgroundColor: "transparent",
    marginLeft: horizontalScale(20),
  },
  titleContainer: {
    alignItems: "center",
    backgroundColor: "transparent",
  },
  title: {
    fontFamily: "karlaM",
    fontSize: moderateScale(44),
  },
  subtitleContainer: {
    alignItems: "center",
    backgroundColor: "transparent",
  },
  subtitle: {
    fontFamily: "karlaM",
    marginVertical: verticalScale(10),
    fontSize: moderateScale(26),
  },
  cardContainer: {
    width: "100%",
    alignItems: "center",
    marginVertical: "5%",
  },
  cardTitle: {
    fontFamily: "karlaR",
    textAlign: "center",
    fontSize: moderateScale(28),
    backgroundColor: "transparent",
    marginTop: verticalScale(10),
  },
  cardPrice: {
    fontFamily: "karlaM",
    textAlign: "center",
    fontSize: moderateScale(40),
    marginVertical: verticalScale(15),
  },
  cardDescription: {
    fontFamily: "karlaR",
    textAlign: "center",
    fontSize: moderateScale(20),
  },
  buttonContainer: {
    alignItems: "center",
    backgroundColor: "transparent",
    marginVertical: verticalScale(10),
  },
});

export default Membership;
