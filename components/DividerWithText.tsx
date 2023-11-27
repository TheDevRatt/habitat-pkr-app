import React from "react";
import { View, Text } from "react-native";

const DividerWithText = () => {
  return (
    <View className="flex-row items-center justify-center my-[41px]">
      <View className="flex-1 h-px bg-black mx-2" />
      <Text className="px-2 text-sm text-black mx-2">or continue with</Text>
      <View className="flex-1 h-px bg-black mx-2" />
    </View>
  );
};
export default DividerWithText;
