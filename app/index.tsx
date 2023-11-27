import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";


const HomeScreen = () => {
 

  return (
    <LinearGradient
      colors={["#FFFFFF", "#0099CC"]}
      start={{ x: 1, y: 0.3 }}
      className="h-full"
    >
      <SafeAreaView className="m-5 ">
        <View className="mt-4">
          <Text className="font-Karla_500Medium text-5xl">Welcome</Text>
        </View>
        <View className="mt-8 mx-4 space-y-9">
          <TextInput
            placeholder={"First Name"}
            placeholderTextColor="#000"
            className="font-Karla_400Regular py-2 border-b text-2xl"
          />
          <TextInput
            placeholder={"Last Name"}
            placeholderTextColor="#000"
            className="font-Karla_400Regular py-2 border-b text-2xl"
          />
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
            <TextInput
            keyboardType="numeric"
            placeholder={"Phone Number"}
            placeholderTextColor="#000"
            className="font-Karla_400Regular py-2 border-b text-2xl"
          />
         
          <Text>
          
            Already have account? Log in!
          </Text>
          
         


        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default HomeScreen;
