import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { getAuth, EmailAuthProvider, reauthenticateWithCredential, updatePassword } from 'firebase/auth';
import Icon from 'react-native-vector-icons/Ionicons'; 
import { useRouter } from 'expo-router';
import SignoutIcon from '@/components/SignoutIcon'; 

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const router = useRouter();

  const handleChangePassword = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (newPassword === currentPassword) {
      Alert.alert('Error', 'New password must be different from the current password.');
      return;
    }

    if (user && user.email) {
      const credential = EmailAuthProvider.credential(user.email, currentPassword);

      try {
        await reauthenticateWithCredential(user, credential);
        await updatePassword(user, newPassword);
        Alert.alert('Success', 'Password changed successfully.');
      } catch (error) {
        if (error.code === 'auth/wrong-password') {
          Alert.alert('Error', 'The current password is incorrect.');
        } else {
          Alert.alert('Error', error.message);
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/(tabs)/Account')} style={styles.backButton}>
          <Icon name="arrow-back" size={30} /> 
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Change</Text>
          <Text style={styles.title}>Password</Text>
        </View>
        {/* Use SignoutIcon for the home button */}
        <TouchableOpacity onPress={() => router.push('/(tabs)/Home')} style={styles.homeButton}>
          <SignoutIcon />
        </TouchableOpacity>
      </View>
      
      <View style={styles.inputContainer}>
        <TextInput
          value={currentPassword}
          onChangeText={setCurrentPassword}
          placeholder="Current Password"
          secureTextEntry={!showCurrentPassword}
          style={[styles.inputField, styles.passwordField]}
        />
        <TouchableOpacity onPress={() => setShowCurrentPassword(!showCurrentPassword)} style={styles.eyeIcon}>
          <Icon name={showCurrentPassword ? "eye" : "eye-off"} size={20} /> 
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          value={newPassword}
          onChangeText={setNewPassword}
          placeholder="New Password"
          secureTextEntry={!showNewPassword}
          style={[styles.inputField, styles.passwordField]}
        />
        <TouchableOpacity onPress={() => setShowNewPassword(!showNewPassword)} style={styles.eyeIcon}>
          <Icon name={showNewPassword ? "eye" : "eye-off"} size={20} /> 
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleChangePassword} style={styles.changePasswordButton}>
        <Text style={styles.changePasswordButtonText}>Change Password</Text>
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
    marginTop: 40,
  },
  backButton: {
    position: 'absolute', 
    left: 0,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  homeButton: {
    position: 'absolute', 
    right: 0,
    paddingRight: 10, 
  },
  inputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    marginBottom: 30,
    width: '100%',
  },
  inputField: {
    flex: 3,
  },
  eyeIcon: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  passwordField: {
    fontSize: 20, 
  },
  changePasswordButton: {
    backgroundColor: 'white', 
    padding: 15,
    borderRadius: 30, 
    alignItems: 'center',
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'black', 
  },
  changePasswordButtonText: {
    color: 'black', 
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ChangePassword;

