import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, View, Text } from "@/components/components(old)/Themed";
import { verticalScale } from "@/constants/Metrics";
import AppButton from "@/components/AppButton";
import { Link, useRouter } from "expo-router";

const TermsAndConditions = () => {
  const router = useRouter();
  return (
    <LinearGradient
      colors={["#FFFFFF", "#0099CC"]}
      style={styles.linearGradient}
    >
      {/* <SafeAreaView style={{ backgroundColor: "transparent" }}> */}
        <Text style={styles.title}>Terms and Conditions</Text>
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <Text style={{ fontWeight: "bold" }}>Terms and Conditions</Text>
            <Text style={styles.content}>
              General Site Usage
              {"\n"}
              Last Revised: December 16, 2013
              {"\n\n"}
              Welcome to www.lorem-ipsum.info. This site is provided as a
              service to our visitors and may be used for informational purposes
              only. Because the Terms and Conditions contain legal obligations,
              please read them carefully.
              {"\n\n"}
              1. YOUR AGREEMENT
              {"\n"}
              By using this Site, you agree to be bound by, and to comply with,
              these Terms and Conditions. If you do not agree to these Terms and
              Conditions, please do not use this site.
              {"\n\n"}
              2. CONTENT
              {"\n"}
              All text, graphics, user interfaces, visual interfaces,
              photographs, trademarks, logos, sounds, music, artwork and
              computer code (collectively, "Content"), including but not limited
              to the design, structure, selection, coordination, expression,
              "look and feel" and arrangement of such Content, contained on the
              Site is owned, controlled or licensed by or to Company, and is
              protected by trade dress, copyright, patent and trademark laws,
              and various other intellectual property rights and unfair
              competition laws.
              {"\n\n"}
              3. DISCLAIMER
              {"\n"}
              THE WEBSITE IS PROVIDED ON AN AS-IS BASIS WITHOUT WARRANTY OF ANY
              KIND, EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
              IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
              PURPOSE, AND NONINFRINGEMENT.
              {"\n\n"}
              4. LIMITATION OF LIABILITY
              {"\n"}
              IN NO EVENT SHALL THE WEBSITE OR ITS SUPPLIERS BE LIABLE FOR ANY
              DAMAGES (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF DATA
              OR PROFIT, OR DUE TO BUSINESS INTERRUPTION) ARISING OUT OF THE USE
              OR INABILITY TO USE THE MATERIALS ON THE WEBSITE, EVEN IF THE
              WEBSITE ADMINISTRATOR OR AN AUTHORIZED REPRESENTATIVE HAS BEEN
              NOTIFIED ORALLY OR IN WRITING OF THE POSSIBILITY OF SUCH DAMAGE.
              {"\n\n"}
              5. CHANGES TO TERMS
              {"\n"}
              The Website Administrator reserves the right to change these terms
              and conditions at any time. Your continued use of the Website will
              be deemed acceptance of the updated or amended terms.
            </Text>
          </ScrollView>
        </View>
        <AppButton
          // className="mt-[5%] w-[90%] h-[6.5%] justify-center"
          onPress={() => router.push("/onboarding/signUp")}
        >
          Back
        </AppButton>
      {/* </SafeAreaView> */}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: "center",
  },

  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
    fontFamily: "karlaM",
    color: "#000",
    marginTop: verticalScale(10),
    backgroundColor: "transparent",
    textAlign: "center",
  },
  container: {
    width: "90%",
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#000",
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  content: {
    fontSize: 16,
    fontFamily: "karlaR",
    color: "#000",
  },
});

export default TermsAndConditions;