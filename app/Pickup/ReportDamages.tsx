import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, SafeAreaView, Button } from 'react-native';
import AppButton from '@/components/AppButton';
import * as ImagePicker from 'expo-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import CameraIcon from '@/components/CameraIcon'; 
import { verticalScale, moderateScale, horizontalScale } from '@/constants/Metrics';

const ReportDamages = () => {
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [photos, setPhotos] = useState([]);

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!pickerResult.cancelled) {
      const imageResult = pickerResult.assets[0];
      const newUri = imageResult.uri + '?' + new Date().getTime();
      console.log('New photo URI:', newUri);
      setPhotos([...photos, newUri]);
    }
  };

  const handleSubmit = () => {
    console.log('Description:', description);
    console.log('Location:', location);
    console.log('Time:', time);
    console.log('Photos:', photos);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Report Accident or Damages</Text>

      <Text style={styles.label}>Please describe the damages or report it as much in detail as possible:</Text>
      <TextInput
        multiline
        numberOfLines={10}
        style={styles.input}
        value={description}
        onChangeText={text => setDescription(text)}
      />

      <Text style={styles.label}>Location of damage/accident:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inlineInput}
          value={location}
          onChangeText={text => setLocation(text)}
        />
      </View>

      <View style={styles.line} />

      <Text style={styles.label}>Time of damage/accident occurring:</Text>
      <View style={styles.dateContainer}>
        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateButton}>
          <Text style={styles.dateButtonText}>Select Date</Text>
        </TouchableOpacity>
        <Text style={styles.selectedDate}>{time.toDateString()}</Text>
      </View>
      
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={time}
          mode={'date'}
          display="default"
          onChange={(event, selectedDate) => {
            const currentDate = selectedDate || time;
            setTime(currentDate);
            setShowDatePicker(false);
          }}
        />
      )}

      <View style={styles.cameraRow}>
        <TouchableOpacity onPress={openCamera}>
          <CameraIcon style={styles.cameraIcon} />
        </TouchableOpacity>
        <Text style={styles.cameraLabel}>Attach photos of the accident/damages</Text>
      </View>

      <View style={styles.photoContainer}>
        {photos.map((photo, index) => (
          <Image key={index} source={{ uri: photo }} style={styles.photo} />
        ))}
      </View>

      <AppButton style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </AppButton>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: verticalScale(100),
    paddingHorizontal: 50,
    backgroundColor: 'white',
    justifyContent:'center',
    textAlign: 'center',
    alignItems:'center',
  },
  title: {
    fontSize: moderateScale(30),
    fontWeight: 'bold',
    marginBottom: verticalScale(20),
    marginTop: verticalScale(30),
    textAlign: 'center',
  },
  label: {
    fontSize: moderateScale(27),
    marginBottom: verticalScale(15),
    textAlign: 'auto',
    paddingHorizontal: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    width: horizontalScale(340),
    marginBottom: verticalScale(20),
    height: verticalScale(100),
    alignItems:'center',
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderColor: 'black',
  
  },
  inlineInput: {
    height: verticalScale(40),
    width: horizontalScale(340),
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginBottom: verticalScale(10),
    width:horizontalScale(340),
    justifyContent: 'center',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(20),
    
  },
  dateButton: {
    backgroundColor: 'orange',
    borderRadius: moderateScale(25),
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(20),
    marginRight: horizontalScale(20),
  },
  dateButtonText: {
    color: 'white',
    fontSize: moderateScale(16),
  },
  selectedDate: {
    fontSize: moderateScale(16),
  },
  cameraRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(10),
    marginBottom: verticalScale(10),
    paddingHorizontal:10,
  },
  cameraIcon: {
    width: moderateScale(60),
    height: moderateScale(60),
  },
  cameraLabel: {
    fontSize: moderateScale(24),
    flexShrink: 1,
    marginLeft: horizontalScale(10),
  },
  photoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: verticalScale(20),
  },
  photo: {
    width: moderateScale(60),
    height: moderateScale(60),
    borderRadius: moderateScale(10),
    marginRight: horizontalScale(10),
  },
  submitButton: {
    height: verticalScale(50),
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'orange', 
    borderRadius: moderateScale(25), 
    marginBottom: verticalScale(10),
  },
  submitButtonText: {
    color: 'white', 
    textAlign: 'center',
  },
});
export default ReportDamages;
