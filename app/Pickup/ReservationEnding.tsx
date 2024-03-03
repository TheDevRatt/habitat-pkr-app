import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import AppButton from '../../components/AppButton';
import * as ImagePicker from 'expo-image-picker';
import AnalogClock from '../../components/AnalogClock';
import { useRouter } from 'expo-router'; // import useRouter

const ReservationEnding = () => {
  const [image, setImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter(); // initialize router

  const openCamera = async () => {
    const imageResult = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!imageResult.cancelled) {
      setImage({ uri: imageResult.uri });
    }
  };

  const handlePhotoSubmission = () => {
    console.log('Submit photo');
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
        <TouchableOpacity onPress={openCamera}>
          {image ? <Image source={{ uri: image }} style={styles.image} /> : <Image source={require('../../components/images/camera.png')} style={styles.image} />}
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
    setModalVisible(false); // close the modal
    router.push('/Pickup/UserReservation'); // navigate to Pickup/UserReservation
  }}
>
  <Text style={styles.modalButtonText}>Go to My Reservations</Text>
</TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  photoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  instructionText: {
    fontSize: 30,
  },
  button: {
    height: 60,
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'orange',
    marginBottom: 20,
  },
  timeSlotBox: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    height: 150,
    justifyContent: 'center', // Center the items vertically
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Add space between the clock and the text
  },
  clock: {
    width: 60,
    height: 60,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 0,
  },
  modalView: {
    width: '100%',
    height: '50%', // make the modal cover half of the screen
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 35,
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  modalButton: {
    backgroundColor: 'blue',
    marginTop: 20,
    borderRadius: 20, // rounded border
    padding: 10,
  },
  modalButtonText: {
    color: 'white', // white text
  },
});

export default ReservationEnding;
