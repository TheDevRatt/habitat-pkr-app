// Imports
import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { twMerge } from "tailwind-merge";
import { FontAwesome5 } from "@expo/vector-icons";

// Defining the types of props to be used
interface ButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  className?: string;
  icon?: string; // Change this to accept a FontAwesome icon name
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
      <View style={styles.buttonContent}>
        {icon && (
          <FontAwesome5
            name={icon}
            // Increase the size if the icon is 'apple' because font-awesome for some reason makes it smaller
            size={icon === "apple" ? 32 : 24}
            color="black"
            style={styles.icon}
          />
        )}
        <Text
          className={twMerge(
            "text-center text-black text-[30px] font-Karla_400Regular"
          )}
        >
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginRight: 10,
  },
});
