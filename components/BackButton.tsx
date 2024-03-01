import * as React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import { useRouter } from "expo-router"; // Import useRouter from expo-router
import { verticalScale } from "@/constants/Metrics";

const BackButton = (props: any) => {
  const router = useRouter(); // Use useRouter hook to get router object

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => router.back()}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    >
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={26}
        height={16}
        fill="transparent" // Set fill to 'transparent'
        {...props}
      >
        <Path
          fill="#000"
          d="M.293 7.293a1 1 0 0 0 0 1.414l6.364 6.364a1 1 0 0 0 1.414-1.414L2.414 8l5.657-5.657A1 1 0 0 0 6.657.93L.293 7.293ZM26 7H1v2h25V7Z"
        />
      </Svg>
    </TouchableOpacity>
  );
};

// Adjusted StyleSheet
const styles = StyleSheet.create({
  button: {
    backgroundColor: "transparent",
  },
});

export default BackButton;
