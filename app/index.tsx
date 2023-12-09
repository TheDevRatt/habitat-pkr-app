// index.tsx
import React from "react";
import { Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "../components/Themed";
import { FontAwesome } from "@expo/vector-icons";

import PKRLogo from "@/components/PKRLogo";
import AppButton from "@/components/AppButton"; // Import the Button component
import DividerWithText from "@/components/DividerWithText";

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={["#FFFFFF", "#0099CC"]}
      className="flex-1 items-center bg-white"
    >
      <PKRLogo className="mt-[76px]" />
      <Text className="text-8xl font-semibold italic width-[393px] height-[135px] text-black pt-[15px]">
        PKRides
      </Text>
      <Text className="text-center text-base text-black">
        By Habitat for Humanity {"\n"} Peterborough & {"\n"} Kawartha Region
      </Text>
      <AppButton
        className="flex-initial mt-[29px] w-[350px] h-[55px] justify-center"
        onPress={() => console.log("Log in Button Pressed")}
      >
        Log In
      </AppButton>

      <AppButton
        className="flex-initial mt-[29px] w-[350px] h-[55px] justify-center"
        onPress={() => console.log("Sign Up Button Pressed")}
      >
        Sign Up
      </AppButton>

      <DividerWithText />

      <View className="flex-row space-x-10 bg-transparent">
        <AppButton
          className="flex-initial w-[160px] h-[55px] justify-center"
          onPress={() => console.log("Google Sign In Button Pressed")}
          icon="google"
        >
          Google
        </AppButton>

        <AppButton
          className="flex-initial w-[160px] h-[55px] justify-center"
          onPress={() => console.log("Apple Sign In Button Pressed")}
          icon="apple"
        >
          Apple
        </AppButton>
      </View>
    </LinearGradient>
  );
}
