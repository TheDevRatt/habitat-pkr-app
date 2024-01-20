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
import driverLicense from "../../components/images/driverLicense.png";
import insurance from "../../components/images/insuranceREPLACELATER.png";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';

const BasicInfo = () => {
  const router = useRouter();

  const openCamera = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    if (status === 'granted') {
      let result = await ImagePicker.launchCameraAsync();
      console.log(result);
    } else {
      console.log('Camera permission not granted');
    }
  };

  const openFilePicker = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status === 'granted') {
      let result = await ImagePicker.launchImageLibraryAsync();
      console.log(result);
    } else {
      console.log('File picker permission not granted');
    }
  };

  return (
    <LinearGradient
      colors={["#FFFFFF", "#0099CC"]}
      start={{ x: 1, y: 0.3 }}
      className="h-full"
    >
      <SafeAreaView className="flex-1 items-center">
        <View>
          <Text className="font-Karla_500Medium mt-5 text-[40px] items-start mr-5">
            Add Information
          </Text>
        </View>
        <View className="items-center w-50">
          <Text className="font-Karla_500Medium border-b text-[22px] mt-10 mb-8">
            Driver's License
          </Text>
          <Image source={driverLicense} />
          <View className="flex justify-between w-55">
            <AppButton
              className="flex-row justify-evenly mt-8 mb-2 px-5 w-50 py-1.5 items-center bg-transparent rounded-sm border border-dashed"
              onPress={openCamera}
            >
              <FontAwesome name={"camera"} size={15}  />
              <Text className="font-Karla_400Regular py-2 border-b text-[18px] mt-10 mb-8">
              &nbsp;Open Camera
              </Text>
            </AppButton>
            <AppButton
              className="mb-6 px-5 py-1.5 w-50 bg-transparent rounded-sm border border-dashed"
              onPress={openFilePicker}
            >
              <FontAwesome name={"upload"} size={15} />
              <Text className="font-Karla_400Regular border-b text-[18px] mt-10 mb-8">
              &nbsp;Upload File
              </Text>
            </AppButton>
          </View>
        </View>

        <View className="items-center w-50 mt-5">
          <Text className="font-Karla_400Regular border-b text-2xl mb-9">
            Insurance
          </Text>
          <Image source={insurance} />
          <View className="flex justify-between w-55">
          <AppButton
            className="flex-row justify-evenly mb-6 mt-6 px-5 py-1.5 w-55 bg-transparent rounded-sm border border-dashed"
            onPress={openFilePicker}
          >
          
              <FontAwesome name={"upload"} size={15} />
            <Text className="font-Karla_400Regular border-b text-[18px] mt-10 mb-8">
            &nbsp;Upload File
            </Text>
          </AppButton>
          </View>
        </View>
        <View className="mt-12 w-[80%]">
          <AppButton
            className="py-2"
            onPress={() => router.push("/onboarding/membership")}
          >
             <Text className="font-Karla_400Regular text-[22]">
              Next
            </Text>
          </AppButton>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default BasicInfo;