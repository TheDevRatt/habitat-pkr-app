import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "@/components/Themed";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "@/constants/Metrics";
import {
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useRef } from "react";
import PKRLogo from "../../components/PKRLogo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AppButton from "../../components/AppButton";
import { signinUser } from './../classes/User';
import { auth } from "@/firebase";
import BackButton from "@/components/BackButton";
import { Link, useRouter, Stack } from "expo-router"; // Import useRouter hook



const LogIn = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleForgotPasswordPress = () => {
    console.log("Navigating to Forgot Password Page");
    // Once forgot password is added this error should go away.
    router.push("/onboarding/ForgotPassword");
  };

  const handleCreateAccountPress = () => {
    console.log("Navigating to Create Account Page");
    router.push("/onboarding/signUp");
  };

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

  return (
    <LinearGradient colors={["#FFFFFF", "#0099CC"]} style={styles.gradient}>
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
          >
            <View style={styles.backButtonContainer}>
              <BackButton />
            </View>

            <View style={styles.logo}>
              <PKRLogo />
            </View>

            <View style={styles.titleContainer}>
              <Text style={styles.title}>Welcome back!</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder={"Email"}
                value={email}
                onChangeText={newEmail => setEmail(newEmail)}
                placeholderTextColor="#000"
                style={styles.inputField}
              />
              <View style={styles.passwordField}>
                <TextInput
                  secureTextEntry={!showPassword}
                  placeholder={"Password"}
                  placeholderTextColor="#000"
                  value={password}
                  onChangeText={newPassword => setPassword(newPassword)}
                  style={[styles.inputField, { flex: 1 }]}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.passwordIcon}
                >
                  <FontAwesome
                    name={showPassword ? "eye" : "eye-slash"}
                    size={28}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity style={styles.forgotPasswordContainer}>
              <Text
                style={styles.forgotPasswordText}
                onPress={handleForgotPasswordPress}
              >
                Forgot Password?
              </Text>
            </TouchableOpacity>
            <View style={styles.loginButton}>
              <AppButton
                widthPercentage={85}
                paddingVertical={10}
                onPress={
                async () => {
                    let response = await signinUser(email.trim(),password.trim());

                    if(response == "good"){
                        router.push("/(tabs)/Home");

                    }else if(response == "email"){
                        alert("Please close the app and verify your email then try again.");

                    }else if(response == "basicinfo"){
                        router.push("/onboarding/basicInfo");

                    }else if(response == "An error has occurred"){
                        alert("An error has occurred, please try again")

                    }else{
                        alert(response);
                    }



                }}

              >
                Log In
              </AppButton>
            </View>
            <View style={styles.newAccountContainer}>
              <Text style={styles.newAccountText}>New around here?</Text>
              <TouchableOpacity
                onPress={handleCreateAccountPress}
                style={{ backgroundColor: "transparent" }}
              >
                <Text style={styles.createAccountLink}>Create an account</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    paddingHorizontal: horizontalScale(10),
  },
  logo: {
    alignItems: "center",
    backgroundColor: "transparent",
    marginTop: verticalScale(30),
  },
  backButtonContainer: {
    flexDirection: "row",
    backgroundColor: "transparent",
    marginLeft: horizontalScale(10),
  },
  titleContainer: {
    marginTop: verticalScale(30),
    marginBottom: verticalScale(20),
    alignItems: "center",
    backgroundColor: "transparent",
  },
  title: {
    fontFamily: "karlaM",
    fontSize: moderateScale(40),
  },
  inputContainer: {
    alignItems: "center",
    marginHorizontal: horizontalScale(20),
    backgroundColor: "transparent",
  },
  inputField: {
    fontFamily: "karlaR",
    fontSize: moderateScale(20),
    paddingVertical: verticalScale(10),
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginBottom: verticalScale(25),
    width: "90%",
    backgroundColor: "transparent",
  },
  passwordField: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    backgroundColor: "transparent",
  },
  passwordIcon: {
    backgroundColor: "transparent",
    position: "absolute",
    right: horizontalScale(5),
    paddingBottom: verticalScale(15),
  },
  forgotPasswordContainer: {
    alignSelf: "flex-end",
    marginRight: horizontalScale(35),
    marginVertical: verticalScale(10),
    backgroundColor: "transparent",
  },
  forgotPasswordText: {
    fontFamily: "karlaR",
    fontSize: moderateScale(16),
    textDecorationLine: "underline",
    color: "#00126D",
  },
  loginButton: {
    alignItems: "center",
    backgroundColor: "transparent",
    marginTop: verticalScale(35),
  },
  newAccountContainer: {
    marginTop: verticalScale(60),
    alignItems: "center",
    backgroundColor: "transparent",
  },
  newAccountText: {
    fontFamily: "karlaR",
    fontSize: moderateScale(18),
  },
  createAccountLink: {
    fontFamily: "karlaB",
    fontSize: moderateScale(18),
    textDecorationLine: "underline",
    color: "#000",
    backgroundColor: "transparent",
  },
});

export default LogIn;
