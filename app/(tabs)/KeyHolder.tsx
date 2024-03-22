import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; 
import { auth } from "@/firebase"; 
import { isKeyholder } from '../classes/KeyHolder.js'; 

const KeyHolder = () => {
  const router = useRouter(); 
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
      }
    });

   
    return () => unsubscribe();
  }, []);

  const navigateToAllReservations = () => {
    router.push('/KeyHolder/AllReservations'); 
  };

  const navigateToActiveReservations = () => {
    router.push('/KeyHolder/ActiveReservations'); 
  };

  const navigateToDamageReport = () => {
    router.push('/KeyHolder/DamageReport'); 
  };

  if (isKeyholderStatus === null) {
   
    return <Text>Loading...</Text>;
  } else if (isKeyholderStatus === false) {
    // The user is not a keyholder
    return <Text>You must be a keyholder to view this page.</Text>;
  } else {
    // The user is a keyholder
  
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
