import React, { useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Text, View, SafeAreaView, TextInput } from "@/components/Themed";
import { LinearGradient } from "expo-linear-gradient";
import AppButton from "../../components/AppButton";
import { useRouter } from "expo-router";
import PaymentCard from "@/components/paymentCard";
import {
  verticalScale,
  moderateScale,
  horizontalScale,
} from "@/constants/Metrics";
import { Picker } from "@react-native-picker/picker";

const PaymentInfo = () => {
  const router = useRouter();

  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cardNumber, setCardNumber] = useState("");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = Array.from({ length: 10 }, (_, i) => (2024 + i).toString());

  const handleOpenModal = () => {
    router.push("/onboarding/restricted");
  };

  const formatCardNumber = (value) => {
    // Remove non-numeric characters
    const numericValue = value.replace(/\D/g, "");
    // Add a space after every 4 characters
    const formattedValue = numericValue.replace(/(\d{4})/g, "$1 ").trim();
    return formattedValue;
  };

  const handleChangeCardNumber = (value) => {
    // Update the card number input value with formatted value
    const formattedValue = formatCardNumber(value);
    // Update the input value
    setCardNumber(formattedValue);
  };

  return (
    <LinearGradient colors={["#FFFFFF", "#0099CC"]} style={styles.gradient}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Add Payment Information</Text>
          </View>
          <View style={styles.cardContainer}>
            <PaymentCard />
          </View>
          <Text style={styles.dividerText}> OR </Text>
          <Text style={styles.cardTitle}> Enter Card Details </Text>

          <View style={styles.containerInput}>
            <View style={styles.row}>
              <Text style={styles.labelInput}>Cardholder Name</Text>
              <TextInput style={styles.input} />
            </View>
            <View style={styles.rowCard}>
              <View style={styles.line}>
                <Text style={styles.labelInput}>Card Number</Text>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  onChangeText={handleChangeCardNumber}
                  value={cardNumber}
                  maxLength={19} // Maximum length considering spaces
                />
              </View>
              <View style={styles.line}>
                <Text style={styles.labelInput}>CVC</Text>
                <TextInput
                  style={[styles.input, styles.cvcInput]}
                  keyboardType="numeric"
                />
              </View>
            </View>

            <View style={styles.row}>
              <Text style={styles.labelInputExpiration}>Expiration Date</Text>
              <View style={styles.inlineInput}>
                <Picker
                  selectedValue={month}
                  onValueChange={(itemValue) => setMonth(itemValue)}
                  style={styles.inlinePicker}
                >
                  {months.map((m) => (
                    <Picker.Item key={m} label={m} value={m} />
                  ))}
                </Picker>
                <Picker
                  selectedValue={year}
                  onValueChange={(itemValue) => setYear(itemValue)}
                  style={styles.inlinePicker}
                >
                  {years.map((y) => (
                    <Picker.Item key={y} label={y} value={y} />
                  ))}
                </Picker>
              </View>
            </View>
          </View>
          <AppButton
            backgroundColor="white"
            widthPercentage={85}
            borderRadius={20}
            onPress={handleOpenModal}
          >
            Submit
          </AppButton>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    alignItems: "center",
    paddingBottom: verticalScale(20),
  },
  titleContainer: {
    marginTop: verticalScale(10),
    marginBottom: verticalScale(20),
    backgroundColor: "transparent",
  },
  title: {
    fontFamily: "karlaM",
    fontSize: moderateScale(44),
  },
  cardContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: verticalScale(30),
    backgroundColor: "transparent",
  },
  dividerText: {
    marginBottom: verticalScale(15),
  },
  cardTitle: {
    fontSize: moderateScale(20),
    fontFamily: "karlaM",
    marginBottom: verticalScale(20),
  },
  containerInput: {
    width: "90%",
    backgroundColor: "transparent",
    margin:0,
  },
  row: {
    marginBottom: verticalScale(20),
    backgroundColor: "transparent",
  },
  rowCard: {
    flexDirection: "row",
    backgroundColor: "transparent",
    justifyContent: "space-between",
  },
  line: {
    backgroundColor: "transparent",
    width: "60%",
    marginBottom: verticalScale(20),
    marginRight: horizontalScale(50),
  },
  labelInput: {
    fontSize: moderateScale(16),
    marginBottom: verticalScale(5),
    backgroundColor: "transparent",
  },
  labelInputExpiration:{
    fontSize: moderateScale(16),
    backgroundColor: "transparent",
    position:"absolute",
    marginTop:verticalScale(5)
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    paddingVertical: verticalScale(10),
    fontSize: moderateScale(14),
    backgroundColor: "transparent",
    flex: 1,
  },
  inlineInput: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },
  inlinePicker: {
    width: "50%",
  },
  cvcInput: {
    width: "40%",
  },
});

export default PaymentInfo;
