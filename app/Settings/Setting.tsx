import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import PencilIcon from "@/components/PencilIcon";
import LockIcon from "@/components/LockIcon";
import ArrowIcon from "@/components/ArrowIcon"; // Import Arrow Icon component
import SignoutIcon from '@/components/SignoutIcon'; // Import the SignoutIcon component

const SettingsPage = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/(tabs)/Account')}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Settings</Text>
        {/* Replace home button with SignoutIcon */}
        <TouchableOpacity onPress={() => router.push('/(tabs)/Home')}>
          <SignoutIcon style={styles.signoutIcon} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.item} onPress={() => router.push('/Settings/Info')}>
        <PencilIcon size={30} />
        <Text style={styles.itemText}>Edit Profile</Text>
        <ArrowIcon size={30} /> 
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => router.push('/Settings/ChangePassword')}>
        <LockIcon size={30} />
        <Text style={styles.itemText}>Change Password</Text>
        <ArrowIcon size={30} /> 
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
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 50,
  },
  backButton: {
    marginTop:60,
    fontSize: 35,
  },
  homeButton:{
    marginTop:60,
    fontSize :35,
  },
  title:{
    marginTop:60,
    fontSize :40,
    fontWeight :'bold'
  },
  item:{
    flexDirection:'row',
    alignItems:'center',
    paddingVertical :15,
    borderBottomWidth: 0, // Remove lines
  },
  itemText:{
    fontSize :20,
    marginLeft :10,
    flex: 1,
    fontWeight:'bold', // Add this to make text take up all available space
  },
  signoutIcon: {
    fontSize: 35,
    marginTop: 60,
  },
});

export default SettingsPage;
