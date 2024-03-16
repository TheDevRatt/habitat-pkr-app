import React from "react";
import { ScrollView, StyleSheet, Platform } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, View, Text } from "@/components/Themed";
import AppButton from "@/components/AppButton";
import { Link, useRouter } from "expo-router";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "@/constants/Metrics";
import BackButton from "@/components/BackButton";

const TermsAndConditions = () => {
  const router = useRouter();

  const handleReturnPress = () => {
    console.log("Navigating to Forgot Password Page");
    // Once forgot password is added this error should go away.
    router.push("/onboarding/ForgotPassword");
  };

  return (
    <LinearGradient colors={["#FFFFFF", "#0099CC"]} style={styles.gradient}>
      <SafeAreaView style={styles.container}>
        <View style={styles.backButtonContainer}>
          <BackButton />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Terms and Conditions</Text>
        </View>

        <View style={styles.scrollContainer}>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View>
              <Text style={styles.scrollViewContentTitle}>
                Terms and Conditions
              </Text>
            </View>
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
              be deemed acceptance of the updated or amended terms. 5. CHANGES
              TO TERMS
              {"\n"}
              The Website Administrator reserves the right to change these terms
              and conditions at any time. Your continued use of the Website will
              be deemed acceptance of the updated or amended terms. 5. CHANGES
              TO TERMS
              {"\n"}
              The Website Administrator reserves the right to change these terms
              and conditions at any time. Your continued use of the Website will
              be deemed acceptance of the updated or amended terms. 5. CHANGES
              TO TERMS
              {"\n"}
              The Website Administrator reserves the right to change these terms
              and conditions at any time. Your continued use of the Website will
              be deemed acceptance of the updated or amended terms. 5. CHANGES
              TO TERMS
              {"\n"}
              The Website Administrator reserves the right to change these terms
              and conditions at any time. Your continued use of the Website will
              be deemed acceptance of the updated or amended terms. 5. CHANGES
              TO TERMS
              {"\n"}
              The Website Administrator reserves the right to change these terms
              and conditions at any time. Your continued use of the Website will
              be deemed acceptance of the updated or amended terms. 5. CHANGES
              TO TERMS
              {"\n"}
              The Website Administrator reserves the right to change these terms
              and conditions at any time. Your continued use of the Website will
              be deemed acceptance of the updated or amended terms. 5. CHANGES
              TO TERMS
              {"\n"}
              The Website Administrator reserves the right to change these terms
              and conditions at any time. Your continued use of the Website will
              be deemed acceptance of the updated or amended terms.
            </Text>
          </ScrollView>
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
  backButtonContainer: {
    flexDirection: "row",
    backgroundColor: "transparent",
    marginLeft: horizontalScale(10),
    marginTop: verticalScale(40),
    ...Platform.select({
      ios: {
        marginLeft: horizontalScale(20),
      },
    }),
  },
  titleContainer: {
    marginTop: verticalScale(10),
    marginBottom: verticalScale(20),
    alignItems: "center",
    backgroundColor: "transparent",
  },
  title: {
    fontFamily: "karlaM",
    fontSize: moderateScale(35),
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: "transparent",
    marginHorizontal: horizontalScale(20),
  },
  scrollViewContentTitle: {
    fontSize: moderateScale(10),
    fontFamily: "karlaB",
    color: "#000",
  },
  scrollViewContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    borderWidth: 1,
  },
  content: {
    fontSize: moderateScale(10),
    fontFamily: "karlaR",
    color: "#000",
  },
  returnButton: {
    alignItems: "center",
    backgroundColor: "transparent",
    marginBottom: verticalScale(30),
  },
});

export default TermsAndConditions;
