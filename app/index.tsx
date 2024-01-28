import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "../components/Themed";
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
    <LinearGradient
      colors={["#FFFFFF", "#0099CC"]}
      start={{ x: 1, y: 0.1 }}
      className="flex-1 items-center bg-white"
    >
      <PKRLogo className="mt-[18%]" />
      <Text className="text-8xl font-Karla_700Bold_Italic text-black pt-[2.5%]">
        PKRides
      </Text>
      <Text className="font-Karla_300Light text-center text-base text-black">
        By Habitat for Humanity {"\n"} Peterborough & {"\n"} Kawartha Region
      </Text>
      <AppButton
        className="mt-[8%] w-[90%] h-[6.5%] justify-center"
        onPress={() => router.push("/onboarding/logIn")}
      >
        Log In
      </AppButton>

      <AppButton
        className="mt-[5%] w-[90%] h-[6.5%] justify-center"
        onPress={() => router.push("/onboarding/signUp")}
      >
        Sign Up
      </AppButton>

      <DividerWithText />

      <View className="flex-row bg-transparent">
        <AppButton
          className="flex-initial w-[42%] h-[35%] justify-center"
          onPress={handleGoogleSignIn} // Call the Google Sign In function when pressed
          icon="google"
        >
          Google
        </AppButton>

        <AppButton
          className="flex-initial ml-[5.5%] w-[42%] h-[55px] justify-center"
          onPress={handleAppleSignIn}
          icon="apple"
        >
          Apple
        </AppButton>
      </View>
    </LinearGradient>
  );
}
