import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import PKRLogo from "../../components/PKRLogo";
import AppButton from "../../components/AppButton";

const ForgotPassword = () => {
  const handleResetPassword = () => {
    console.log("Password reset link sent");
  };

  return (
    <LinearGradient
      colors={["#FFFFFF", "#0099CC"]}
      start={{ x: 1, y: 0.3 }}
      className="h-full"
    >
      <SafeAreaView className="m-[3%] flex-1 items-center">
        <PKRLogo className="mt-[7%] scale-120 flex content-center" />
        <View>
          <Text className="font-Karla_500Medium mt-[9%] text-4xl items-start mr-[3%]">
            Forgot Password
          </Text>
        </View>
        <View className="mt-[8%] space-y-10 w-[88%]">
          <TextInput
            placeholder={"Email"}
            placeholderTextColor="#000"
            className="font-Karla_400Regular py-2 border-b text-2xl"
          />
        </View>

        <AppButton
          className="h-[6.5%] mt-[15%] w-[90%] justify-center"
          onPress={handleResetPassword}
        >
          Reset Password
        </AppButton>

        <View className="mt-[15%] items-center">
          <TouchableOpacity>
            <Text className="font-Karla_400Regular items-center text-xl text-link-blue underline">
              {" "}
              Back to Login
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default ForgotPassword;