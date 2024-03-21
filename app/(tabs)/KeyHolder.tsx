import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; // Use useRouter instead of useNavigation
import { auth } from "@/firebase"; // Import the auth object
import { isKeyholder } from '../classes/KeyHolder.js'; // Import the isKeyholder function

const KeyHolder = () => {
  const router = useRouter(); // Use router instead of navigation
  const [isKeyholderStatus, setIsKeyholderStatus] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, get the uid
        const uid = user.uid;

        isKeyholder(uid)
          .then((result) => {
            setIsKeyholderStatus(result);
          })
          .catch((error) => {
            console.error("Error checking keyholder status:", error);
          });
      } else {
        // No user is signed in
        // Handle this case as needed in your app
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const navigateToAllReservations = () => {
    router.push('/KeyHolder/AllReservations'); // Use router.push instead of navigation.navigate
  };

  const navigateToActiveReservations = () => {
    router.push('/KeyHolder/ActiveReservations'); // Use router.push instead of navigation.navigate
  };

  const navigateToDamageReport = () => {
    router.push('/KeyHolder/DamageReport'); // Use router.push instead of navigation.navigate
  };

  if (isKeyholderStatus === null) {
    // The isKeyholder status is still loading
    return <Text>Loading...</Text>;
  } else if (isKeyholderStatus === false) {
    // The user is not a keyholder
    return <Text>You must be a keyholder to view this page.</Text>;
  } else {
    // The user is a keyholder
    // Render the keyholder page
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
  }
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
