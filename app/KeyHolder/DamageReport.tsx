import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { horizontalScale, verticalScale, moderateScale } from "@/constants/Metrics";
import BackButton from "@/components/BackButton";
import SignoutIcon from "@/components/SignoutIcon";
import CheckBoxIcon from "@/components/CheckBoxIcon";

const DamageReport = () => {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState(null);

  const reservations = [
    { id: '223', dateTime: '11/09/2022 9:43am', fullName: 'John Smith' },
    { id: '443', dateTime: '11/09/2022 9:43am', fullName: 'John Smith' },
    { id: '343', dateTime: '11/09/2022 9:43am', fullName: 'John Smith' },
    { id: '383', dateTime: '11/09/2022 9:43am', fullName: 'John Smith' },
    { id: '393', dateTime: '11/09/2022 9:43am', fullName: 'John Smith' },
    { id: '323', dateTime: '11/09/2022 9:43am', fullName: 'John Smith' },
    { id: '363', dateTime: '11/09/2022 9:43am', fullName: 'John Smith' },
    { id: '373', dateTime: '11/09/2022 9:43am', fullName: 'John Smith' },
    { id: '347', dateTime: '11/09/2022 9:43am', fullName: 'John Smith' },
  ];

  const [keysPickedUp, setKeysPickedUp] = useState(false);
  const [keysDroppedOff, setKeysDroppedOff] = useState(false);

  const handleActionPress = (id) => {
    if (selectedId === id) {
      setSelectedId(null);
    } else {
      setSelectedId(id);
      setKeysPickedUp(false);
      setKeysDroppedOff(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <BackButton onPress={() => router.push('/(tabs)/KeyHolder')} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Damage</Text>
          <Text style={styles.title}>Report</Text>
        </View>
        <SignoutIcon onPress={() => router.push('/(tabs)/Home')} />
      </View>
      <View style={styles.row}>
        <Text style={[styles.cell, styles.headerCell]}>Id</Text>
        <Text style={[styles.cell, styles.headerCell]}>DateTime</Text>
        <Text style={[styles.cell, styles.headerCell]}>Full Name</Text>
        <Text style={[styles.cell, styles.headerCell]}>Action</Text>
      </View>
      {reservations.map((reservation, index) => (
        <View key={index}>
          <View style={styles.row}>
            <Text style={[styles.cell, styles.textCell]}>{reservation.id}</Text>
            <Text style={[styles.cell, styles.textCell]}>{reservation.dateTime}</Text>
            <Text style={[styles.cell, styles.textCell]}>{reservation.fullName}</Text>
            <TouchableOpacity
              style={[styles.cell, styles.actionCell]}
              onPress={() => handleActionPress(reservation.id)}
            >
              <Ionicons name={selectedId === reservation.id ? "chevron-up" : "chevron-down"} size={24} color="black" />
            </TouchableOpacity>
          </View>
          {selectedId === reservation.id && (
            <View style={styles.optionsContainer}>
              <View style={styles.options}>
                <TouchableOpacity
                  style={styles.checkboxContainer}
                  onPress={() => {
                    setKeysPickedUp(!keysPickedUp);
                    setKeysDroppedOff(false);
                  }}
                >
                  <CheckBoxIcon checked={keysPickedUp} />
                  <Text>Keys Picked Up</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.checkboxContainer}
                  onPress={() => {
                    setKeysDroppedOff(!keysDroppedOff);
                    setKeysPickedUp(false);
                  }}
                >
                  <CheckBoxIcon checked={keysDroppedOff} />
                  <Text>Keys Dropped Off</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.saveButton} onPress={() => console.log('Save')}>
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: horizontalScale(20),
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: verticalScale(20),
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    marginTop: verticalScale(20),
    fontSize: moderateScale(30),
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: verticalScale(10),
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  headerCell: {
    flex: 1,
    fontSize: moderateScale(16),
    fontWeight: 'bold',
  },
  cell: {
    flex: 1,
    fontSize: moderateScale(16),
  },
  textCell: {

  },
  actionCell: {
    alignItems: 'center',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: verticalScale(10),
  },
  options: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: verticalScale(10),
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: horizontalScale(10),
  },
  saveButton: {
    backgroundColor: 'orange',
    paddingVertical: verticalScale(4),
    paddingHorizontal: horizontalScale(8),
    borderRadius: 20,
    alignSelf: 'flex-end',
    flex: 0.5,
  },
  saveButtonText: {
    color: 'white',
    fontSize: moderateScale(22),
    textAlign: 'center',
  },
});

export default DamageReport;
