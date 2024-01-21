import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const TermsAndConditions = () => {
  return (
    <LinearGradient
      colors={['#FFFFFF', '#0099CC']}
      start={{ x: 1, y: 0.3 }}
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 20, fontFamily: 'Karla_500Medium', color: '#0099CC' }}>
        Terms and Conditions
      </Text>
      <View style={{ width: '90%', backgroundColor: '#FFFFFF', padding: 30, borderRadius: 10, borderWidth: 1, borderColor: '#0099CC' }}>
        <ScrollView>
          <Text style={{ fontSize: 20, fontFamily: 'Karla_400Regular', color: '#000' }}>
            General Site Usage
            {"\n"}
            Last Revised: December 16, 2013
            {"\n\n"}
            Welcome to www.lorem-ipsum.info. This site is provided as a service to our visitors and may be used for informational purposes only. Because the Terms and Conditions contain legal obligations, please read them carefully.
            {"\n\n"}
            1. YOUR AGREEMENT
            {"\n"}
            By using this Site, you agree to be bound by, and to comply with, these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site.
          </Text>
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default TermsAndConditions;