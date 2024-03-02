import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const UserReservation = () => {
  const [selectedTab, setSelectedTab] = useState('Current');

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        My Reservations
      </Text>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity 
          style={selectedTab === 'Current' ? styles.tabSelected : styles.tab}
          onPress={() => setSelectedTab('Current')}
        >
          <Text style={styles.tabText}>Current</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={selectedTab === 'Previous' ? styles.tabSelected : styles.tab}
          onPress={() => setSelectedTab('Previous')}
        >
          <Text style={styles.tabText}>Previous</Text>
        </TouchableOpacity>
      </View>

      {/* Content based on selected tab */}
      {selectedTab === 'Current' && (
        <View>
          {/* Current reservations content */}
        </View>
      )}
      {selectedTab === 'Previous' && (
        <View>
          {/* Previous reservations content */}
        </View>
      )}
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
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'orange',
  },
  tabSelected: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  tabText: {
    fontSize: 20,
    color: 'black',
  },
});

export default UserReservation;
