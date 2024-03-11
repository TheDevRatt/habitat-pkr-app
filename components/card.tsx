import React, { ReactNode, useState } from "react";
import { StyleSheet } from "react-native";
import { Text, View, TouchableOpacity } from "@/components/Themed";

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    setIsSelected(!isSelected);
  };

  const selectedStyle = isSelected ? styles.selected : null;

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{ backgroundColor: "transparent" }}
    >
      <View style={[styles.containerStyle, selectedStyle]}>{children}</View>
    </TouchableOpacity>
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
    height: 167,
    width: 326,
    borderRadius: 22,
    fontFamily: "karlaR",
  },
  selected: {
    shadowColor: "#E55D25",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 6,
    borderWidth: 2,
    borderColor: "transparent",
  },
});

export default Card;
