import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View, SafeAreaView } from "@/components/Themed";
import { Link, useRouter } from "expo-router";
import * as AppleAuthentication from "expo-apple-authentication";
import { StyleSheet } from "react-native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../constants/Metrics";
import PKRLogo from "../components/PKRLogo";
import AppButton from "../components/AppButton";
import DividerWithText from "../components/DividerWithText";

export default function HomeScreen() {
  const router = useRouter();

  const handleAppleSignIn = async () => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });

      console.log("Apple Sign In Credential:", credential);
    } catch (error) {
      console.error("Apple Sign In Error:", error);
    }
  };

  const handleGoogleSignIn = () => {
    console.log("Google Sign In Button Pressed");
  };

  return (
    <LinearGradient colors={["#FFFFFF", "#0099CC"]} style={styles.gradient}>
      <SafeAreaView style={styles.container}>
        <PKRLogo style={styles.logo} />
        <Text style={styles.title}>PKRides</Text>
        <Text style={styles.subtitle}>
          By Habitat for Humanity {"\n"} Peterborough & {"\n"} Kawartha Region
        </Text>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <AppButton onPress={() => router.push("/onboarding/logIn")}>
              Log In
            </AppButton>
          </View>
          <View style={styles.button}>
            <AppButton onPress={() => router.push("/onboarding/signUp")}>
              Sign Up
            </AppButton>
          </View>
        </View>
        <DividerWithText />

        <View style={styles.externalButtonContainer}>
          <View style={styles.externalButton}>
            <AppButton
              widthPercentage={40}
              onPress={handleGoogleSignIn} // Call the Google Sign In function when pressed
              icon="google"
            >
              Google
            </AppButton>
          </View>
          <View style={styles.externalButton}>
            <AppButton
              widthPercentage={40}
              onPress={handleAppleSignIn}
              icon="apple"
            >
              Apple
            </AppButton>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  gradient: {
    flex: 1,
  },
  logo: {
    marginTop: verticalScale(40),
  },
  title: {
    fontSize: moderateScale(90),
    fontFamily: "karlaBI",
    paddingTop: verticalScale(15),
  },
  subtitle: {
    fontFamily: "karlaL",
    fontSize: moderateScale(16),
    textAlign: "center",
    marginVertical: verticalScale(11),
  },
  buttonContainer: {
    marginVertical: verticalScale(15),
    backgroundColor: "transparent",
    marginBottom: verticalScale(35),
  },
  button: {
    marginVertical: moderateScale(15),
    backgroundColor: "transparent",
    fontFamily:"karlaR"
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
