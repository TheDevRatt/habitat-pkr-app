import React, { ReactNode, useState } from "react";
import { StyleSheet } from "react-native";
import { Text, View, TouchableOpacity, Image } from "@/components/Themed";
import { horizontalScale, moderateScale, verticalScale } from "@/constants/Metrics";
import cameraImg from "@/assets/images/camera.png";


const PaymentCard = () => {

  return (
    <View style={styles.containerStyle}>
      <TouchableOpacity
        style={{ backgroundColor: "transparent" }}
      >
        <View style={styles.cameraIconContainer}>
        <Image source={cameraImg} style={styles.cameraIcon} />
        <Text style={styles.text}>SCAN CARD</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 1.0,
    elevation: 1,
    backgroundColor: "#D3F0FA",
    marginTop: 10,
    height: verticalScale(180),
    width: horizontalScale(325),
    borderRadius: 22,
    fontFamily: "karlaR",
    alignItems:"center",
    justifyContent:"center",
  },
  cameraIcon:{
    backgroundColor:"#ECFAFF",
  },
  cameraIconContainer:{
    padding: moderateScale(10),
    paddingHorizontal: moderateScale(12),
    backgroundColor:"#ECFAFF",
    borderRadius: 10, 
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    alignItems:"center",
    justifyContent:"center",
  },
  text:{
    paddingTop: moderateScale(4),
  }


});

export default PaymentCard;
