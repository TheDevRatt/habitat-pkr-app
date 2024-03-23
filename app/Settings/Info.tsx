import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Keyboard } from 'react-native'; 
import Icon from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { auth, db } from "@/firebase";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import SignoutIcon from '@/components/SignoutIcon'; 

const Info = () => {
  const [userInfo, setUserInfo] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Phone: '',
    Pronouns: '',
  });
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          const selectedData = {
            FirstName: userData.FirstName,
            LastName: userData.LastName,
            Email: userData.Email,
            Phone: userData.Phone,
            Pronouns: userData.Pronouns,
          };
          setUserInfo(selectedData);
        }
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (field, value) => {
    setUserInfo({ ...userInfo, [field]: value });
  };

  const handleConfirmChanges = async () => {
    const user = auth.currentUser;
    if (user) {
      const userDocRef = doc(db, "users", user.uid);
      try {
        await updateDoc(userDocRef, userInfo);
        Alert.alert('Success', 'Your changes have been saved successfully');
      } catch (error) {
        Alert.alert('Error', 'An error occurred while saving your changes');
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/(tabs)/Account')} style={styles.backButton}>
          <Icon name="arrow-back" size={30} /> 
        </TouchableOpacity>
        <Text style={styles.title}>My Info</Text>
        {/* Use SignoutIcon for the home button */}
        <TouchableOpacity onPress={() => router.push('/(tabs)/Home')} style={styles.homeButton}>
          <SignoutIcon />
        </TouchableOpacity>
      </View>

      {Object.keys(userInfo).map((key) => (
        <View key={key} style={styles.infoContainer}>
          <Text style={styles.infoKey}>{key.toUpperCase()}</Text>
          <TextInput
            style={styles.input}
            value={userInfo[key]}
            onChangeText={(value) => handleInputChange(key, value)}
            placeholder="Edit here..."
            editable={true}
            placeholderTextColor='gray'
            selectionColor='black'
            multiline={true}
            blurOnSubmit={true} // Add this line
            onSubmitEditing={Keyboard.dismiss}          
          />
        </View>
      ))}
      <TouchableOpacity onPress={handleConfirmChanges} style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Confirm Changes</Text>
      </TouchableOpacity>
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
    alignItems: 'center',
    justifyContent: 'space-between', 
    marginBottom: 50,
  },

  title: {
    marginTop:50,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  infoContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginBottom:40,
  },
  infoKey: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'grey',
  },
  input: {
    fontSize: 20,
    color: 'black',
    marginRight:60,
    marginTop:20,
    height:20,
  },
  confirmButton: {
    backgroundColor: 'orange',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default Info;

