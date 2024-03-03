import React, { useState } from "react";
import { StyleSheet } from "react-native";
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
import PaymentCard from "@/components/paymentCard";
import { Picker } from "@react-native-picker/picker";

const PaymentInfo = () => {
  const router = useRouter();

  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const handleOpenModal = () => {
    router.push('/onboarding/restricted');
  };

  return (
    <LinearGradient colors={["#FFFFFF", "#0099CC"]} style={styles.gradient}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Add Payment Information</Text>
      </View>
      <View style={{ backgroundColor: "transparent" }}>
        <PaymentCard />
        <View style={styles.itemContainer}></View>
      </View>
      <Text style={styles.dividerText}> OR </Text>
      <Text style={styles.cardTitle}> Enter Card Details </Text>

      <View style={styles.containerInput}>
        <View style={styles.row}>
          <Text style={styles.labelInput}>Cardholder Name</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.row}>
          <Text style={styles.labelInput}>Card Number</Text>
          <TextInput style={styles.input} keyboardType="numeric" />
        </View>
        <View style={styles.row}>
          <Text style={styles.labelInput}>Expiration Date</Text>
          <Picker
            style={styles.picker}
            selectedValue={selectedMonth}
            onValueChange={(itemValue, itemIndex) => setSelectedMonth(itemValue)}
          >
            <Picker.Item label="Month" value="" />
            <Picker.Item label="January" value="01" />
            <Picker.Item label="February" value="02" />
          </Picker>

          <Text style={styles.labelInput}>CVC</Text>
          <TextInput
            style={[styles.input, styles.cvcInput]}
            keyboardType="numeric"
          />
        </View>
      </View>
      <AppButton
        backgroundColor="white"
        widthPercentage={45}
        borderRadius={20}
        onPress={handleOpenModal}
      >
        Submit
      </AppButton>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    alignItems: "center",
  },
  titleContainer: {
    marginTop: verticalScale(70),
    marginBottom: verticalScale(30),
    backgroundColor: "transparent",
    textAlign: "left",
  },
  title: {
    fontFamily: "karlaM",
    fontSize: moderateScale(44),
  },
  itemContainer: {
    alignItems: "center",
    width: horizontalScale(300),
    marginBottom: verticalScale(30),
    backgroundColor: "transparent",
  },
  label: {
    fontSize: moderateScale(22),
    fontFamily: "karlaM",
    borderBottomWidth: 1,
    marginTop: verticalScale(5),
    marginBottom: -verticalScale(10),
    alignItems: "center",
    backgroundColor: "transparent",
  },
  logoL: {
    marginBottom: verticalScale(0),
  },
  logoI: {
    marginVertical: verticalScale(40),
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
  nextButtonContainer: {
    marginTop: verticalScale(2),
    borderRadius: 10,
  },
  nextButtonText: {
    fontSize: moderateScale(22),
    fontFamily: "karlaR",
  },

  containerInput: {
    width: "90%",
    backgroundColor: "transparent",
    fontFamily: "karlaR",
  },
  row: {
    flexDirection: "column",
    marginBottom: 20,
    backgroundColor: "transparent",
  },
  labelInput: {
    alignItems: "flex-start",
  },
  input: {
    flex: 2,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    width: "90%",
    paddingVertical: verticalScale(10),
    backgroundColor: "transparent",
    fontSize: moderateScale(14),
  },
  picker: {
    flex: 1,
    height: 50,
  },
  cvcInput: {
    width: "90%",
  },
  dividerText: {
    marginVertical: verticalScale(5),
  },
  cardTitle: {
    fontSize: moderateScale(20),
    fontFamily: "karlaM",
    marginVertical: verticalScale(15),
    marginBottom: verticalScale(35),
  },
});

export default PaymentInfo;
