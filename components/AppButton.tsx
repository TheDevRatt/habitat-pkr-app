// Imports
import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View, TouchableOpacity } from "@/components/Themed";
import { FontAwesome5 } from "@expo/vector-icons";

// Defining the types of props to be used
interface ButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  className?: string;
  icon?: string; // Change this to accept a FontAwesome icon name
  backgroundColor?: string;
  borderColor?: string;
  widthPercentage?: number;
  borderWidth?: number;
  borderRadius?: number;
  paddingVertical?: number;
  textStyle?: object;
  borderStyle?: "solid" | "dotted" | "dashed" | undefined;
  textColor?: string; // Add a new prop for text color
}

// Destructuring the props and merging the classNames together so that you can override or add to the default button styling.
export default function AppButton({
  children,
  onPress,
  icon,
  backgroundColor = "white",
  borderColor = "none",
  widthPercentage = 88,
  borderWidth = 0,
  borderRadius = 20,
  paddingVertical = 8,
  borderStyle = undefined,
  textColor = "black", // Set default text color to black
  ...props
}: ButtonProps) {
  const screenWidth = Dimensions.get("window").width;
  const width = (screenWidth * widthPercentage) / 100;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor,
          borderColor,
          borderStyle,
          width,
          borderWidth,
          borderRadius,
          paddingVertical,
        },
      ]}
      onPress={onPress}
      {...props}
    >
      <View style={styles.buttonContent}>
        {icon && (
          <FontAwesome5
            name={icon}
            // Increase the size if the icon is 'apple' because font-awesome for some reason makes it smaller
            size={icon === "apple" ? 32 : 24}
            color={textColor} // Use the textColor prop for icon color as well
            style={styles.icon}
          />
        )}
        <Text style={[styles.text, { color: textColor }]}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  icon: {
    marginRight: 10,
    backgroundColor: "transparent",
  },
  button: {
    paddingVertical: 8,
  },
  text: {
    textAlign: "center",
    fontSize: 30,
    fontFamily: "karlaR",
  },
});
