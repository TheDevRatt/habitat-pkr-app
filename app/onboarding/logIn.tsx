import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
  } from "react-native";
  import { LinearGradient } from "expo-linear-gradient";
  import React, { useState, useRef } from "react";
  import PKRLogo from "@/components/PKRLogo";
  import FontAwesome from "@expo/vector-icons/FontAwesome";
  import Button from "@/components/AppButton";
  
  const LogIn = () => {
    const handlePress = () => {
      // Handle the button press event here
      console.log("Button was pressed");
    };
  
    return (
      <LinearGradient
        colors={["#FFFFFF", "#0099CC"]}
        start={{ x: 1, y: 0.3 }}
        className="h-full"
      >
        <SafeAreaView className="m-2 flex-1 items-center">
          <PKRLogo className="mt-10 scale-110 flex content-center" />
          <View>
            <Text className="font-Karla_500Medium mt-14 text-5xl items-start mr-5">
              Welcome back!
            </Text>
          </View>
          <View className="mt-8 space-y-10 w-80">
            <TextInput
              placeholder={"Email"}
              placeholderTextColor="#000"
              className="font-Karla_400Regular py-2 border-b text-2xl"
            />
            <View className="flex-row items-center border-b w-80">
              <TextInput
                secureTextEntry={true}
                placeholder={"Password"}
                placeholderTextColor="#000"
                className="font-Karla_400Regular flex-1 py-2 text-2xl"
              />
              <FontAwesome name={"eye"} size={28} />
            </View>
          </View>
          <View className="mt-4 ml-48">
            <TouchableOpacity>
              <Text className="font-Karla_400Regular text-lg text-link-blue underline">
                {" "}
                Forgot Password?
              </Text>
            </TouchableOpacity>
          </View>
          <View className="mt-12">
            <Button onPress={handlePress}>Log In</Button>
          </View>
  
          <View className="mt-20 flex-1 items-center">
            <Text className="font-Karla_400Regular text-xl">
              New around here?
            </Text>
            <TouchableOpacity>
              <Text className="font-Karla_700Bold text-xl text-link-blue underline">
                {" "}
                Create an account
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </LinearGradient>
    );
  };
  
  export default LogIn;
  