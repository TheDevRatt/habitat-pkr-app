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
import { fetchUnapprovedUsers } from "../classes/UserUtils";

interface User {
  id: string;
  FirstName: string;
  LastName: string;
  Email?: string; // Optional, in case you decide to use it later
}

const SignupRequests = () => {
  const [unapprovedUsers, setUnapprovedUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUnapprovedUsers = async () => {
      const users = await fetchUnapprovedUsers();
      console.log(users);
      setUnapprovedUsers(users);
    };

    getUnapprovedUsers();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Signed Up Users</Text>
        <View style={styles.signoutContainer}>
          <SignoutIcon />
        </View>
      </View>
      {unapprovedUsers.map((user) => (
        <View key={user.id} style={styles.userContainer}>
          <Text style={styles.userText}>
            {`${user.FirstName} ${user.LastName}`} - Pending Approval
          </Text>
        </View>
      ))}
    </ScrollView>
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
    left: horizontalScale(20),
    alignItems: "flex-start",
  },
  title: {
    paddingTop: moderateScale(30),
    fontSize: moderateScale(40),
  },
  userContainer: {
    backgroundColor: "#f0f0f0", // A light grey background for each user
    padding: 10, // Padding inside each user container
    marginVertical: 5, // Margin between user containers
    width: "90%", // Width of the user container
    borderRadius: 5, // Rounded corners for the container
  },
  userText: {
    fontSize: moderateScale(16), // Text size for user information
  },
});

export default SignupRequests;
