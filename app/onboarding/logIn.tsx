import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useRef } from "react";
import PKRLogo from "../../components/PKRLogo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AppButton from "../../components/AppButton";
import { Link, useRouter } from "expo-router";

const LogIn = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
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
          <Text className="font-Karla_500Medium mt-[9%] text-5xl items-start mr-[3%]">
            Welcome back!
          </Text>
        </View>
        <View className="mt-[8%] space-y-10 w-[88%]">
          <TextInput
            placeholder={"Email"}
            placeholderTextColor="#000"
            className="font-Karla_400Regular py-2 border-b text-2xl"
          />
          <View className="flex-row items-center border-b">
            <TextInput
              secureTextEntry={!isPasswordVisible}
              placeholder={"Password"}
              placeholderTextColor="#000"
              className="font-Karla_400Regular flex-1 py-2 text-2xl"
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <FontAwesome name={isPasswordVisible ? "eye-slash" : "eye"} size={28} />
            </TouchableOpacity>
          </View>
        </View>
        <View className="mt-[4%] ml-[48%]">
          <TouchableOpacity>
            <Text className="font-Karla_400Regular text-lg text-link-blue underline">
              {" "}
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
       
          <AppButton
            className="h-[6.5%] mt-[15%] w-[90%] justify-center"
            onPress={() => console.log("Login Button Pressed!")}
          >
            Log In
          </AppButton>
          

        <View className="mt-[15%] items-center">
          <Text className="font-Karla_400Regular items-center text-xl">
           New around here?
          </Text>
          <Link href={"/onboarding/signUp"} asChild>
            <TouchableOpacity>
              <Text className="font-Karla_700Bold text-xl text-link-blue underline">
                {" "}
                Create an account
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LogIn;
