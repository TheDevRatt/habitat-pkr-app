import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import AppButton from '../../components/AppButton';
import * as ImagePicker from 'expo-image-picker';
import CameraIcon from '@/components/CameraIcon'; // Import CameraIcon component
import { useRouter } from 'expo-router';
import AnalogClock from '../../components/AnalogClock';
import { verticalScale, moderateScale, horizontalScale } from '@/constants/Metrics';
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
    <View style={styles.container}>
      <Text style={styles.headerText}>
        Reservation
      </Text>
      <Text style={styles.headerText}>
        Ended
      </Text>

      {/* Gas Level Photo */}
      <View style={styles.photoContainer}>
        <TouchableOpacity onPress={() => handleOpenCamera(gasLevelImage)}>
          {image ? <Image source={{ uri: image }} style={styles.image} /> : <CameraIcon />}
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
          <AnalogClock style={styles.clock} />
          <Text style={styles.headerText}>4:00</Text>
        </View>
      </View>

      <Text style={styles.instructionText}>
        Please meet the key-holder at location within the 15-minute time slot to drop off the keys.
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
            <Text style={styles.modalText}>You've successfully completed your booking.</Text>
            <Text style={styles.modalText}>{"\n"}To see more details please go to “My Reservations” and select the appropriate booking.</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setModalVisible(false);
                router.push('/(tabs)/Bookings');
              }}
            >
              <Text style={styles.modalButtonText}>Go to My Reservations</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(20),
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: moderateScale(50),
    fontWeight: 'bold',
  },
  photoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: moderateScale(20),
    flexWrap: 'wrap',
  },
  image: {
    width: moderateScale(80),
    height: moderateScale(80),
    marginRight: moderateScale(10),
  },
  instructionText: {
    fontSize: moderateScale(30),
    marginBottom: moderateScale(20),
  },
  button: {
    height: moderateScale(60),
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    marginBottom: moderateScale(20),
    borderRadius: moderateScale(30),
    borderWidth: moderateScale(1),
    borderColor: 'black',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  timeSlotBox: {
    borderWidth: moderateScale(1),
    borderColor: 'black',
    padding: moderateScale(20),
    borderRadius: moderateScale(10),
    marginBottom: moderateScale(20),
    height: verticalScale(200),
    justifyContent: 'center',
    shadowColor: '#000',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  clock: {
    width: moderateScale(60),
    height: moderateScale(60),
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 0,
  },
  modalView: {
    width: '100%',
    height: '50%',
    backgroundColor: 'white',
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
    padding: moderateScale(35),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    marginBottom: moderateScale(20),
  },
  modalText: {
    fontSize: moderateScale(22),
    marginBottom: moderateScale(10),
  },
  modalButton: {
    backgroundColor: 'blue',
    marginTop: moderateScale(20),
    borderRadius: moderateScale(20),
    padding: moderateScale(12),
  },
  modalButtonText: {
    color: 'white',
  },
});

export default ReservationEnding;
