import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const DamageReport = () => {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState(null); // Add this line
  const [keysPickedUp, setKeysPickedUp] = useState(false);
  const [keysDroppedOff, setKeysDroppedOff] = useState(false);

  // Sample data
  const reservations = [
    { id: '223', dateTime: '11/09/2022 9:43am', fullName: 'John Smith' },
    { id: '443', dateTime: '11/09/2022 9:43am', fullName: 'John Smith' },
    { id: '343', dateTime: '11/09/2022 9:43am', fullName: 'John Smith' },
    // Add more reservations as necessary
  ];

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
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/(tabs)/KeyHolder')}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Damage</Text>
          <Text style={styles.title}>Report</Text>
        </View>
        <TouchableOpacity onPress={() => router.push('/(tabs)/Home')}>
          <Ionicons name="exit" size={24} color="black" />
        </TouchableOpacity>
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
                {/* Replace these Text components with your custom checkbox components */}
                <Text style={keysPickedUp ? styles.checked : styles.unchecked} onPress={() => setKeysPickedUp(true)}>Keys Picked Up</Text>
                <Text style={keysDroppedOff ? styles.checked : styles.unchecked} onPress={() => setKeysDroppedOff(true)}>Keys Dropped Off</Text>
              </View>
              {/* Add Save button here */}
              <TouchableOpacity style={styles.saveButton} onPress={() => console.log('Save')}>
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    marginTop:20,
    fontSize: 30,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  headerCell: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  cell: {
    flex: 1,
    fontSize: 16,
  },
  textCell: {
    // textAlign: 'center', removed this line
  },
  actionCell: {
    alignItems: 'center',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  options: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  saveButton: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 20, // Add this line
  },
  saveButtonText: {
    color: 'white',
  },
  checked: {
    borderColor: 'orange',
    borderWidth: 1,
    padding: 5,
    marginBottom: 10,
  },
  unchecked: {
    borderColor: 'grey',
    borderWidth: 1,
    padding: 5,
    marginBottom: 10,
  },
});

export default DamageReport;
