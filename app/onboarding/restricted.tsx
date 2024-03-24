import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";
import { Text, View, SafeAreaView } from "@/components/Themed";
import { LinearGradient } from "expo-linear-gradient";
import { moderateScale, verticalScale } from "@/constants/Metrics";
import AppButton from "@/components/AppButton";
import { Link, useRouter } from "expo-router";
import { signOutUser } from "../classes/UserUtils";

const ModalScreen = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOutUser();
      router.push("/"); // Navigate to the home screen after signing out
    } catch (error) {
      // Handle error if sign out failed
      console.error(error);
    }
  };

  return (
    <LinearGradient
      colors={["#FFFFFF", "#0099CC"]}
      start={{ x: 1, y: 0.2 }}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <View style={styles.box}>
            <View style={styles.boxStyles}>
              <Text style={styles.title}>Thank you for signing up!</Text>
              <Text style={styles.boxStyles}>
                We will notify you by email and notification when the
                administrator has approved your account!{" "}
              </Text>
            </View>
          </View>

          <View style={styles.developerButton}>
            <AppButton
              widthPercentage={85}
              paddingVertical={10}
              onPress={handleLogout}
            >
              Back To Login
            </AppButton>
          </View>
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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  title: {
    fontSize: moderateScale(30),
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: verticalScale(50),
  },

  box: {
    paddingVertical: "25%",
    width: "80%",
    borderRadius: 20,
    borderColor: "#000",
    borderWidth: 1,
    borderStyle: "solid",
  },
  boxStyles: {
    alignItems: "center",
    textAlign: "center",
    margin: 10,
    fontSize: moderateScale(18),
  },
  developerButton: {
    alignItems: "center",
    backgroundColor: "transparent",
    marginTop: verticalScale(35),
  },
});

export default ModalScreen;
