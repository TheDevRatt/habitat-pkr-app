import { Text, View } from "react-native";
import EditScreenInfo from "../components/EditScreenInfo";
export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="font-Karla_800ExtraBold_Italic text-3xl ">Index</Text>
      <View className="w-5/6 my-30" />
      <EditScreenInfo path="app/index.tsx" />
    </View>
  );
}
