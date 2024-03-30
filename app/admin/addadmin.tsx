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
import { fetchNonAdminUsers } from "../classes/UserUtils";
import { auth, db, functions } from "@/firebase";
import {
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
} from "firebase/firestore";
import { getFunctions, httpsCallable } from "firebase/functions";

interface User {
  id: string;
  FirstName: string;
  LastName: string;
  Email?: string; // Optional, in case we decide to use it later
}

const AddAdmin = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Use the fetchNonAdminUsers from UserUtils.js
    const initFetch = async () => {
      const nonAdminUsers = await fetchNonAdminUsers();
      setUsers(nonAdminUsers);
    };

    initFetch();
  }, []);

  const handleApproveUser = async (user: User) => {
    Alert.alert(
      "Make Admin?",
      `Are you sure you want to make ${user.FirstName} ${user.LastName} an admin?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Yes",
          onPress: async () => {
            // Update Firestore to set isAdmin to true
            await updateDoc(doc(db, "users", user.id), {
              isAdmin: true,
            });

            // Call cloud function to set custom admin claim
            const addAdminRole = httpsCallable(functions, "addAdminRole");
            addAdminRole({ id: user.id })
              .then(() => {
                Alert.alert(
                  "Success",
                  `${user.FirstName} ${user.LastName} has been made an admin.`
                );
                // Refresh the list or remove the user from the current state
                setUsers(users.filter((u) => u.id !== user.id));
              })
              .catch((error) => {
                console.error("Error making user admin:", error);
                Alert.alert(
                  "Error",
                  "Failed to make user an admin. Please try again."
                );
              });
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
          onPress: async () => {
            try {
              // Assuming you have a function to handle the rejection in your backend
              // await rejectUser(user.id);

              // Update the local state to remove the user
              setUsers((currentUsers) =>
                currentUsers.filter((currentUser) => currentUser.id !== user.id)
              );

              // Provide feedback to the admin
              Alert.alert(
                "User Rejected",
                `${user.FirstName} ${user.LastName} has been rejected.`
              );
            } catch (error) {
              console.error("Error rejecting user:", error);
              Alert.alert(
                "Error",
                "There was an error rejecting the user. Please try again."
              );
            }
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
        <Text style={styles.title}>Add a new{"\n"}admin</Text>
        <View style={styles.signoutContainer}>
          <SignoutIcon />
        </View>
      </View>

      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.innerScrollViewContent}>
          {users.map((user) => (
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

export default AddAdmin;
