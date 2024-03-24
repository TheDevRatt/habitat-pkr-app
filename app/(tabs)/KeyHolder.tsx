import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'; 
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; 
import { auth } from "@/firebase"; 
import { isKeyholder } from '../classes/KeyHolder.js'; 
import OrangeArrowIcon from "@/components/OrangeArrowIcon";
import { verticalScale, horizontalScale, moderateScale } from "@/constants/Metrics";

const KeyHolder = () => {
  const router = useRouter(); 
  const [isKeyholderStatus, setIsKeyholderStatus] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;
        isKeyholder(uid)
          .then((result) => {
            setIsKeyholderStatus(result);
          })
          .catch((error) => {
            console.error("Error checking keyholder status:", error);
          });
      } else {
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
    return <Text>You must be a keyholder to view this page.</Text>;
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Key-holder</Text>
        <TouchableOpacity style={styles.option} onPress={navigateToAllReservations}>
          <Text style={styles.optionText}>All reservations</Text>
          <OrangeArrowIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={navigateToActiveReservations}>
          <Text style={styles.optionText}>Active Reservations</Text>
          <OrangeArrowIcon />
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={navigateToDamageReport}>
          <Text style={styles.optionText}>Damage Reports</Text>
          <OrangeArrowIcon />
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: verticalScale(20),
    paddingHorizontal: horizontalScale(20),
    backgroundColor: '#fff',
    alignItems: 'center', 
  },
  title: {
    fontSize: moderateScale(50),
    fontWeight: 'bold',
    marginBottom: verticalScale(50),
    marginTop: verticalScale(50),
    textAlign: 'center', 
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: verticalScale(15),
    width: '100%', 
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  optionText: {
    fontSize: moderateScale(20),
    fontWeight: 'bold',
  },
});

export default KeyHolder;
