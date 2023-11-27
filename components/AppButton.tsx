// Imports
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { twMerge } from "tailwind-merge";

// Defining the types of props to be used
interface ButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  className?: string;
  icon?: React.ReactNode;
}

// Destructuring the props and merging the classNames together so that you can override or add to the default button styling.
export default function AppButton({
  children,
  onPress,
  className,
  icon,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={twMerge("bg-white rounded-3xl", className)}
      {...props}
    >
      {icon && <View className="mr-2">{icon}</View>}
      <Text className="text-center text-black text-[30px] font-Karla_400Regular">
        {children}
      </Text>
    </TouchableOpacity>
  );
}
