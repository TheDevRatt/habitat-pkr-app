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
      <View className={`px-4 py-2 rounded bg-white ${className}`}>
        <Text className="text-black text-center">{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
