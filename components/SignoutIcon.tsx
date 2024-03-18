import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router"; // Import useRouter from expo-router
import { verticalScale } from "@/constants/Metrics";
import { signOutUser } from "../app/classes/UserUtils";

const SignoutIcon = (props: any) => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOutUser();
      router.push("/"); // Navigate to the home screen after signing out
    } catch (error) {
      // Handle error if sign out failed
      console.error(error);
    }
  };

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={handleLogout}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    >
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={27}
        height={29}
        fill="none"
        {...props}
      >
        <Path
          fill="#000"
          d="M5.063 26.4h10.125c.447-.001.876-.184 1.192-.509a1.76 1.76 0 0 0 .495-1.225v-2.6h-1.688v2.6H5.063V3.87h10.125v2.6h1.687v-2.6c0-.46-.178-.9-.495-1.225a1.667 1.667 0 0 0-1.192-.508H5.062c-.447 0-.876.183-1.192.508a1.76 1.76 0 0 0-.495 1.225v20.796c0 .46.178.9.495 1.225.316.325.745.508 1.192.509Z"
        />
        <Path
          fill="#000"
          d="m17.37 18.242 3.025-3.107H8.438v-1.733h11.957l-3.026-3.108 1.194-1.225 5.062 5.2-5.063 5.198-1.193-1.225Z"
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

export default SignoutIcon;
