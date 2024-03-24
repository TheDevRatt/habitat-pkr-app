import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";
import { Text, View, SafeAreaView } from "@/components/Themed";
import { LinearGradient } from "expo-linear-gradient";
import { moderateScale, verticalScale } from "@/constants/Metrics";
import AppButton from "@/components/AppButton";
import { Link, useRouter } from "expo-router";

export default function ModalScreen() {
  const router = useRouter();

  const handleHomePress = () => {
    console.log("Navigating to Create Account Page");
    router.push("/(tabs)/Bookings");
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
              <Text style={styles.title}>Success!</Text>
              <Text style={styles.boxStyles}>
                You&apos;ve successfully booked a rental for a Honda Civic.
              </Text>
              <Text style={styles.boxStyles}>
                To see more details please go to “My Reservations” and select
                the appropriate booking.{" "}
              </Text>
            </View>
          </View>

          <View style={styles.developerButton}>
            <AppButton
              widthPercentage={85}
              onPress={handleHomePress}
              backgroundColor={"#FFF"}
              borderColor="#0099cc"
              borderStyle="solid"
              borderWidth={5}
              textStyle={{ color: "#000" }}
            >Go To My Reservations
            </AppButton>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

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
    fontFamily: "karlaB",
  },

  box: {
    paddingVertical: "10%",
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
    fontFamily: "karlaM",
  },
  developerButton: {
    alignItems: "center",
    backgroundColor: "transparent",
    marginTop: "20%",
  },
});
