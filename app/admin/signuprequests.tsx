import { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  StyleSheet,
  ScrollView,
  Alert,
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

import SignoutIcon from "@/components/SignoutIcon";
import { fetchUnapprovedUsers } from "../classes/UserUtils";
import BackButton from "@/components/BackButton";

import CheckmarkIcon from "@/components/CheckmarkIcon";
import XIcon from "@/components/XIcon";

import { approveUser } from "../classes/UserUtils";

interface User {
  id: string;
  FirstName: string;
  LastName: string;
  Email?: string; // Optional, in case we decide to use it later
}

const SignupRequests = () => {
  const [unapprovedUsers, setUnapprovedUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUnapprovedUsers = async () => {
      const users = await fetchUnapprovedUsers();
      // console.log(users);
      setUnapprovedUsers(users);
    };

    getUnapprovedUsers();
  }, []);

  const handleApproveUser = async (user: User) => {
    // console.log("Approving user:", user.id);
    Alert.alert(
      "Approve User?",
      `Would you like to approve ${user.FirstName} ${user.LastName}?`,
      [
        // The "No" button
        // Does nothing but dismiss the dialog when pressed
        {
          text: "No",
          style: "cancel",
        },
        // The "Yes" button
        {
          text: "Yes",
          onPress: async () => {
            try {
              await approveUser(user.id);
              setUnapprovedUsers((currentUsers) =>
                currentUsers.filter((currentUser) => currentUser.id !== user.id)
              );
              // You might want to include some feedback here, like another alert
            } catch (error) {
              console.error("Error approving user:", error);
              // Include error handling here, such as displaying an error message
            }
          },
        },
      ]
    );
  };

  const handleRejectUser = (user: User) => {
    Alert.alert(
      "Reject User?",
      `Are you sure you want to reject ${user.FirstName} ${user.LastName}?`,
      [
        {
          text: "No",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            // Directly update the state to remove the user
            setUnapprovedUsers((currentUsers) =>
              currentUsers.filter((currentUser) => currentUser.id !== user.id)
            );
            // Optionally, provide feedback to the admin
            Alert.alert(
              "User Rejected",
              `${user.FirstName} ${user.LastName} has been rejected.`
            );
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.backButtonContainer}>
          <BackButton />
        </View>
        <Text style={styles.title}>Signed Up{"\n"}Users</Text>
        <View style={styles.signoutContainer}>
          <SignoutIcon />
        </View>
      </View>

      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.innerScrollViewContent}>
          {unapprovedUsers.map((user) => (
            <View key={user.id} style={styles.userContainer}>
              <Text style={styles.userText}>
                {`${user.FirstName} ${user.LastName}`}
              </Text>
              <View style={styles.iconsContainer}>
                <View style={styles.iconContent}>
                  <CheckmarkIcon onPress={() => handleApproveUser(user)} />
                </View>
                <View style={styles.iconContent}>
                  <XIcon onPress={() => handleRejectUser(user)} />
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
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
    left: horizontalScale(60),
    alignItems: "flex-start",
  },
  backButtonContainer: {
    top: verticalScale(45),
    right: horizontalScale(60),
    alignItems: "flex-start",
  },
  title: {
    paddingTop: moderateScale(30),
    fontSize: moderateScale(40),
    textAlign: "center",
  },
  scrollViewContainer: {
    height: verticalScale(20),
    marginBottom: verticalScale(20),
    width: "100%",
  },
  innerScrollViewContent: {
    alignItems: "center",
  },
  userContainer: {
    flexDirection: "row",
    justifyContent: "space-between", // Align items on opposite ends
    alignItems: "center", // Center items vertically within the container
    padding: 10,
    marginVertical: 5,
    width: "90%",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  userText: {
    fontSize: moderateScale(16),
    flex: 1, // Allow it to take up available space but respect the icons' space
    marginRight: 10, // Add some space between the text and the icons
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center", // Ensure vertical alignment
    width: "20%", // Limit width to the end part of the user container
  },
  iconContent: {
    marginHorizontal: horizontalScale(5), // Add some space between the icons
  },
});

export default SignupRequests;
