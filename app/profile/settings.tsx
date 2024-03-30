import { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  StyleSheet,
  ScrollView,
  Switch,
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

import RoadIcon from "@/components/RoadIcon";
import PeopleIcon from "@/components/PeopleIcon";
import ArrowIcon from "@/components/ArrowIcon";
import PencilIcon from "@/components/pencilIcon";
import LockIcon from "@/components/lockIcon";
import NotificationsIcon from "@/components/notificationIcon";

import { Link, useRouter } from "expo-router";
import { auth, db } from "@/firebase";
import { getDoc, doc } from "firebase/firestore";

import SignoutIcon from "@/components/SignoutIcon";
import BackButton from "@/components/BackButton";

const Profile = () => {
  const router = useRouter();

  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  // Dummy function to navigate to different screens
  const handleEditProfile = () => {
    console.log("Navigating to edit profile");
    router.push("/profile/myInfo");
  };
  const handleChangePassword = () => {
    console.log("Navigating to Change Password");
    router.push("/profile/ChangePassword");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.profileTitleContainer}>
          <View style={styles.backButtonContainer}>
            <BackButton />
          </View>
          <Text style={styles.profileTitle}>Settings</Text>

          <View style={styles.signoutContainer}>
            <SignoutIcon />
          </View>
        </View>
      </View>

      <View style={styles.button}>
        <View style={styles.iconContainer}>
          {/* Assuming you have or will create a notifications icon component */}
          <NotificationsIcon />
          <Text style={styles.text}> Notifications</Text>
        </View>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={notificationsEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() =>
            setNotificationsEnabled((previousState) => !previousState)
          }
          value={notificationsEnabled}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleEditProfile()}
      >
        <View style={styles.iconContainer}>
          <PencilIcon />
          <Text style={styles.text}> Edit Profile</Text>
        </View>
        <ArrowIcon />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleChangePassword()}
      >
        <View style={styles.iconContainer}>
          <LockIcon />
          <Text style={styles.text}> Change Password</Text>
        </View>
        <ArrowIcon />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  profileTitleContainer: {
    flexDirection: "row",
  },
  backButtonContainer: {
    top: verticalScale(45),
    right: horizontalScale(60),
    alignItems: "flex-start",
  },
  signoutContainer: {
    top: verticalScale(45),
    left: horizontalScale(60),
    alignItems: "flex-start",
  },
  profileHeader: {
    alignItems: "center",
    paddingVertical: verticalScale(15),
    borderColor: "#ccc",
  },
  profileTitle: {
    paddingTop: 30,
    fontSize: 40,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#e1e4e8",
    marginRight: 20, // Adds space between the image and the name
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center", // This will ensure the text is centered to the image
    justifyContent: "center", // Center the content horizontally in the container
    paddingTop: 16, // Adjust as needed
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
    // Remove alignItems as it's not a valid style for Text component, adjust margin if needed
  },
  totalRidesContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
    backgroundColor: "white",
    marginTop: 20,
    shadowColor: "#0081ACB2",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 10,
  },
  iconStyle: {
    marginRight: 10, // Adjust as needed for spacing between icon and number
    marginBottom: 20,
  },
  totalRidesText: {
    fontSize: 16,
  },
  button: {
    flexDirection: "row", // Align items in a row
    paddingVertical: verticalScale(15), // Add padding to the top and bottom
    paddingHorizontal: 30, // Adjust padding as needed
    alignItems: "center", // Center items vertically
    justifyContent: "space-between",
  },
  text: {
    fontSize: 22,
    paddingLeft: 20,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start", // Align items to the start
  },
});

export default Profile;
