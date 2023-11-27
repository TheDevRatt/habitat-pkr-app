// index.tsx
import React from "react";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Text, View } from "../components/Themed";
import PKRLogo from "../components/PKRLogo";
import AppButton from "../components/AppButton"; // Import the Button component


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
      <Text className="text-center text-black">
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
    </LinearGradient>
  );
}