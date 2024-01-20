import React, { ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <View
      style={styles.containerStyle}
      className="items-center bg-light-pastel-blue mt-10 h-40 w-[85%] rounded-[22px] font-Karla_400Regular"
    >
      {children}
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
  },
});

export default Card;
