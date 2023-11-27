// index.tsx
import React from "react";
import { Image } from "react-native";

import { Text, View } from "../components/Themed";
import PKRLogo from "@/components/PKRLogo";
import Button from "@/components/AppButton"; // Import the Button component

export default function HomeScreen() {
  const handlePress = () => {
    // Handle the button press event here
    console.log("Button was pressed");
  };

  return (
    <View className="flex-1 items-center bg-white">
      <PKRLogo className="mt-[76px]" />
      <Text className="text-8xl font-semibold italic width-[393px] height-[135px]">
        PKRides
      </Text>
      <Text className="text-center">
        By Habitat for Humanity {"\n"} Peterborough & {"\n"} Kawartha Region
      </Text>
      <Button onPress={handlePress} className="mt-4">
        Click Me
      </Button>
    </View>
  );
}
