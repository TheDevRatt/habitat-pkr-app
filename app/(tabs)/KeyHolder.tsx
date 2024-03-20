import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; // Use useRouter instead of useNavigation

const KeyHolder = () => {
  const router = useRouter(); // Use router instead of navigation

  const navigateToAllReservations = () => {
    router.push('/KeyHolder/AllReservations'); // Use router.push instead of navigation.navigate
  };

  const navigateToActiveReservations = () => {
    router.push('/KeyHolder/ActiveReservations'); // Use router.push instead of navigation.navigate
  };

  const navigateToDamageReport = () => {
    router.push('/KeyHolder/DamageReport'); // Use router.push instead of navigation.navigate
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Key-holder</Text>
      <TouchableOpacity style={styles.option} onPress={navigateToAllReservations}>
        <Text style={styles.optionText}>All reservations</Text>
        <Ionicons name="chevron-forward" size={24} color="orange" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={navigateToActiveReservations}>
        <Text style={styles.optionText}>Active Reservations</Text>
        <Ionicons name="chevron-forward" size={24} color="orange" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={navigateToDamageReport}>
        <Text style={styles.optionText}>Damage Reports</Text>
        <Ionicons name="chevron-forward" size={24} color="orange" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center', 
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 50,
    marginTop: 50,
    textAlign: 'center', 
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    width: '100%', 
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  optionText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default KeyHolder;
