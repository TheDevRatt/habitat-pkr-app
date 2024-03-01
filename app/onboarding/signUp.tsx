import { useState } from "react";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  StyleSheet,
} from "react-native";
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
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AppButton from "../../components/AppButton";
import PronounSelector from "@/components/PronounSelector";
import { Link, useRouter } from "expo-router";

const SignUp = () => {
  const pronouns = [
    "",
    "she/her/hers",
    "he/him/his",
    "they/them/theirs",
    "other",
  ];

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(
    pronouns.map((pronoun) => ({ label: pronoun, value: pronoun }))
  );

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

  return (
    <LinearGradient colors={["#FFFFFF", "#0099CC"]} style={styles.gradient}>
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
          >
            <View style={styles.welcomeTextContainer}>
              <Text style={styles.welcomeText}>Welcome</Text>
            </View>

            <View style={styles.inputGroup}>
              <TextInput
                placeholder={"First Name"}
                placeholderTextColor="#000"
                style={styles.inputField}
              />
              <TextInput
                placeholder={"Last Name"}
                placeholderTextColor="#000"
                style={styles.inputField}
              />
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
              <TextInput
                keyboardType="numeric"
                placeholder={"Phone Number"}
                placeholderTextColor="#000"
                style={styles.inputField}
              />

              <View style={styles.dropdownContainer}>
                <TextInput
                  keyboardType="numeric"
                  placeholder={"Age"}
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

              <View></View>
            </View>
            <View style={styles.buttonContainer}>
              <AppButton
                widthPercentage={85}
                paddingVertical={10}
                onPress={() => router.push("/onboarding/basicInfo")}
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
              {/* Use TouchableOpacity directly for navigation */}
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
  welcomeTextContainer: {
    marginTop: verticalScale(50),
    marginBottom: verticalScale(30),
    marginLeft: horizontalScale(25),
    backgroundColor: "transparent",
    textAlign: "left",
  },
  welcomeText: {
    fontFamily: "karlaM",
    fontSize: 44,
  },
  inputGroup: {
    alignItems: "center",
    marginHorizontal: 20,
    backgroundColor: "transparent",
  },
  inputField: {
    fontFamily: "karlaR",
    fontSize: 22,
    paddingVertical: 10,
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
    marginLeft: "90%",
    paddingBottom: verticalScale(15),
  },
  dropdownContainer: {
    flexDirection: "row",
    marginBottom: verticalScale(10),
    width: "90%",
    backgroundColor: "transparent",
  },
  dropDownPicker: {
    backgroundColor: "transparent",
    borderWidth: 0,
    width: "60%",
    right: 40,
  },
  dropDownText: {
    fontSize: 22,
  },
  dropDownContainer: {
    backgroundColor: "transparent",
  },
  buttonContainer: {
    marginTop: verticalScale(10),
    marginBottom: verticalScale(15),
    alignItems: "center",
    backgroundColor: "transparent",
    fontFamily: "karlaR",
    zIndex: -1,
  },
  termsContainer: {
    alignItems: "center",
    backgroundColor: "transparent",
    zIndex: -1,
  },
  termsText: {
    fontFamily: "karlaL",
    fontSize: 15,
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
    fontSize: 22,
  },
  loginLink: {
    fontFamily: "karlaB",
    fontSize: 22,
    color: "#000",
    textDecorationLine: "underline",
    backgroundColor: "transparent",
  },
});
