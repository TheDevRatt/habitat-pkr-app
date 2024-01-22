import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useRef } from "react";
import AppButton from "../../components/AppButton";
import { Link, useRouter } from "expo-router";
import Card from "../../components/card";

const Membership = () => {
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#FFFFFF", "#0099CC"]}
      start={{ x: 1, y: 0.2 }}
      className="h-full"
    >
      <SafeAreaView className="m-2 flex-1 items-center">
        <View>
          <Text className="font-Karla_500Medium mt-14 text-5xl items-start mr-5">
            Membership
          </Text>
          <Text className="font-Karla_500Medium mt-8 text-[26px] items-start mr-5">
            Select a membership plan
          </Text>
        </View>
        <View className="w-[100%] items-center mt-6">
          <Card>
            <Text className="font-Karla_400Regular text-3xl py-1 m-2">
              Monthly Plan
            </Text>
            <Text className="font-Karla_400Regular text-5xl m-2">$12.99</Text>
            <Text className="font-Karla_400Regular text-xl m-2 mt-0">
              per Month
            </Text>
          </Card>
        </View>

        <View className="w-[100%] items-center mt-6">
          <Card>
            <Text className="font-Karla_400Regular text-3xl m-2">
              Yearly Plan
            </Text>
            <Text className="font-Karla_400Regular text-5xl m-2">$120.99</Text>
            <Text className="font-Karla_400Regular text-xl m-2 mt-0">
              per Year
            </Text>
          </Card>
        </View>

        <View className="mt-16 w-[80%]">
          <AppButton
            className="py-2"
            onPress={() => router.push("/Pickup/ActiveReservation")}
          >
            <Text className="font-Karla_400Regular text-[22]">Continue</Text>
          </AppButton>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Membership;
