import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Button,
  Modal,
} from "react-native";
import AppButton from "../../components/AppButton";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker"; // Import DateTimePicker
import {
  verticalScale,
  moderateScale,
  horizontalScale,
} from "@/constants/Metrics";
import Camera from "../../assets/images/camera.png";
import { useRouter } from "expo-router";
import { SafeAreaView } from "@/components/Themed";
import { EvilIcons } from "@expo/vector-icons";
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import AppButton from '../../components/AppButton';
import * as ImagePicker from 'expo-image-picker';
import CameraIcon from '@/components/CameraIcon'; // Import CameraIcon component
import { useRouter } from 'expo-router';
import { openCamera } from "./../classes/CloudStorage";
import { selectedVehicle, selectedReservation } from "../(tabs)/Bookings";
import { updateActiveStatus } from "../classes/Rental";
import { getUserID } from "../classes/UserUtils";

const ReservationEnding = () => {
  const [image, setImage] = useState(null);
  const [gasLevelImage, setGasLevelImage] = useState("Gas");
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();

  function handleOpenCamera(gasLevelImage){
      let filename = ("pickup" + gasLevelImage) ;
      let location = ("Reservations/" + selectedReservation.id);
      openCamera(filename, location);
    }

  const handlePhotoSubmission = () => {
    console.log('Submit photo');
    updateActiveStatus(getUserID());
    router.push("(tabs)/Home")
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Reservation Ended</Text>

      {/* Gas Level Photo */}
      <View style={styles.photoContainer}>
        <TouchableOpacity onPress={openCamera}>
          {image ? (
            <Image source={{ uri: image }} style={styles.image} />
          ) : (
            <Image source={Camera} style={styles.image} />
          )}
        </TouchableOpacity>
        <Text style={styles.instructionText}>
          Please take a photo of the gas level on the dashboard
        </Text>
      </View>

      {/* Submit Photo Button */}
      <AppButton
        style={styles.button}
        onPress={handlePhotoSubmission}
      >
        Submit Photo
      </AppButton>

      {/* Time Slot Box */}
      <View style={styles.timeSlotBox}>
        <View style={styles.row}>
          <EvilIcons name="clock" size={125} color="#E85E21" />
          <Text style={styles.headerTextBox}>4:00</Text>
        </View>
      </View>

      <Text style={styles.instructionText}>
        Please meet the key-holder at location within the 15-minute time slot to
        drop off the keys.
      </Text>

      {/* Success Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Success!</Text>
            <Text style={styles.modalText}>
              You've successfully completed your booking.
            </Text>
            <Text style={styles.modalText}>
              {"\n"}To see more details please go to “My Reservations” and
              select the appropriate booking.
            </Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setModalVisible(false); // close the modal
                router.push('/Pickup/UserReservation'); // navigate to Pickup/UserReservation
              }}
            >
              <Text style={styles.modalButtonText}>Go to My Reservations</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: verticalScale(12),
    backgroundColor: "white",
    justifyContent: "space-around",
    alignItems: "center",
  },
  headerText: {
    fontSize: moderateScale(40),
    fontWeight: "bold",
    marginBottom: verticalScale(5),
    marginTop: horizontalScale(30),
    fontFamily: "karlaM",
    textAlign: "left",
  },
  photoContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  image: {
    backgroundColor: "#ECFAFF",
    borderRadius: moderateScale(10),
    marginRight: horizontalScale(10),
  },
  instructionText: {
    fontSize: moderateScale(25),
    width: "70%",
    fontFamily: "karlaR",
    textAlign: "left",
    marginHorizontal: horizontalScale(10),
  },
  button: {
    height: 50,
    width: "85%",
    borderWidth: 1,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 20,
  },
  timeSlotBox: {
    width: "85%",
    alignItems: "center",
    backgroundColor: "white",
    padding: "5%",
    borderRadius: moderateScale(10),
    shadowColor: "0000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: moderateScale(3.84),
    elevation: 5,
  },
  headerTextBox: {
    fontSize: moderateScale(50),
    fontFamily: "karlaEB",
    marginBottom: 10,
    width: "50%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: verticalScale(20),
  },
  clock: {
    width: moderateScale(60),
    height: moderateScale(60),
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)", // dark background
  },
  modalView: {
    width: "100%",
    height: "50%", // make the modal cover half of the screen
    backgroundColor: "white",
    justifyContent: "space-evenly",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontFamily: "karlaM",
    fontSize: moderateScale(40),
    marginBottom: moderateScale(5),
  },
  modalText: {
    fontFamily: "karlaR",
    fontSize: moderateScale(20),
  },
  modalButton: {
    backgroundColor: "#0099CC",
    marginTop: 20,
    borderRadius: 20, // rounded border
    padding: moderateScale(12),
    paddingHorizontal: moderateScale(26),
    color: "Black",
  },
  modalButtonText: {
    color: "black",
    fontFamily: "karlaR",
    fontSize: moderateScale(22),
  },
});

export default ReservationEnding;
