import { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  StyleSheet,
  ScrollView,
  Image,
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
import AddressIcon from "@/components/AddressIcon";
import CreditIcon from "@/components/CreditIcon";
import FAQIcon from "@/components/FAQIcon";
import TermsIcon from "@/components/TermsIcons";
import SettingsIcon from "@/components/SettingsIcon";
import ArrowIcon from "@/components/ArrowIcon";
import TotalRidesBorder from "@/components/TotalRidesBorder";
import RoadIconO from "@/components/RoadIconO";
import ProfileContainer from "@/components/ProfileContainer";

import { Link, useRouter } from "expo-router";
import { auth, db } from "@/firebase";
import { getDoc, doc } from "firebase/firestore";

import SignoutIcon from "@/components/SignoutIcon";

const Profile = () => {
  const router = useRouter();

  const user = auth.currentUser;
  let userName = "Unknown";

  if (user !== null && user.displayName !== null) {
    userName = user.displayName;
  }

  const [userInfo, setUserInfo] = useState({
    name: userName,
    totalRides: 14,
    profileUrl: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUserInfo({
            ...userInfo,
            name: `${userData.FirstName} ${userData.LastName}`,
            profileUrl: userData.profileUrl,
          });
        }
      }
    };

    fetchUserData();
  }, []);

  // Dummy function to handle image press
  const handleImagePress = () => {
    // Here you would implement the logic to add a new image
    // For example, open an image picker and then update the user's image state
    console.log("Image pressed");
  };

  // Dummy function to navigate to different screens
  const handleRideHistoryPress = () => {
    console.log("Navigating to Ride History");
    //router.push("/tabs/Account/RideHistory");
  };
  const handleSubAccountsPress = () => {
    console.log("Navigating to Sub Accounts");
    //router.push("/tabs/Account/SubAccounts");
  };
  const handleLicenseInsurancePress = () => {
    console.log("Navigating to License & Insurance");
    router.push("../profile/licenseAndInsurance");
  };
  const handlePaymentPress = () => {
    console.log("Navigating to Payment");
    //router.push("/tabs/Account/Settings");
  };
  const handleFAQPress = () => {
    console.log("Navigating to FAQ");
    router.push("../profile/faq");
  };
  const handleTermsPress = () => {
    console.log("Navigating to Terms & Conditions");
    router.push("../onboarding/termsAndConditions");
  };
  const handleSettingsPress = () => {
    console.log("Navigating to Settings");
    router.push("../profile/settings");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <View style={styles.profileTitleContainer}>
          <Text style={styles.profileTitle}>Profile</Text>

          <View style={styles.signoutContainer}>
            <SignoutIcon />
          </View>
        </View>
        <View style={styles.profileContainer}>
          {userInfo.profileUrl ? (
            <Image
              source={{ uri: userInfo.profileUrl }}
              style={styles.profileImage}
            />
          ) : (
            <ProfileContainer
              width={99}
              height={99}
              style={styles.profileImage}
            />
          )}
          <Text style={styles.profileName}>{userInfo.name}</Text>
        </View>

        <View style={styles.totalRidesContainer}>
          <RoadIconO style={styles.iconStyle} />
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 50, fontWeight: "bold" }}>
              {userInfo.totalRides}
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "300" }}>Total Rides</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleRideHistoryPress()}
      >
        <View style={styles.iconContainer}>
          <RoadIcon />
          <Text style={styles.text}> Ride History</Text>
        </View>
        <ArrowIcon />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleRideHistoryPress()}
      >
        <View style={styles.iconContainer}>
          <PeopleIcon />
          <Text style={styles.text}> Sub Accounts</Text>
        </View>
        <ArrowIcon />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleLicenseInsurancePress()}
      >
        <View style={styles.iconContainer}>
          <AddressIcon />
          <Text style={styles.text}> License & Insurance</Text>
        </View>
        <ArrowIcon />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleRideHistoryPress()}
      >
        <View style={styles.iconContainer}>
          <CreditIcon />
          <Text style={styles.text}> Payment</Text>
        </View>
        <ArrowIcon />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => handleFAQPress()}>
        <View style={styles.iconContainer}>
          <FAQIcon />
          <Text style={styles.text}> FAQ</Text>
        </View>
        <ArrowIcon />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleTermsPress()}
      >
        <View style={styles.iconContainer}>
          <TermsIcon />
          <Text style={styles.text}> Terms & Conditions</Text>
        </View>
        <ArrowIcon />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleSettingsPress()}
      >
        <View style={styles.iconContainer}>
          <SettingsIcon />
          <Text style={styles.text}> Settings</Text>
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
  signoutContainer: {
    top: verticalScale(40),
    left: horizontalScale(100),
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
    borderRadius: 10,
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
