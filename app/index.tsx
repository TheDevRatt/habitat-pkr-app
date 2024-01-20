// index.tsx
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "../components/Themed";
import { Link, useRouter } from "expo-router";



import PKRLogo from "../components/PKRLogo";
import AppButton from "../components/AppButton";
import DividerWithText from "../components/DividerWithText";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#FFFFFF", "#0099CC"]}
      className="flex-1 items-center bg-white"
    >

      <PKRLogo className="mt-[18%]"/>
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
          onPress={() => console.log("Google Sign In Button Pressed")}
          icon="google"
        >
          Google
        </AppButton>

        <AppButton
          className="flex-initial ml-[5.5%] w-[42%] h-[55px] justify-center"
          onPress={() => console.log("Apple Sign In Button Pressed")}
          icon="apple"
        >
          Apple
        </AppButton>
      </View>
    </LinearGradient>
  );
}


