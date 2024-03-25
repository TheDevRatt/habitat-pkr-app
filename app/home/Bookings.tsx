import React, { useState } from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import { SafeAreaView, Text, TouchableOpacity } from "@/components/Themed";
import { LinearGradient } from "expo-linear-gradient";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "@/constants/Metrics";
import { Link, useRouter } from "expo-router";
import AppButton from "@/components/AppButton";
import { selectedVehicle } from "../(tabs)/Home";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { reserve } from "../classes/Rental";

const Payment = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack(); // Navigate to the previous screen
  };

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  let t = new Date();
  t.setHours(t.getHours() + 1);
  const Init = [
    { id: 1, value: new Date(), visible: false },
    { id: 2, value: t, visible: false },
  ];

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [Data, SetData] = useState(Init);

  const handleDateConfirm = (data, index) => {
    let temp = [...Data];
    temp[index].value = data;
    temp[index].visible = false;
    SetData(temp);
  };

  const onCancel = (index) => {
    let temp = [...Data];
    temp[index].visible = false;
    SetData(temp);
  };

  const onOpen = (index) => {
    try {
      let temp = [...Data];
      temp[index].visible = true;
      SetData(temp);
    } catch (error) {
      console.log(error);
    }
  };

  const router = useRouter();
  let bookingDetails = {
    make: selectedVehicle.Make,
    model: selectedVehicle.Model,
    bookingId: "743774432",
    mileage: "Unlimited",
    insurance: "Included",
    rentalPrice: "$30",
    weekendPremium: "$0",
    taxes: "$4",
    totalPrice: "$34",
  };

  return (
    <LinearGradient colors={["#FFFFFF", "#59C9F0"]} style={styles.gradient}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <View style={styles.back}>
              <AntDesign
                name="arrowleft"
                size={24}
                color="black"
                onPress={goBack}
              />
            </View>
            <View>
              <Text style={styles.title}>Select Booking Dates:</Text>
            </View>

            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Pick Up:</Text>
              <View style={styles.buttonContainer}>
                <AppButton
                  onPress={() => onOpen(0)}
                  backgroundColor="#FFF"
                  widthPercentage={85}
                  borderRadius={10}
                  borderWidth={1}
                  borderStyle="solid"
                  borderColor="#0099cc"
                >
                  Select Pickup Time
                </AppButton>
                <DateTimePickerModal
                  isVisible={Data[0].visible}
                  minimumDate={new Date()}
                  maximumDate={
                    new Date(
                      new Date().setFullYear(new Date().getFullYear() + 1)
                    )
                  }
                  minuteInterval={30}
                  mode="datetime"
                  onConfirm={(data) => handleDateConfirm(data, 0)}
                  onCancel={() => onCancel(0)}
                />
              </View>

              <View style={styles.detailValue}>
                <Text style={styles.timeSlot}>
                  <EvilIcons name="calendar" size={24} color="#0099cc" />{" "}
                  {Data[0].value.toLocaleDateString("en-US", options)}
                </Text>
                <Text style={styles.timeSlot}>
                  <EvilIcons name="clock" size={24} color="#0099cc" />
                  {Data[0].value.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </Text>
              </View>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Drop Off:</Text>
              <View style={styles.buttonContainer}>
                <AppButton
                  onPress={() => onOpen(1)}
                  backgroundColor="#FFF"
                  widthPercentage={85}
                  borderRadius={10}
                  borderWidth={1}
                  borderStyle="solid"
                  borderColor="#0099cc"
                >
                  Drop Off Time
                </AppButton>
                <DateTimePickerModal
                  isVisible={Data[1].visible}
                  minimumDate={new Date()}
                  maximumDate={
                    new Date(
                      new Date().setFullYear(new Date().getFullYear() + 1)
                    )
                  }
                  minuteInterval={30}
                  mode="datetime"
                  onConfirm={(data) => handleDateConfirm(data, 1)}
                  onCancel={() => onCancel(1)}
                />
              </View>
              <View style={styles.detailValue}>
                <Text style={styles.timeSlot}>
                  <EvilIcons name="calendar" size={24} color="#0099cc" />{" "}
                  {Data[1].value.toLocaleDateString("en-US", options)}
                </Text>
                <Text style={styles.timeSlot}>
                  <EvilIcons name="clock" size={24} color="#0099cc" />
                  {Data[1].value.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </Text>
              </View>
            </View>
            <View style={styles.detailsContainer}>
              <View style={styles.detailRowCard}>
                <Text style={styles.detailLabelCard}>Mileage:</Text>
                <Text style={styles.detailValueCard}>
                  {bookingDetails.mileage}
                </Text>
              </View>
              <View style={styles.detailRowCard}>
                <Text style={styles.detailLabelCard}>Insurance:</Text>
                <Text style={styles.detailValueCard}>
                  {bookingDetails.insurance}
                </Text>
              </View>
              <View style={styles.detailRowCard}>
                <Text style={styles.detailLabelCard}>Rental Price:</Text>
                <Text style={styles.detailValueCard}>
                  {bookingDetails.rentalPrice}
                </Text>
              </View>
              <View style={styles.detailRowCard}>
                <Text style={styles.detailLabelCard}>Weekend Premium:</Text>
                <Text style={styles.detailValueCard}>
                  {bookingDetails.weekendPremium}
                </Text>
              </View>
              <View style={styles.detailRowCard}>
                <Text style={styles.detailLabelCard}>Taxes:</Text>
                <Text style={styles.detailValueCard}>
                  {bookingDetails.taxes}
                </Text>
              </View>
              <View style={styles.detailRowCard}>
                <Text style={styles.detailPrice}>Total Price:</Text>
                <Text style={styles.detailPrice}>
                  {bookingDetails.totalPrice}
                </Text>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <AppButton
                onPress={async () => {
                  let reservation = await reserve(
                    selectedVehicle.id,
                    Data[0].value,
                    Data[1].value,
                    selectedVehicle.DayRate,
                    selectedVehicle.HourlyRate
                  );
                  if (reservation == "Booked") {
                    alert("Reservation complete");
                    router.push({ pathname: "/home/paymentInfo" })
                  } else {
                    alert(reservation);
                  }
                }}
                backgroundColor="#E55D25"
                widthPercentage={45}
                textColor="#fff"
              >
                Pay
              </AppButton>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  back: {
    width: "90%",
    height:"3%"
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "transparent",
  },
  scrollView: {
    width: "100%",
    flex: 1,
  },

  title: {
    fontFamily: "karlaM",
    fontSize: moderateScale(44),
    alignItems: "center",
    marginBottom: verticalScale(5),
  },
  detailsContainer: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: moderateScale(20),
    marginVertical: verticalScale(15),
    width: "90%",
  },
  detailRow: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginVertical: verticalScale(18),
    width: "80%",
  },
  detailLabel: {
    fontFamily: "karlaB",
    fontSize: moderateScale(25),
    marginBottom: verticalScale(5),
  },
  detailValue: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
  },
  timeSlot: {
    fontFamily: "karlaR",
    fontSize: moderateScale(20),
    width: "100%",
    marginTop: verticalScale(4),
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: verticalScale(5),
  },
  payButton: {
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(20),
  },
  detailRowCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: verticalScale(10),
  },
  detailLabelCard: {
    fontFamily: "karlaB",
    fontSize: moderateScale(16),
    marginBottom: verticalScale(5),
  },
  detailValueCard: {
    fontFamily: "karlaR",
    fontSize: moderateScale(16),
    marginBottom: verticalScale(5),
  },
  detailPrice: {
    fontFamily: "karlaEB",
    fontSize: moderateScale(16),
    marginBottom: verticalScale(5),
  },
});

export default Payment;
