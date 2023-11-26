import { StyleSheet, Image } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

import PKRLogo from "@/components/PKRLogo";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <PKRLogo />
      <Text>Index</Text>
      <EditScreenInfo path="app/index.tsx" />
    </View>
  );
}
