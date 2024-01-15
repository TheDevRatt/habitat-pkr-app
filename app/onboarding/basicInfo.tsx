import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Image
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useRef } from "react";
import AppButton from "../../components/AppButton";
import { Link, useRouter } from "expo-router";
import driverLicense from "../../components/images/driverLicense.png";
import insurance from "../../components/images/insuranceREPLACELATER.png";

const BasicInfo = () => {
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#FFFFFF", "#0099CC"]}
      start={{ x: 1, y: 0.3 }}
      className="h-full"
    >
      <SafeAreaView className="m-2 flex-1 items-center">
        <View>
          <Text className="font-Karla_500Medium mt-14 text-5xl items-start mr-5">
            Add Information
          </Text>
        </View>
        <View className="items-center">
          <Text className="font-Karla_400Regular border-b text-2xl mt-10 mb-9">
            Driver's License
          </Text>
         <Image source={driverLicense}/>
         <AppButton className="mt-10 mb-2 px-5 bg-transparent rounded-sm border border-dashed" onPress={() => console.log("Open camera pressed")}>
       Open Camera
      </AppButton>
      <AppButton className="mb-6 px-5 bg-transparent rounded-sm border border-dashed" onPress={() => console.log("Open camera pressed")}>
        Upload File
      </AppButton>
        </View>

        <View className="items-center">
          <Text className="font-Karla_400Regular border-b text-2xl mb-9">
            Insurance
          </Text>
         <Image source={insurance}/>
         <AppButton className="mt-10 px-5 bg-transparent rounded-sm border border-dashed" onPress={() => console.log("Open camera pressed")}>
        Upload File
      </AppButton>
        </View>
        <View className="mt-14">
          <AppButton
            className="w-80"
            onPress={() => router.push("/onboarding/membership")}
          >
            Next
          </AppButton>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default BasicInfo;
