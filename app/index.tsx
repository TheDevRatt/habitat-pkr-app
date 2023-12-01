// index.tsx
import React from "react";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Text, View } from "../components/Themed";
import PKRLogo from "../components/PKRLogo";
import AppButton from "../components/AppButton"; // Import the Button component
import DividerWithText from "../components/DividerWithText";
import {Link, useRouter} from 'expo-router'
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function HomeScreen() {
const router = useRouter();

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
        onPress={() => router.push('/onboarding/logIn')}
      >
   
        Log In
      </AppButton>

      <AppButton
        className="flex-initial mt-[29px] w-[350px] h-[55px] justify-center"
        onPress={() => router.push('/onboarding/signUp')}
      >
        Sign Up
      </AppButton>

      <DividerWithText />

      <View className="flex-row space-x-10 bg-transparent">

        <AppButton
          className="flex-initial w-[160px] h-[55px] justify-center"
          onPress={() => console.log("Google Button Pressed")}
        >
           {/* <FontAwesome className="mr-4" name={"google"} size={25} /> */}
          <Text className="ml-4" >Google</Text>
          
        </AppButton>

        <AppButton
          className="flex-initial w-[160px] h-[55px] justify-center"
          onPress={() => console.log("Apple Button Pressed")}
        >
           {/* <FontAwesome className="mr-4" name={"apple"} size={25} /> */}
          Apple
        </AppButton>
      </View>
    
    </LinearGradient>
  );
}
