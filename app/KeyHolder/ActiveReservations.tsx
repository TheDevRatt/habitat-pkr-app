import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'; // Import ScrollView
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const ActiveReservations = () => {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState(null);

  // Sample data
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
        <TouchableOpacity onPress={() => router.push('/(tabs)/KeyHolder')}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Active</Text>
          <Text style={styles.title}>Reservations</Text>
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
                <TouchableOpacity
                  style={styles.checkboxContainer}
                  onPress={() => {
                    setKeysPickedUp(!keysPickedUp);
                    setKeysDroppedOff(false);
                  }}
                >
                  <Ionicons
                    name={keysPickedUp ? "checkbox" : "checkbox-outline"}
                    size={24}
                    color="black"
                  />
                  <Text>Keys Picked Up</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.checkboxContainer}
                  onPress={() => {
                    setKeysDroppedOff(!keysDroppedOff);
                    setKeysPickedUp(false);
                  }}
                >
                  <Ionicons
                    name={keysDroppedOff ? "checkbox" : "checkbox-outline"}
                    size={24}
                    color="black"
                  />
                  <Text>Keys Dropped Off</Text>
                </TouchableOpacity>
              </View>
              {/* Add Save button here */}
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
    flexDirection: 'row', // Change this back to 'row'
    justifyContent: 'space-between',
    alignItems: 'center', // Change this back to 'center'
    paddingVertical: 10,
  },
  options: {
    flexDirection: 'column', // Change this from 'row' to 'column'
    justifyContent: 'flex-start', // Change this from 'space-between' to 'flex-start'
    alignItems: 'flex-start', // Change this from 'center' to 'flex-start'
    marginBottom: 10, // Add this line
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10, // Add this line
  },
  saveButton: {
    backgroundColor: 'orange',
    padding: 4, // Change this back to 10
    borderRadius: 20, // Add this line
    alignSelf: 'flex-end', // Change this from 'flex-start' to 'flex-end'
    flex: 0.5, // Add this line
  },
  saveButtonText: {
    color: 'white',
    fontSize: 22, // Increase this from default to 18
    textAlign: 'center', // Add this line
  },
});

export default ActiveReservations;
