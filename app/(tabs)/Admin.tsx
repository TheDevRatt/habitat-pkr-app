import { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  StyleSheet,
  ScrollView,
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

import { Link, useRouter } from "expo-router";

import OrangeArrowIcon from "@/components/OrangeArrowIcon";
import AppButton from "@/components/AppButton";
import SignoutIcon from "@/components/SignoutIcon";

const Admin = () => {
  const router = useRouter();

  // Dummy function to navigate to different screens
  const handleSignUpRequests = () => {
    console.log("Navigating to sign up requests");
    router.push("/admin/signuprequests");
  };
  const handleBlockedUsers = () => {
    console.log("Navigating to sign up requests");
    //router.push("/tabs/Account/RideHistory");
  };
  const handleKeyholders = () => {
    console.log("Navigating to sign up requests");
    //router.push("/tabs/Account/RideHistory");
  };
  const handleUsers = () => {
    console.log("Navigating to sign up requests");
    //router.push("/tabs/Account/RideHistory");
  };
  const handleAddingNewUser = () => {
    console.log("Navigating to sign up requests");
    router.push("/admin/adduser");
  };
  const handleAddingNewAdmin = () => {
    console.log("Navigating to sign up requests");
    //router.push("/tabs/Account/RideHistory");
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Admin</Text>
        <View style={styles.signoutContainer}>
          <SignoutIcon />
        </View>
      </View>

      <ScrollView
        style={styles.scrollViewContainer}
        showsVerticalScrollIndicator={true}
      >
        <View style={styles.innerScrollViewContent}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleSignUpRequests()}
          >
            <View style={styles.buttonContainer}>
              <View style={styles.iconContainer}>
                <Text style={styles.text}>Sign Up Requests</Text>
              </View>
              <OrangeArrowIcon />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleBlockedUsers()}
          >
            <View style={styles.buttonContainer}>
              <View style={styles.iconContainer}>
                <Text style={styles.text}>Blocked Users</Text>
              </View>
              <OrangeArrowIcon />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleKeyholders()}
          >
            <View style={styles.buttonContainer}>
              <View style={styles.iconContainer}>
                <Text style={styles.text}>Keyholders</Text>
              </View>
              <OrangeArrowIcon />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => handleUsers()}>
            <View style={styles.buttonContainer}>
              <View style={styles.iconContainer}>
                <Text style={styles.text}>Users</Text>
              </View>
              <OrangeArrowIcon />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleAddingNewUser()}
          >
            <View style={styles.buttonContainer}>
              <View style={styles.iconContainer}>
                <Text style={styles.text}>Add a new user</Text>
              </View>
              <OrangeArrowIcon />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => handleAddingNewAdmin()}
          >
            <View style={styles.buttonContainer}>
              <View style={styles.iconContainer}>
                <Text style={styles.text}>Add a new admin</Text>
              </View>
              <OrangeArrowIcon />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.appButtonContainer}>
        <View style={styles.appButton}>
          <AppButton
            widthPercentage={85}
            paddingVertical={10}
            onPress={() => router.push("/onboarding/paymentInfo")}
            backgroundColor="#E55D25"
          >
            <Text textColor="white">Add Cars</Text>
          </AppButton>
        </View>
        <View style={styles.appButton}>
          <AppButton
            widthPercentage={85}
            paddingVertical={10}
            onPress={() => router.push("/onboarding/paymentInfo")}
            backgroundColor="#E55D25"
          >
            <Text textColor="white">Manage Cars</Text>
          </AppButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "row",
    paddingVertical: verticalScale(15),
  },
  signoutContainer: {
    top: verticalScale(45),
    left: horizontalScale(100),
    alignItems: "flex-start",
  },
  title: {
    paddingTop: moderateScale(30),
    fontSize: moderateScale(40),
  },
  scrollViewContainer: {
    height: verticalScale(20),
    marginBottom: verticalScale(20),
  },
  innerScrollViewContent: {
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  button: {
    width: "90%",
    paddingTop: verticalScale(20),
    paddingBottom: verticalScale(10),
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    borderBottomLeftRadius: 10,
    marginTop: verticalScale(10),
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    paddingLeft: 20,
    paddingBottom: 5,
  },
  appButtonContainer: {
    paddingBottom: verticalScale(60),
    ...Platform.select({
      ios: {
        paddingBottom: verticalScale(75),
      },
      android: {
        paddingBottom: verticalScale(60),
      },
    }),
  },
  appButton: {
    paddingBottom: verticalScale(20),
    ...Platform.select({
      ios: {
        paddingBottom: verticalScale(20),
      },
      android: {
        paddingBottom: verticalScale(20),
      },
    }),
  },
});

export default Admin;
