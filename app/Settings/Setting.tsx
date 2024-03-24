import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import PencilIcon from "@/components/PencilIcon";
import LockIcon from "@/components/LockIcon";
import ArrowIcon from "@/components/ArrowIcon"; 
import SignoutIcon from '@/components/SignoutIcon'; 
import BackButton from '@/components/BackButton'; 
import { horizontalScale, verticalScale, moderateScale } from "@/constants/Metrics"; // Import scaling utilities

const SettingsPage = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/(tabs)/Account')}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Settings</Text>
        <TouchableOpacity onPress={() => router.push('/(tabs)/Home')}>
          <SignoutIcon style={styles.signoutIcon} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.item} onPress={() => router.push('/Settings/Info')}>
        <PencilIcon size={moderateScale(30)} />
        <Text style={styles.itemText}>Edit Profile</Text>
        <ArrowIcon size={moderateScale(30)} /> 
      </TouchableOpacity>

      <TouchableOpacity style={styles.item} onPress={() => router.push('/Settings/ChangePassword')}>
        <LockIcon size={moderateScale(30)} />
        <Text style={styles.itemText}>Change Password</Text>
        <ArrowIcon size={moderateScale(30)} /> 
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: horizontalScale(20),
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: verticalScale(50),
  },
  backButton: {
    marginTop: verticalScale(60),
    fontSize: moderateScale(35),
  },
  homeButton:{
    marginTop: verticalScale(60),
    fontSize: moderateScale(35),
  },
  title:{
    marginTop: verticalScale(60),
    fontSize: moderateScale(40),
    fontWeight :'bold'
  },
  item:{
    flexDirection:'row',
    alignItems:'center',
    paddingVertical: verticalScale(15),
    borderBottomWidth: 0, 
  },
  itemText:{
    fontSize: moderateScale(20),
    marginLeft: moderateScale(10),
    flex: 1,
    fontWeight:'bold', 
  },
  signoutIcon: {
    fontSize: moderateScale(35),
    marginTop: verticalScale(60),
  },
});

export default SettingsPage;
