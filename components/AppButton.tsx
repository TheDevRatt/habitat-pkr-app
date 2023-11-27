import React from "react";
import { TouchableOpacity, Text, GestureResponderEvent } from "react-native";
import { View } from "../components/Themed";

// Define the types for your Button props
interface ButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  className?: string;
  children: React.ReactNode;
}

// Your Button component
const Button: React.FC<ButtonProps> = ({
  onPress,
  className = "",
  children,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View className={`px-32 py-3 rounded-full bg-white ${className}`}>
        <Text className="text-black text-center font-Karla_400Regular text-2xl ">{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;