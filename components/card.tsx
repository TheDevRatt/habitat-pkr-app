import React, { ReactNode, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

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
      <View
        style={[styles.containerStyle, selectedStyle]}
        className="items-center bg-light-pastel-blue mt-10 h-[167px] w-[326px] rounded-[22px] font-Karla_400Regular"
      >
        {children}
      </View>
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
