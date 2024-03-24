import React, { useState } from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ScrollView,
} from "react-native";
import { Text, View, SafeAreaView, TextInput } from "@/components/Themed";
import { LinearGradient } from "expo-linear-gradient";
import AppButton from "../../components/AppButton";
import { useRouter } from "expo-router";
import PaymentCard from "@/components/PaymentCard";
import {
  verticalScale,
  moderateScale,
  horizontalScale,
} from "@/constants/Metrics";
import BackButton from "@/components/BackButton";

import { Picker } from "@react-native-picker/picker";

const PaymentInfo = () => {
  const router = useRouter();

  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardCVC, setCardCVC] = useState("");

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
    router.push("/home/BookingComplete");
  };

  const formatCardNumber = (value: any) => {
    // Remove non-numeric characters
    const numericValue = value.replace(/\D/g, "");
    // Add a space after every 4 characters
    const formattedValue = numericValue.replace(/(\d{4})/g, "$1 ").trim();
    return formattedValue;
  };

  const handleChangeCardNumber = (value: any) => {
    // Update the card number input value with formatted value
    const formattedValue = formatCardNumber(value);
    // Update the input value
    setCardNumber(formattedValue);
  };

  const handleChangeCardName = (value: any) => {
    setCardName(value);
  };

  const handleChangeCardCVC = (value: any) => {
    setCardCVC(value);
  };

  const booking = {
    id: 1,
    make: "Honda",
    model: "Civic",
    pickup: "Dec 11 2023",
    dropoff: "Dec 15 2023",
    amount: 700,
    imageUrl: require("@/assets/images/carImagesTEMP/image 13.png"),
  };

  return (
    <LinearGradient colors={["#FFFFFF", "#0099CC"]} style={styles.gradient}>
      <SafeAreaView style={{ backgroundColor: "transparent"}}>
        <ScrollView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={styles.container}
            >
              <View style={styles.backButtonContainer}>
                <BackButton />
              </View>

              <View style={styles.titleContainer}>
                <Text style={styles.title}>Payment Information</Text>
              </View>

              {/* <View style={styles.cardContainer}>
            <PaymentCard />
          </View> */}

              {/* <Text style={styles.dividerText}> OR </Text> */}

              <View style={styles.subtitleContainer}>
                <Text style={styles.subtitle}> Enter Card Details </Text>
              </View>

              <View style={styles.inputGroup}>
                <TextInput
                  value={cardName}
                  placeholder={"Cardholder Name"}
                  style={styles.inputField}
                  placeholderTextColor="#000"
                  onChangeText={handleChangeCardName}
                />

                <View style={styles.inputContainer}>
                  <TextInput
                    value={cardNumber}
                    placeholder={"Card Number"}
                    style={styles.cardInput}
                    keyboardType="numeric"
                    placeholderTextColor="#000"
                    onChangeText={handleChangeCardNumber}
                    maxLength={19} // Maximum length considering spaces
                  />

                  <TextInput
                    value={cardCVC}
                    placeholder={"CVC"}
                    style={styles.cvcInput}
                    keyboardType="numeric"
                    placeholderTextColor="#000"
                    onChangeText={handleChangeCardCVC}
                    maxLength={3} // Maximum length considering spaces
                  />
                </View>
              </View>

              <View style={styles.containerInput}>
                {/* <View style={styles.row}>
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
              </View> */}

                <View style={styles.expirationContainer}>
                  <Text style={styles.expirationText}>Expiration Date:</Text>
                </View>

                <View style={styles.row}>
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

              <View style={styles.Card}>
                <Text style={styles.CardText}>Summary</Text>
                <PaymentCard
                  make={booking.make}
                  model={booking.model}
                  pickup={booking.pickup}
                  dropoff={booking.dropoff}
                  amount={booking.amount}
                  imageUrl={booking.imageUrl}
                />
              </View>
              <View style={styles.submitButton}>
                <AppButton
                  backgroundColor="#E55D25"
                  widthPercentage={85}
                  textStyle={{ color: "#fff" }}
                  onPress={handleOpenModal}
                >
                  Confirm Payment
                </AppButton>
              </View>
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
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
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    paddingHorizontal: horizontalScale(10),
  },
  titleContainer: {
    marginBottom: verticalScale(10),
    alignItems: "center",
    backgroundColor: "transparent",
  },
  backButtonContainer: {
    flexDirection: "row",
    marginTop:verticalScale(10),
    backgroundColor: "transparent",
    marginLeft: horizontalScale(10),
  },
  title: {
    fontFamily: "karlaM",
    textAlign: "center",
    fontSize: moderateScale(44),
    ...Platform.select({
      ios: {
        marginBottom: verticalScale(15),
      },
      android: {
        marginBottom: verticalScale(15),
      },
    }),
  },
  subtitleContainer: {
    marginBottom: verticalScale(40),
    backgroundColor: "transparent",
    alignItems: "center",
  },
  subtitle: {
    backgroundColor: "transparent",
    fontSize: moderateScale(22),
    fontFamily: "karlaM",
    marginTop: verticalScale(10),
  },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "transparent",
    justifyContent: "space-between",
  },
  inputField: {
    fontFamily: "karlaR",
    fontSize: moderateScale(22),
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginBottom: verticalScale(40),
    width: "100%",
    backgroundColor: "transparent",
  },
  inputGroup: {
    alignItems: "center",
    marginHorizontal: horizontalScale(20),
    backgroundColor: "transparent",
  },
  dividerText: {
    marginBottom: verticalScale(15),
  },
  cardTitle: {
    fontSize: moderateScale(20),
    fontFamily: "karlaM",
    marginBottom: verticalScale(30),
  },
  containerInput: {
    marginTop: verticalScale(5),
    backgroundColor: "transparent",
  },
  row: {
    marginBottom: verticalScale(50),
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
    marginBottom: verticalScale(50),
    marginRight: horizontalScale(50),
  },
  labelInput: {
    fontSize: moderateScale(16),
    marginBottom: verticalScale(5),
    backgroundColor: "transparent",
  },
  expirationContainer: {
    backgroundColor: "transparent",
    ...Platform.select({
      ios: {},
      android: {
        marginBottom: verticalScale(10),
      },
    }),
  },
  expirationText: {
    fontSize: moderateScale(20),
    paddingLeft: horizontalScale(15),
    backgroundColor: "transparent",
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
    ...Platform.select({
      ios: {
        width: "50%",
      },
      android: {
        width: "50%",
      },
    }),
  },
  cvcInput: {
    fontFamily: "karlaR",
    fontSize: moderateScale(22),
    marginLeft: horizontalScale(10),
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginBottom: verticalScale(25),
    width: "15%",
    backgroundColor: "transparent",
  },
  cardInput: {
    fontFamily: "karlaR",
    fontSize: moderateScale(22),
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginBottom: verticalScale(25),
    width: "80%",
    backgroundColor: "transparent",
  },
  submitButton: {
    alignItems: "center",
    backgroundColor: "transparent",
    marginVertical: verticalScale(15),
  },
  CardText: {
    fontSize: moderateScale(22),
    fontFamily: "karlaB",
    marginLeft: horizontalScale(15),
  },
  Card: {
    marginBottom: verticalScale(10),
    backgroundColor: "transparent",
  },
});

export default PaymentInfo;
