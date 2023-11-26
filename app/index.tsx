import { StyleSheet, Image } from "react-native";

import { Text, View } from "../components/Themed";

import PKRLogo from "@/components/PKRLogo";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <PKRLogo />
      <Text className="text-8xl font-semibold">PKRides</Text>
      <Text className="text-center ">
        By Habitat for Humanity {"\n"} Peterborough & {"\n"} Kawartha Region
      </Text>
    </View>
  );
}
