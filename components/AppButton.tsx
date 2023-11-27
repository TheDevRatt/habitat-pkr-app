// Imports
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { twMerge } from "tailwind-merge";

// Defining the types of props to be used
interface ButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  className?: string;
}

// Destructuring the props and merging the classNames together so that you can override or add to the default button styling.
export default function AppButton({
  children,
  onPress,
  className,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={twMerge(" text-black bg-white rounded-full py-2.5 items-center ", className)}
      {...props}
    >
      <Text className="font-Karla_400Regular text-xl">{children}</Text>
    </TouchableOpacity>
  );
}