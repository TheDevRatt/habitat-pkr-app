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

const myInfo = () => {
  const router = useRouter();

  const user = auth.currentUser; // Assuming this is already defined in your component
  const location = "Profile";
  const fileName = `${user?.uid}`; // Example file name

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [profilePictureUrl, setProfilePictureUrl] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  // Inside your component
  useEffect(() => {
    // Check if a user is logged in
    const user = auth.currentUser;
    if (user) {
      // User is signed in, fetch their document from Firestore
      const userDocRef = doc(db, "users", user.uid);
      const unsubscribe = onSnapshot(userDocRef, (doc) => {
        if (doc.exists()) {
          // Assuming the document contains fields: firstName, lastName, email, etc.
          const userData = doc.data();
          setFirstName(userData.FirstName);
          setLastName(userData.LastName);
          setEmail(userData.Email);
          setPhoneNumber(userData.Phone);
          setAge(userData.Age);
          setPronouns(userData.Pronouns);
          if (userData.profileUrl) {
            // Assume 'profileUrl' is the field name in Firestore
            setProfilePictureUrl(userData.profileUrl);
          }
        } else {
          console.log("No such document!");
        }
      });

      return () => unsubscribe(); // Cleanup subscription on unmount
    }
    if (!user) {
      // No user is logged in, redirect them to the login page or show a message
      console.log("No user logged in");
      // router.push("/login"); // Uncomment and adjust according to your routing setup
    }
  }, []);

  const saveChanges = async () => {
    const user = auth.currentUser;
    if (user) {
      const userDocRef = doc(db, "users", user.uid);
      try {
        await setDoc(
          userDocRef,
          {
            FirstName: firstName,
            LastName: lastName,
            Email: email,
            Phone: phoneNumber,
            Age: age,
            Pronouns: pronouns,
          },
          { merge: true }
        ); // Use merge option to update fields without overwriting the entire document
        console.log("Document successfully updated!");
      } catch (error) {
        console.error("Error updating document: ", error);
      }
    }
    setIsEditMode(false); // Exit edit mode after saving changes
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
                <Text style={styles.welcomeText}>My Info</Text>
              </View>
              <View style={styles.signoutContainer}>
                <SignoutIcon />
              </View>
            </View>

            <View style={styles.inputGroup}>
              <TextInput
                editable={isEditMode}
                value={firstName}
                placeholder={"First Name"}
                onChangeText={(newFirstName) => setFirstName(newFirstName)}
                placeholderTextColor="#000"
                style={styles.inputField}
              />
              <TextInput
                editable={isEditMode}
                value={lastName}
                placeholder={"Last Name"}
                onChangeText={(newLastName) => setLastName(newLastName)}
                placeholderTextColor="#000"
                style={styles.inputField}
              />
              <TextInput
                editable={isEditMode}
                value={email}
                placeholder={"Email"}
                onChangeText={(newEmail) => setEmail(newEmail)}
                placeholderTextColor="#000"
                style={styles.inputField}
              />
              <TextInput
                editable={isEditMode}
                value={phoneNumber}
                keyboardType="numeric"
                placeholder={"Phone Number"}
                onChangeText={(newPhoneNumber) =>
                  setPhoneNumber(newPhoneNumber)
                }
                placeholderTextColor="#000"
                style={styles.inputField}
              />

              <View style={styles.dropdownContainer}>
                <TextInput
                  editable={isEditMode}
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
                  <PronounSelector
                    value={pronouns}
                    setValue={setPronouns}
                    editable={isEditMode}
                  />
                </View>
              </View>
            </View>

            <View style={styles.itemContainer}>
              <View style={styles.subTitleContainer}>
                <Text style={styles.label}>Profile Picture</Text>
              </View>
              <View style={styles.imageButtonContainer}>
                {profilePictureUrl ? (
                  <Image
                    source={{ uri: profilePictureUrl }}
                    style={{
                      width: 150,
                      height: 150,
                      marginTop: verticalScale(10),
                      borderRadius: 5,
                      marginBottom: verticalScale(10),
                    }}
                  />
                ) : (
                  <ProfileContainer width={99} height={99} />
                )}
                <View style={styles.buttonGroup}>
                  <View style={styles.camera}>
                    <AppButton
                      onPress={() => {
                        if (isEditMode)
                          openCamera(fileName, "Profile", user?.uid);
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
                      if (isEditMode)
                        openFilePicker(fileName, "Profile", user?.uid);
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
                onPress={() => {
                  if (isEditMode) {
                    saveChanges();
                  } else {
                    setIsEditMode(true);
                  }
                }}
              >
                {isEditMode ? "Save Changes" : "Edit Account"}
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
    paddingTop: verticalScale(20),
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
    marginTop: verticalScale(20),
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
