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
// import * as Progress from 'react-native-progress';
import { openCamera, openFilePicker } from "./../classes/CloudStorage";
import { auth } from "@/firebase";
import { getUserData } from "../classes/User";
import { getFirestore, setDoc, doc, onSnapshot } from "firebase/firestore";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { createNewUser } from "../classes/Admin";

LogBox.ignoreLogs([
  "VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.",
]);

const addUser = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isPronounSelectorFocused, setIsPronounSelectorFocused] =
    useState(false);

  const router = useRouter();

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

  useEffect(() => {
    //console.log(pronouns); // Log the current value of pronouns
  }, [pronouns]);

  const user = auth.currentUser;
  let userID = user?.uid;
  //console.log("userId in basicinfo:", userID);

  const [licenseUrl, setLicenseUrl] = useState(null);
  const [insuranceUrl, setInsuranceUrl] = useState(null);

  const [refreshKey, setRefreshKey] = useState(0); // Add a state to trigger refresh

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) return;

    const userDocRef = doc(getFirestore(), "users", user.uid);
    const unsubscribe = onSnapshot(userDocRef, (doc) => {
      if (doc.exists()) {
        const userData = doc.data();
        setLicenseUrl(userData.licenseUrl);
        setInsuranceUrl(userData.insuranceUrl);
      }
    });

    return () => unsubscribe(); // Clean up subscription
  }, []);

  return (
    <LinearGradient colors={["#FFFFFF", "#0099CC"]} style={styles.gradient}>
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
                  <Text style={styles.welcomeText}>Add User</Text>
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
                    <PronounSelector value={pronouns} setValue={setPronouns} />
                  </View>
                </View>
              </View>

              <View style={styles.itemContainer}>
                <View style={styles.subTitleContainer}>
                  <Text style={styles.label}>Driver's License</Text>
                </View>
                <View style={styles.imageButtonContainer}>
                  {licenseUrl ? (
                    <Image
                      source={{ uri: licenseUrl }}
                      style={{
                        width: 150,
                        height: 150,
                        marginTop: verticalScale(10),
                        borderRadius: 5,
                        marginBottom: verticalScale(10),
                      }}
                    />
                  ) : (
                    <DriversLicenseLogo />
                  )}
                  <View style={styles.buttonGroup}>
                    <View style={styles.camera}>
                      <AppButton
                        onPress={() => {
                          openCamera(userID, "License");
                        }}
                        backgroundColor="transparent"
                        widthPercentage={45}
                        borderStyle="dashed"
                        borderRadius={5}
                        borderColor="black"
                        borderWidth={1}
                      >
                        <FontAwesome name={"camera"} size={15} />
                        <Text style={styles.buttonText}>&nbsp;Open Camera</Text>
                      </AppButton>
                    </View>
                    <AppButton
                      onPress={() => {
                        openFilePicker(userID, "License");
                      }}
                      backgroundColor="transparent"
                      widthPercentage={45}
                      borderStyle="dashed"
                      borderRadius={5}
                      borderColor="black"
                      borderWidth={1}
                    >
                      <FontAwesome name={"upload"} size={15} />
                      <Text style={styles.buttonText}>&nbsp;Upload File</Text>
                    </AppButton>
                  </View>
                </View>
              </View>

              <View style={styles.buttonContainer}>
                <AppButton
                  widthPercentage={85}
                  paddingVertical={11}
                  borderRadius={25}
                  textStyle={{ fontSize: 25 }}
                  onPress={createNewUser}
                >
                  Create Account
                </AppButton>
              </View>
            </KeyboardAwareScrollView>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default addUser;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "transparent",
    ...Platform.select({
      ios: {
        paddingTop: verticalScale(10),
      },
      android: {
        paddingTop: verticalScale(30),
      },
    }),
  },
  keyboardAvoidContainer: {
    justifyContent: "center",
    ...Platform.select({
      ios: {
        paddingTop: verticalScale(20),
      },
      android: {},
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
    marginRight: verticalScale(50),
    ...Platform.select({
      ios: {},
      android: {},
    }),
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
    marginBottom: verticalScale(15),
    alignItems: "center",
    backgroundColor: "transparent",
    zIndex: -1,
  },
  itemContainer: {
    alignItems: "flex-start",
    marginHorizontal: horizontalScale(20),
    backgroundColor: "transparent",
    marginTop: verticalScale(-20),
    zIndex: -1,
  },
  subTitleContainer: {
    alignItems: "center",
    backgroundColor: "transparent",
  },
  label: {
    fontSize: moderateScale(22),
    fontFamily: "karlaM",
    marginTop: verticalScale(10),
    alignItems: "center",
    backgroundColor: "transparent",
  },
  imageButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  buttonGroup: {
    backgroundColor: "transparent",
    alignItems: "center",
    paddingLeft: horizontalScale(20),
  },
  buttonText: {
    fontSize: moderateScale(18),
    fontFamily: "karlaR",
    textAlign: "center",
  },
  camera: {
    marginBottom: verticalScale(12),
    backgroundColor: "transparent",
  },
});
