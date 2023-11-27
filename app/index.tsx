import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useRef } from "react";
import PKRLogo from "../components/PKRLogo";

const HomeScreen = () => {
  return (
    <LinearGradient
      colors={["#FFFFFF", "#0099CC"]}
      start={{ x: 1, y: 0.3 }}
      className="h-full"
    >
      <SafeAreaView className="m-2 flex-1 items-center">
        <PKRLogo className="mt-8 scale-110 flex content-center" />
        <View>
          <Text className="font-Karla_500Medium mt-14 text-5xl items-start mr-5">
            Welcome back!
          </Text>
        </View>
        <View className="mt-8 space-y-9 w-80">
          <TextInput
            placeholder={"Email"}
            placeholderTextColor="#000"
            className="font-Karla_400Regular py-2 border-b text-2xl"
          />
          <TextInput
            secureTextEntry={true}
            placeholder={"Password"}
            placeholderTextColor="#000"
            className="font-Karla_400Regular py-2 border-b text-2xl"
          />
        </View>
        <View className="mt-3 ml-48">
            <TouchableOpacity>
              <Text className="font-Karla_400Regular text-lg text-link-blue"> Forgot Password?</Text>
            </TouchableOpacity>
          </View>

      </SafeAreaView>
    </LinearGradient>
  );
};

export default HomeScreen;
