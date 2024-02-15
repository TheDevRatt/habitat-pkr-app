import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "@/components/components(old)/Themed";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "@/constants/Metrics";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AppButton from "../../components/AppButton";
import { Link, useRouter } from "expo-router";
import PKRLogo from "@/components/PKRLogo";

const LogIn = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <LinearGradient colors={["#FFFFFF", "#0099CC"]} style={styles.gradient}>
      <SafeAreaView style={styles.container}>
        <View style={styles.logo}>
          <PKRLogo />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Welcome back!</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder={"Email"}
            placeholderTextColor="#000"
            style={styles.inputField}
          />
          <View style={styles.passwordField}>
            <TextInput
              secureTextEntry={!showPassword}
              placeholder={"Password"}
              placeholderTextColor="#000"
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
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
        <View style={styles.loginButton}>
          <AppButton
            widthPercentage={85}
            paddingVertical={10}
            onPress={() => console.log("Login Button Pressed!")}
          >
            Log In
          </AppButton>
        </View>
        <View style={styles.newAccountContainer}>
          <Text style={styles.newAccountText}>New around here?</Text>
          <Link href={"/onboarding/signUp"} asChild>
            <TouchableOpacity style={{backgroundColor:"transparent"}}>
              <Text style={styles.createAccountLink}>Create an account</Text>
            </TouchableOpacity>
          </Link>
        </View>
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
  },
  logo: {
    alignItems: "center",
    backgroundColor: "transparent",
    marginTop: verticalScale(20),
  },
  titleContainer: {
    marginTop: verticalScale(50),
    marginBottom: verticalScale(30),
    marginLeft: horizontalScale(26),
    backgroundColor: "transparent",
  },
  title: {
    fontFamily: "karlaM",
    fontSize: 44,
  },
  inputContainer: {
    alignItems: "center",
    marginHorizontal: horizontalScale(20),
    backgroundColor: "transparent",
  },
  inputField: {
    fontFamily: "karlaR",
    fontSize: 22,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginBottom: 25,
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
    marginLeft: "90%",
    paddingBottom: verticalScale(15),
  },
  eyeIcon: {
    position: "absolute",
    right: 0,
    paddingBottom: 15,
  },
  forgotPasswordContainer: {
    marginLeft: "50%",
    marginBottom: 20,
    backgroundColor: "transparent",
  },
  forgotPasswordText: {
    fontFamily: "karlaR",
    fontSize: 18,
    textDecorationLine: "underline",
    color: "#00126D",
  },
  loginButton: {
    alignItems: "center",
    backgroundColor: "transparent",
    marginTop: verticalScale(35),
  },
  newAccountContainer: {
    marginTop:  verticalScale(60),
    alignItems: "center",
    backgroundColor: "transparent",
  },
  newAccountText: {
    fontFamily: "karlaR",
    fontSize: 20,
  },
  createAccountLink: {
    fontFamily: "karlaB",
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#000",
    backgroundColor: "transparent",
  },
});

export default LogIn;
