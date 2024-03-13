import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  StyleSheet,
  Alert,
} from "react-native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "@/constants/Metrics";
import { LinearGradient } from "expo-linear-gradient";
import PKRLogo from "../../components/PKRLogo";
import AppButton from "@/components/AppButton";
import BackButton from "@/components/BackButton";
import { router } from "expo-router";
import { passwordReset } from "../classes/User";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleResetPassword = async () => {
    if (email.trim() === "") {
      Alert.alert("Error", "Please enter an email address.");
      return;
    }

    try {
      const response = await passwordReset(email);
      Alert.alert("Success", response); // Show success message
    } catch (error: any) {
      Alert.alert("Error", error.message); // Show error message
    }
  };

  const goToLogin = () => {
    router.push("/onboarding/logIn");
  };

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
            <View style={styles.titleContainer}>
              <PKRLogo style={styles.logo} />
              <Text style={styles.title}>Forgot Password</Text>
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                placeholder={"Enter your email"}
                value={email}
                onChangeText={setEmail}
                placeholderTextColor="#000"
                style={styles.inputField}
              />
            </View>

            <View style={styles.resetButton}>
              <AppButton
                widthPercentage={85}
                paddingVertical={10}
                onPress={handleResetPassword}
              >
                Reset Password
              </AppButton>
            </View>

            <View style={styles.backToLoginContainer}>
              <TouchableOpacity onPress={goToLogin}>
                <Text style={styles.backToLoginText}>Back to Login</Text>
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
    marginBottom: verticalScale(30),
  },
  titleContainer: {
    marginTop: verticalScale(30),
    marginBottom: verticalScale(50),
    alignItems: "center",
    backgroundColor: "transparent",
  },
  title: {
    fontFamily: "karlaM",
    fontSize: moderateScale(40),
  },
  backButtonContainer: {
    flexDirection: "row",
    backgroundColor: "transparent",
    marginTop: verticalScale(-100),
    marginLeft: horizontalScale(10),
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
    width: "100%",
    backgroundColor: "transparent",
  },
  resetButton: {
    alignItems: "center",
    backgroundColor: "transparent",
    marginTop: verticalScale(35),
  },
  backToLoginContainer: {
    marginTop: verticalScale(60),
    alignItems: "center",
    backgroundColor: "transparent",
  },
  backToLoginText: {
    fontFamily: "karlaR",
    fontSize: moderateScale(20),
    textDecorationLine: "underline",
    color: "#00126D",
  },
});

export default ForgotPassword;
