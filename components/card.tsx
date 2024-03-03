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
    <TouchableOpacity onPress={handlePress}>
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
    backgroundColor: "#D3F0FA", // Light pastel blue background color
    marginTop: 10,
    height: 167,
    width: 326,
    borderRadius: 22,
    fontFamily: "karlaR", // Assuming this is the font you want to use
  },
  selected: {
    shadowColor: "#FFA500", // Orange color
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    borderWidth: 2, // You can adjust the border width
    borderColor: "#FFA500", // Orange color
  },
});

export default Card;
