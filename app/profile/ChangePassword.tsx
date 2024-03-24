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
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Image,
  LogBox,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AppButton from "../../components/AppButton";
import PronounSelector from "@/components/PronounSelector";
import BackButton from "@/components/BackButton";
import { Link, useRouter } from "expo-router";
import { verifyUser } from "./../classes/User.js";
import DriversLicenseLogo from "@/components/DriversLicenseLogo";
import InsuranceLogo from "@/components/InsuranceLogo";
import ProfileContainer from "@/components/ProfileContainer";
import { openCamera, openFilePicker } from "./../classes/CloudStorage";
import { getUserData } from "../classes/User";
import { getFirestore, setDoc, doc, onSnapshot } from "firebase/firestore";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { getFunctions, httpsCallable } from "firebase/functions";
import { auth, db } from "@/firebase";
import SignoutIcon from "@/components/SignoutIcon";
import {
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";

const myInfo = () => {
  const router = useRouter();

  const user = auth.currentUser; // Assuming this is already defined in your component
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const handleChangePassword = async () => {
    if (!auth.currentUser) {
      console.log("No user logged in");
      return;
    }

    // Re-authenticate the user with their current password
    const credential = EmailAuthProvider.credential(
      auth.currentUser?.email ?? "",
      currentPassword
    );

    try {
      await reauthenticateWithCredential(auth.currentUser, credential);
      await updatePassword(auth.currentUser, newPassword);
      alert("Password updated successfully.");
    } catch (error) {
      console.error("Error updating password: ", error);
      alert("Failed to update password. Please try again.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardAvoidContainer}
        >
          <KeyboardAwareScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            resetScrollToCoords={{ x: 0, y: 0 }}
            scrollEnabled={true}
            extraScrollHeight={verticalScale(-250)}
            enableOnAndroid={true}
          >
            <View style={styles.topContainer}>
              <View style={styles.backButtonContainer}>
                <BackButton />
              </View>
              <View style={styles.welcomeTextContainer}>
                <Text style={styles.welcomeText}>Change Password</Text>
              </View>
              <View style={styles.signoutContainer}>
                <SignoutIcon />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <View style={styles.passwordField}>
                <View style={styles.inputContainer}>
                  <TextInput
                    secureTextEntry={!showCurrentPassword}
                    placeholder="Current Password"
                    onChangeText={setCurrentPassword}
                    style={[styles.inputField, { flex: 1 }]}
                  />
                  <TouchableOpacity
                    onPress={() => setShowCurrentPassword(!showCurrentPassword)}
                    style={styles.passwordIcon}
                  >
                    <FontAwesome
                      name={showCurrentPassword ? "eye" : "eye-slash"}
                      size={24}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.passwordField}>
                <View style={styles.inputContainer}>
                  <TextInput
                    secureTextEntry={!showNewPassword}
                    placeholder="New Password"
                    onChangeText={setNewPassword}
                    style={[styles.inputField, { flex: 1 }]}
                  />
                  <TouchableOpacity
                    onPress={() => setShowNewPassword(!showNewPassword)}
                    style={styles.passwordIcon}
                  >
                    <FontAwesome
                      name={showNewPassword ? "eye" : "eye-slash"}
                      size={24}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.buttonContainer}>
              <AppButton
                widthPercentage={85}
                paddingVertical={11}
                borderRadius={25}
                textStyle={{ fontSize: 25 }}
                onPress={handleChangePassword}
              >
                Change Password
              </AppButton>
            </View>
          </KeyboardAwareScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default myInfo;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center", // Center children horizontally
    ...Platform.select({
      ios: {
        paddingTop: verticalScale(10),
      },
      android: {
        paddingTop: verticalScale(10),
      },
    }),
  },
  keyboardAvoidContainer: {
    justifyContent: "center",
    ...Platform.select({
      ios: {
        paddingTop: verticalScale(20),
      },
      android: {
        paddingTop: verticalScale(10),
      },
    }),
  },
  backButtonContainer: {
    backgroundColor: "transparent",
    justifyContent: "center",
    paddingLeft: horizontalScale(20),
    ...Platform.select({
      ios: {},
      android: {},
    }),
  },
  signoutContainer: {
    backgroundColor: "transparent",
    justifyContent: "center",
    paddingRight: horizontalScale(20),
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    marginBottom: verticalScale(30),
  },
  welcomeTextContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "transparent",
  },
  welcomeText: {
    fontFamily: "karlaM",
    fontSize: moderateScale(44),
    textAlign: "center",
  },
  inputGroup: {
    width: "100%", // Ensure the input group takes the full width
    alignItems: "center", // Center children horizontally
    backgroundColor: "transparent",
  },
  inputField: {
    fontFamily: "karlaR",
    fontSize: moderateScale(22),
    paddingVertical: moderateScale(10),
    flex: 1, // Allow input field to expand and fill the space
    backgroundColor: "transparent",
  },
  passwordField: {
    flexDirection: "row",
    justifyContent: "center", // Center the password field container
    width: "100%", // Take full width to align children inside it
    backgroundColor: "transparent",
  },
  inputContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginBottom: verticalScale(25),
    justifyContent: "center", // Center the input and icon within the container
    alignItems: "center", // Vertically align items in the middle
    width: "90%", // Adjust based on your design preference
    backgroundColor: "transparent",
  },
  passwordIcon: {
    padding: moderateScale(10),
    backgroundColor: "transparent",
  },
  // Ensure the button container is also centered if necessary
  buttonContainer: {
    width: "100%", // Ensure full width to center the button inside it
    marginBottom: verticalScale(15),
    paddingTop: verticalScale(20),
    alignItems: "center", // Center the button horizontally
    backgroundColor: "transparent",
  },
});
