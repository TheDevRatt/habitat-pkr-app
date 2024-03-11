import React, { ReactNode, useState } from "react";
import { StyleSheet, Platform } from "react-native";
import { Text, View, TouchableOpacity } from "@/components/Themed";

interface CardProps {
  children: ReactNode;
  isSelected: boolean;
  onPress: () => void;
}

const Card: React.FC<CardProps> = ({ children, isSelected, onPress }) => {
  const selectedStyle = isSelected ? styles.selected : null;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ backgroundColor: "transparent" }}
    >
      <View style={[styles.shadow, selectedStyle]}>
        <View style={styles.containerStyle}>{children}</View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: "#D3F0FA",
    height: 167,
    width: 326,
    borderRadius: 22,
    fontFamily: "karlaR",
  },
  shadow: {
    marginTop: 10,
    borderRadius: 22,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 1.0,
      },
      android: {
        backgroundColor: "#E55D25",
        marginLeft: 2,
        marginRight: -2,
        marginTop: 2,
        marginBottom: -2,
      },
    }),
  },
  selected: {
    borderColor: "transparent",
    ...Platform.select({
      ios: {
        shadowColor: "#E55D25",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 10,
      },
      android: {
        borderWidth: 2,
        backgroundColor: "#E55D25",
        marginLeft: 2,
        marginRight: -2,
        marginTop: 2,
        marginBottom: -2,
      },
    }),
  },
});

export default Card;
