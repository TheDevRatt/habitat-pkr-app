import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "@/components/Themed";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "@/constants/Metrics";
import React, { useState } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AppButton from "../../components/AppButton";
import PronounSelector from "@/components/PronounSelector";
import BackButton from "@/components/BackButton";
import { Link, useRouter } from "expo-router";
import { verifyUser } from "./../classes/User.js";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const handleTermsPress = () => {
    console.log("Navigating to TermsAndConditions");
    router.push("/onboarding/termsAndConditions");
  };

  const handleLoginPress = () => {
    console.log("Navigating to LogIn");
    router.push("/onboarding/logIn");
  };

  const formatPhoneNumber = (value: any) => {
    // Remove non-numeric characters
    const numericValue = value.replace(/\D/g, "");
    // Format to US/Canadian phone number standard
    const formattedValue = numericValue.replace(
      /(\d{3})(\d{3})(\d{4})/,
      "$1-$2-$3"
    );
    return formattedValue;
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [pronouns, setPronouns] = useState("");

  return (
    <LinearGradient colors={["#FFFFFF", "#0099CC"]} style={styles.gradient}>
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
          >
            <View style={styles.topContainer}>
              <View style={styles.backButtonContainer}>
                <BackButton />
              </View>
              <View style={styles.welcomeTextContainer}>
                <Text style={styles.welcomeText}>Welcome</Text>
              </View>
            </View>

            <View style={styles.inputGroup}>
              <TextInput
                value={firstName}
                placeholder={"First Name"}
                onChangeText={(newFirstName) => setFirstName(newFirstName)}
                placeholderTextColor="#000"
                style={styles.inputField}
              />
              <TextInput
                value={lastName}
                placeholder={"Last Name"}
                onChangeText={(newLastName) => setLastName(newLastName)}
                placeholderTextColor="#000"
                style={styles.inputField}
              />
              <TextInput
                value={email}
                placeholder={"Email"}
                onChangeText={(newEmail) => setEmail(newEmail)}
                placeholderTextColor="#000"
                style={styles.inputField}
              />
              <View style={styles.passwordField}>
                <TextInput
                  value={password}
                  secureTextEntry={!showPassword}
                  placeholder={"Password"}
                  onChangeText={(newPassword) => setPassword(newPassword)}
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
              <TextInput
                value={phoneNumber}
                keyboardType="numeric"
                placeholder={"Phone Number"}
                onChangeText={(newPhoneNumber) => {
                  const formattedPhoneNumber =
                    formatPhoneNumber(newPhoneNumber);
                  setPhoneNumber(formattedPhoneNumber);
                }}
                placeholderTextColor="#000"
                style={styles.inputField}
              />

              <View style={styles.dropdownContainer}>
                <TextInput
                  value={age}
                  keyboardType="numeric"
                  placeholder={"Age"}
                  onChangeText={(newAge) => setAge(newAge)}
                  placeholderTextColor="#000"
                  style={[
                    styles.inputField,
                    { width: "25%", marginRight: "27%" },
                  ]}
                />
                <View style={styles.dropDownPicker}>
                  <PronounSelector />
                </View>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <AppButton
                widthPercentage={85}
                paddingVertical={11}
                borderRadius={25}
                textStyle={{ fontSize: 25 }}
                onPress={async () => {
                  let response = await verifyUser(
                    email.trim(),
                    password.trim(),
                    firstName.trim(),
                    lastName.trim(),
                    phoneNumber,
                    pronouns
                  );
                  if (response == "good") {
                    router.push("/onboarding/basicInfo");
                  } else {
                    alert(response);
                  }
                }}
              >
                Create Account
              </AppButton>
            </View>

            <View style={styles.termsContainer}>
              <Text style={styles.termsText}>
                By clicking 'Create Account' you agree to Habitat PKR's{" "}
                <Text style={styles.termsLink} onPress={handleTermsPress}>
                  terms and conditions
                </Text>
              </Text>
            </View>

            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>Already have an account?</Text>
              <TouchableOpacity
                onPress={handleLoginPress}
                style={{ backgroundColor: "transparent" }}
              >
                <Text style={styles.loginLink}>Log in</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  backButtonContainer: {
    backgroundColor: "transparent",
    justifyContent: "center",
    paddingLeft: horizontalScale(20),
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: verticalScale(30),
    marginTop: verticalScale(15),
    backgroundColor: "transparent",
  },
  welcomeTextContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "transparent",
    marginRight: verticalScale(50),
  },
  welcomeText: {
    fontFamily: "karlaM",
    fontSize: moderateScale(44),
    textAlign: "center",
  },
  inputGroup: {
    alignItems: "center",
    marginHorizontal: horizontalScale(20),
    backgroundColor: "transparent",
  },
  inputField: {
    fontFamily: "karlaR",
    fontSize: moderateScale(22),
    paddingVertical: moderateScale(10),
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
  dropdownContainer: {
    flexDirection: "row",
    marginBottom: verticalScale(10),
    width: "90%",
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },
  dropDownPicker: {
    backgroundColor: "transparent",
    borderWidth: 0,
    width: "60%",
    right: horizontalScale(35),
  },
  dropDownText: {
    fontSize: moderateScale(22),
  },
  dropDownContainer: {
    backgroundColor: "transparent",
  },
  buttonContainer: {
    marginTop: verticalScale(20),
    marginBottom: verticalScale(15),
    alignItems: "center",
    backgroundColor: "transparent",
    zIndex: -1,
  },
  termsContainer: {
    alignItems: "center",
    backgroundColor: "transparent",
    zIndex: -1,
    marginHorizontal: horizontalScale(25),
  },
  termsText: {
    fontFamily: "karlaL",
    fontSize: moderateScale(14),
    textAlign: "center",
  },
  termsLink: {
    textDecorationLine: "underline",
    color: "#00126D",
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: verticalScale(40),
    backgroundColor: "transparent",
  },
  loginText: {
    fontFamily: "karlaR",
    fontSize: moderateScale(20),
    right: horizontalScale(10),
  },
  loginLink: {
    fontFamily: "karlaB",
    fontSize: moderateScale(22),
    color: "#000",
    textDecorationLine: "underline",
    backgroundColor: "transparent",
  },
});
