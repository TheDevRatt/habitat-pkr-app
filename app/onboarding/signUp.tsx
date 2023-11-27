import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useRef } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AppButton from "../../components/AppButton";
import { SelectList } from "react-native-dropdown-select-list";
import {Link, useRouter} from 'expo-router'

const SignUp = () => {


  const [selected, setSelected] = React.useState("");

  const data = [
    { key: "1", value: "" },
    { key: "2", value: "she/her/hers" },
    { key: "3", value: "he/him/his" },
    { key: "4", value: "they/them/theirs"},
    { key: "5", value: "other" }
  ];

  return (
    <LinearGradient
      colors={["#FFFFFF", "#0099CC"]}
      start={{ x: 1, y: 0.3 }}
      className="h-full"
    >
      <SafeAreaView className="m-5">
        <View className="mt-10 ml-2">
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
          <View className="flex-row items-center border-b w-90">
              <TextInput
                secureTextEntry={true}
                placeholder={"Password"}
                placeholderTextColor="#000"
                className="font-Karla_400Regular flex-1 py-2 text-2xl"
              />
              <FontAwesome name={"eye"} size={28} />
            </View>
          <TextInput
            keyboardType="numeric"
            placeholder={"Phone Number"}
            placeholderTextColor="#000"
            className="font-Karla_400Regular py-2 border-b text-2xl"
          />
        </View>

        <View className="min-h-0 z-30 w-40 ml-4 mt-10 flex-row">
        <TextInput
            keyboardType="numeric"
            placeholder={"Age"}
            placeholderTextColor="#000"
            className="font-Karla_400Regular w-24 mr-24 py-2 border-b text-2xl"
          />
        <SelectList  
        data={data} 
        setSelected={setSelected} 
        save="value" 
        placeholder="Pronouns" 
        search={false}
        boxStyles={{borderColor:'transparent', borderBottomColor:'black', borderRadius:0, width:167, position:'absolute'}}
        inputStyles={{fontSize:24, paddingLeft:0}}
        dropdownStyles={{ borderColor:'transparent'}}
        dropdownItemStyles={{zIndex:50}}
        />

        </View>
       

        <View className="mt-12 mx-4">
        <AppButton className="py-3" onPress={() => console.log("Button Pressed!")}>
        Create An Account
      </AppButton>
        </View>

        <View className="mt-5 mx-3">
          <Text className="text-center text-base font-Karla_300Light">
            By clicking ‘Create Account’ you agree to Habitat PKR
            <TouchableOpacity className="pt-0.5">
              <Text className="text-link-blue text-base pt-6 underline font-Karla_300Light">
                {" "}
                terms and conditions
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
        
        <View className="flex-row justify-center mt-8">
          <Text className="font-Karla_400Regular text-xl">
            Already have an account?
          </Text>
          <Link href={'/onboarding/logIn'} asChild>
          <TouchableOpacity>
            <Text className="font-Karla_700Bold text-xl text-link-blue underline">
              {" "}
              Log in
            </Text>
          </TouchableOpacity>
          </Link>
        </View>
        
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SignUp;
