import React from "react";
import { Link, useRouter } from "expo-router";
import AppButton from "../../components/AppButton";
import { View, Text, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const TermsAndConditions = () => {
  const router = useRouter();
  return (
    <LinearGradient
      colors={["#FFFFFF", "#0099CC"]}
      start={{ x: 1, y: 0.1 }}
      className="flex-1 items-center bg-white"
    >
      <Text className="text-[26px] font-bold mt-[20%] mb-[20px] font-Karla_500Medium text-[#0099CC]">
        Terms and Conditions
      </Text>
      <View className="w-[90%] bg-[#FFFFFF] p-10 rounded-lg border-[1px] border-[#0099CC]">
        <ScrollView>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Karla_400Regular",
              color: "#000",
            }}
          >
            General Site Usage
            {"\n"}
            Last Revised: December 16, 2013
            {"\n\n"}
            Welcome to www.lorem-ipsum.info. This site is provided as a service
            to our visitors and may be used for informational purposes only.
            Because the Terms and Conditions contain legal obligations, please
            read them carefully.
            {"\n\n"}
            1. YOUR AGREEMENT
            {"\n"}
            By using this Site, you agree to be bound by, and to comply with,
            these Terms and Conditions. If you do not agree to these Terms and
            Conditions, please do not use this site.
          </Text>
        </ScrollView>
      </View>
      <AppButton
        className="mt-[5%] w-[90%] h-[6.5%] justify-center"
        onPress={() => router.push("/onboarding/signUp")}
      >
        Back
      </AppButton>
    </LinearGradient>
  );
};

export default TermsAndConditions;
