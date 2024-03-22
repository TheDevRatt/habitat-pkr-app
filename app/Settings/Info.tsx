import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Assuming you're using Ionicons
import { useRouter } from 'expo-router';
import { auth, db } from "@/firebase"; // Import the auth and db objects
import { getDoc, doc, updateDoc } from "firebase/firestore"; // Import Firestore functions

const Info = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    pronouns: '',
  });
  const [editedUserInfo, setEditedUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    pronouns: '',
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
          setUserInfo({
            firstName: userData.FirstName || '',
            lastName: userData.LastName || '',
            email: userData.Email || '',
            pronouns: userData.Pronouns || '',
          });
          setEditedUserInfo({
            firstName: userData.FirstName || '',
            lastName: userData.LastName || '',
            email: userData.Email || '',
            pronouns: userData.Pronouns || '',
          });
        }
      }
    };

    fetchUserData();
  }, []);

  const handleConfirmChanges = async () => {
    console.log('Confirming changes');
    const user = auth.currentUser;
    if (user) {
      const userDocRef = doc(db, "users", user.uid);
      try {
        await updateDoc(userDocRef, editedUserInfo);
        console.log('User information updated successfully');
        Alert.alert('Changes Saved', 'Your information has been updated successfully.');
      } catch (error) {
        console.error('Error updating user information:', error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/tabs/settings')} style={styles.backButton}>
          <Icon name="arrow-back" size={30} /> 
        </TouchableOpacity>
        <Text style={styles.title}>My Info</Text>
        <TouchableOpacity onPress={() => router.push('/tabs/home')} style={styles.homeButton}>
          <Icon name="home" size={30} /> 
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.infoContainer}>
        <Text style={styles.infoKey}>First Name</Text>
        <TextInput
          style={styles.input}
          value={editedUserInfo.firstName}
          onChangeText={(value) => setEditedUserInfo({ ...editedUserInfo, firstName: value })}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.infoContainer}>
        <Text style={styles.infoKey}>Last Name</Text>
        <TextInput
          style={styles.input}
          value={editedUserInfo.lastName}
          onChangeText={(value) => setEditedUserInfo({ ...editedUserInfo, lastName: value })}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.infoContainer}>
        <Text style={styles.infoKey}>Pronouns</Text>
        <TextInput
          style={styles.input}
          value={editedUserInfo.pronouns}
          onChangeText={(value) => setEditedUserInfo({ ...editedUserInfo, pronouns: value })}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.infoContainer}>
        <Text style={styles.infoKey}>Email</Text>
        <TextInput
          style={styles.input}
          value={editedUserInfo.email}
          onChangeText={(value) => setEditedUserInfo({ ...editedUserInfo, email: value })}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={handleConfirmChanges} style={styles.confirmButton}>
        <Text style={styles.confirmButtonText}>Save Changes</Text>
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
    marginBottom: 50,
  },
  backButton: {
    position: 'absolute', 
    left: 0,
  },
  homeButton: {
    position: 'absolute', 
    right: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  infoKey: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    fontSize: 20,
    flex: 1,
  },
  confirmButton: {
    backgroundColor: 'orange',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default Info;
