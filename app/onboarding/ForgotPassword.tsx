import React from "react";
import { View, Text, TouchableOpacity, TextInput, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import PKRLogo from "../../components/PKRLogo";
import AppButton from "../../components/AppButton";
import { router } from "expo-router";

const ForgotPassword = () => {
  const handleResetPassword = () => {
    console.log("Password reset link sent");
  };

  const goToLogin = () => {
    router.push("/onboarding/logIn");
  };

  return (
    <LinearGradient
      colors={["#FFFFFF", "#0099CC"]}
      start={{ x: 1, y: 0.3 }}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.container}>
        <PKRLogo style={styles.logo} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Forgot Password</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder={"Email"}
            placeholderTextColor="#000"
            style={styles.inputField}
          />
        </View>
        <TouchableOpacity
          style={styles.resetButton}
          onPress={handleResetPassword}
        >
          <Text style={styles.resetButtonText}>Reset Password</Text>
        </TouchableOpacity>
        <View style={styles.backToLoginContainer}>
          <TouchableOpacity onPress={goToLogin}>
            <Text style={styles.backToLoginText}>Back to Login</Text>
          </TouchableOpacity>
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
    alignItems: 'center',
  },
  logo: {
    marginTop: '7%',
    transform: [{ scale: 1.2 }],
  },
  titleContainer: {
    marginTop: '9%',
  },
  title: {
    fontFamily: "karla_500Medium",
    fontSize: 32,
  },
  inputContainer: {
    marginTop: '8%',
    width: '88%',
    marginBottom: '15%',
  },
  inputField: {
    fontFamily: "karla_400Regular",
    fontSize: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  resetButton: {
    width: '90%',
    marginTop: '15%',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  resetButtonText: {
    fontFamily: "karla_400Regular",
    fontSize: 20,
    color: "black",
    textAlign: 'center',
    paddingVertical: 10,
  },
  backToLoginContainer: {
    marginTop: '15%',
    alignItems: 'center',
  },
  backToLoginText: {
    fontFamily: "karla_400Regular",
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#00126D",
  },
});

export default ForgotPassword;
