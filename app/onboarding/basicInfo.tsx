import React, { useState, useEffect } from "react";
import { StyleSheet, Image } from "react-native";
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
import { Link, useRouter } from "expo-router";
import DriversLicenseLogo from "@/components/DriversLicenseLogo";
import InsuranceLogo from "@/components/InsuranceLogo";
import { openCamera, openFilePicker } from "./../classes/CloudStorage";
import BackButton from "@/components/BackButton";
import { auth } from "@/firebase";
import { getUserData } from "../classes/User";
import { getFirestore } from "firebase/firestore";
import { doc, onSnapshot } from "firebase/firestore";

const BasicInfo = () => {
  const user = auth.currentUser;
  let userID = user?.uid;
  console.log("userId in basicinfo:", userID);

  const router = useRouter();

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
        <View style={styles.backButtonContainer}>
          <BackButton />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Add Information</Text>
        </View>

        <View style={styles.itemContainer}>
          <View style={styles.subTitleContainer}>
            <Text style={styles.label}>Driver's License</Text>
          </View>
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
        <View style={styles.itemContainer}>
          <View style={styles.subTitleContainer}>
            <Text style={styles.label}>Insurance</Text>
          </View>
          {insuranceUrl ? (
            <Image
              source={{ uri: insuranceUrl }}
              style={{
                width: 150,
                height: 150,
                marginTop: verticalScale(10),
                borderRadius: 5,
                marginBottom: verticalScale(10),
              }}
            />
          ) : (
            <InsuranceLogo style={styles.insuranceLogo} />
          )}
          <View style={styles.buttonGroup}>
            <View style={styles.camera}>
              <AppButton
                onPress={() => {
                  openCamera(userID, "Insurance");
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
                openFilePicker(userID, "Insurance");
              }}
              backgroundColor="transparent"
              widthPercentage={45}
              borderStyle="dashed"
              borderRadius={5}
              borderColor="black"
              borderWidth={1}
            >
              <FontAwesome name={"upload"} size={15} />
              <Text style={styles.buttonText}>&nbsp; Upload File</Text>
            </AppButton>
          </View>
        </View>
        <View style={styles.nextButtonContainer}>
          <AppButton
            widthPercentage={85}
            paddingVertical={11}
            onPress={() => router.push("/onboarding/membership")}
          >
            <Text>Next</Text>
          </AppButton>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    paddingHorizontal: horizontalScale(10),
  },
  titleContainer: {
    alignItems: "center",
    backgroundColor: "transparent",
    marginTop: verticalScale(10),
  },
  backButtonContainer: {
    flexDirection: "row",
    backgroundColor: "transparent",
    marginLeft: horizontalScale(20),
  },
  title: {
    fontFamily: "karlaM",
    fontSize: moderateScale(44),
  },
  itemContainer: {
    alignItems: "center",
    marginHorizontal: horizontalScale(20),
    backgroundColor: "transparent",
  },
  label: {
    fontSize: moderateScale(22),
    fontFamily: "karlaM",
    marginTop: verticalScale(10),
    alignItems: "center",
    backgroundColor: "transparent",
  },
  subTitleContainer: {
    alignItems: "center",
    backgroundColor: "transparent",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  buttonGroup: {
    backgroundColor: "transparent",
    alignItems: "center",
  },
  buttonText: {
    fontSize: moderateScale(18),
    fontFamily: "karlaR",
    borderBottomWidth: 1,
    textAlign: "center",
  },
  camera: {
    marginBottom: verticalScale(12),
    backgroundColor: "transparent",
  },
  insuranceLogo: {
    marginTop: verticalScale(30),
    marginBottom: verticalScale(30),
  },
  nextButtonContainer: {
    alignItems: "center",
    marginTop: verticalScale(30),
    backgroundColor: "transparent",
  },
  nextButtonText: {
    fontSize: moderateScale(22),
    fontFamily: "karlaR",
  },
});

export default BasicInfo;
