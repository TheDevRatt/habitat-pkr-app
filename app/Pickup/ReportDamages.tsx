import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Button,
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

const ReportDamages = () => {
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [photos, setPhotos] = useState([]);
  const router = useRouter();

  const openCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera is required!");
      return;
    }

    const pickerResult = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!pickerResult.cancelled) {
      const imageResult = pickerResult.assets[0];
      const newUri = imageResult.uri + "?" + new Date().getTime();
      console.log("New photo URI:", newUri);
      setPhotos([...photos, newUri]);
    }
  };

  const handleSubmit = () => {
    // Handle submission logic here
    console.log("Description:", description);
    console.log("Location:", location);
    console.log("Time:", time);
    console.log("Photos:", photos);
    router.push("/Pickup/ActiveReservation");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Report Accident or Damages</Text>
      <View style={styles.rowText} >
        <Text style={styles.label}>
          Please describe the damages or report it as much in detail as
          possible:
        </Text>
        <TextInput
          multiline
          numberOfLines={10}
          style={styles.input}
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
      </View>
      <View style={styles.locContainer}>
        <Text style={styles.label}>Location of damage/accident:</Text>
        <TextInput
          style={styles.inlineInput}
          value={location}
          onChangeText={(text) => setLocation(text)}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Time of damage/accident occurring:</Text>
        <Button
          title="Show Date and Time Picker"
          onPress={() => setShowDatePicker(true)}
        />
        {showDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={time}
            mode={"datetime"} // Change this to 'datetime'
            display="default"
            onChange={(event, selectedDate) => {
              const currentDate = selectedDate || time;
              setTime(currentDate);
              setShowDatePicker(false);
            }}
          />
        )}
      </View>
      <View style={styles.cameraRow}>
        <TouchableOpacity onPress={openCamera}>
          <Image source={Camera} style={styles.cameraIcon} />
        </TouchableOpacity>
        <Text style={styles.cameraLabel}>
          Attach photos of the accident/damages
        </Text>
      </View>

      {/* Display selected photos */}
      <View style={styles.photoContainer}>
        {photos.map((photo, index) => (
          <Image key={index} source={{ uri: photo }} style={styles.photo} />
        ))}
      </View>

      <AppButton
        backgroundColor="#E55D25"
        widthPercentage={85}
        onPress={handleSubmit}
      >
        <Text style={styles.submitButtonText}>Submit</Text>
      </AppButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: verticalScale(12),
    backgroundColor: "white",
    justifyContent: "space-around",
    alignItems: "center",
  },
  title: {
    fontSize: moderateScale(40),
    fontWeight: "bold",
    marginBottom: verticalScale(5),
    marginTop: horizontalScale(30),
    fontFamily: "karlaM",
    textAlign: "left",
  },
  label: {
    fontSize: moderateScale(20),
    fontFamily: "karlaL",
    textAlign: "left",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    height: "90%",
    borderRadius: 10,
    marginVertical: verticalScale(10),
  },
  rowText:{
    height: "12%",
     marginBottom: verticalScale(50),
  },
  inlineInput: {
    borderBottomWidth: 1,
    borderColor: "black",
    width: "90%",
    marginVertical: verticalScale(10),
  },
  locContainer: {
    width: "95%",
  },
  lineContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "black",
    marginTop: 30,
    marginBottom: 60,
  },
  row:{
    marginVertical: verticalScale(10),
  },
  cameraRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cameraIcon: {
    backgroundColor: "#ECFAFF",
    borderRadius: moderateScale(10),
    marginRight: horizontalScale(10),
  },
  cameraLabel: {
    fontSize: moderateScale(25),
    width: "70%",
    fontFamily: "karlaR",
    textAlign: "left",
    marginHorizontal: horizontalScale(10),
  },
  photoContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  photo: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  submitButton: {
    height: 50,
    width: "90%",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "orange",
    borderRadius: 25,
    color: "white",
    marginBottom: 20,
  },
  submitButtonText: {
    color: "white", // Change this to 'white'
    textAlign: "center",
  },
});

export default ReportDamages;
