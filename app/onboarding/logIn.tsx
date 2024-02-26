import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useRef } from "react";
import PKRLogo from "../../components/PKRLogo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AppButton from "../../components/AppButton";
import { Link, useRouter } from "expo-router";
import { signinUser } from './../classes/User';
import { getAuth } from "firebase/auth";

const LogIn = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

  return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
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
            value={email}
            onChangeText={newEmail => setEmail(newEmail)}
            placeholderTextColor="#000"
            className="font-Karla_400Regular py-2 border-b text-2xl"
          />
          <View className="flex-row items-center border-b">
            <TextInput
              secureTextEntry={!isPasswordVisible}
              placeholder={"Password"}
              value={password}
              onChangeText={newPassword => setPassword(newPassword)}
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
            onPress={async () => {
                let response = await signinUser(email.trim(),password.trim());
                //alert(response)
                const auth = getAuth();
                const user = auth.currentUser;
                if (user !== null) {
                  // The user object has basic properties such as display name, email, etc.
                  const userEmail = user.email;
                  alert(userEmail);
                }


                        }}
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
    </TouchableWithoutFeedback>
  );
};

export default LogIn;
