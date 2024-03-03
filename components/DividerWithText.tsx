import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../constants/Metrics";

const DividerWithText = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>or continue with</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "black",
    marginHorizontal: horizontalScale(10),
  },
  text: {
    fontFamily: "karlaL",
    fontSize: 16,
    color: "black",
    paddingHorizontal: 2,
  },
});

export default DividerWithText;
