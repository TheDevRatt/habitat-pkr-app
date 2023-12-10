import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
  Modal,
  Button,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AppButton from "../../components/AppButton";
import { SelectList } from "react-native-dropdown-select-list";
import { Link } from "expo-router";

const handleButtonPress = () => console.log("Button Pressed!");
const handleTermsPress = () => console.log("Terms and conditions pressed");

const pronouns = [
  "",
  "she/her/hers",
  "he/him/his",
  "they/them/theirs",
  "other",
];

const SignUp = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(
    pronouns.map((pronoun) => ({ label: pronoun, value: pronoun }))
  );
  const [selectedPronoun, setSelectedPronoun] = useState();

  const data = pronouns.map((pronoun, index) => ({
    key: index.toString(),
    value: pronoun,
  }));

  return (
    <LinearGradient
      colors={["#FFFFFF", "#0099CC"]}
      start={{ x: 1, y: 0.3 }}
      className="h-full"
    >
      <SafeAreaView className="m-5">
        <View className="mt-10 ml-2">
          <Text className="font-Karla_500Medium text-[40px]">Welcome</Text>
        </View>
        <View className="mt-8 mx-4 space-y-7">
          <TextInput
            placeholder={"First Name"}
            placeholderTextColor="#000"
            className="font-Karla_400Regular py-2 border-b text-[22px]"
          />
          <TextInput
            placeholder={"Last Name"}
            placeholderTextColor="#000"
            className="font-Karla_400Regular py-2 border-b text-[22px]"
          />
          <TextInput
            placeholder={"Email"}
            placeholderTextColor="#000"
            className="font-Karla_400Regular py-2 border-b text-[22px]"
          />
          <View className="flex-row items-center border-b w-90">
            <TextInput
              secureTextEntry={true}
              placeholder={"Password"}
              placeholderTextColor="#000"
              className="font-Karla_400Regular flex-1 py-2 text-[22px]"
            />
            <FontAwesome name={"eye"} size={28} />
          </View>
          <TextInput
            keyboardType="numeric"
            placeholder={"Phone Number"}
            placeholderTextColor="#000"
            className="font-Karla_400Regular py-2 border-b text-[22px]"
          />
        </View>

        <View className="min-h-0 z-30 w-40 ml-4 mt-10 flex-row">
          <TextInput
            keyboardType="numeric"
            placeholder={"Age"}
            placeholderTextColor="#000"
            className="font-Karla_400Regular w-24 mr-24 py-2 border-b text-2xl"
          />

          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
        </View>

        <View className="mt-10 mx-4">
          <AppButton
            className="flex-initial w-[350px] h-[55px] justify-center"
            onPress={handleButtonPress}
          >
            Create An Account
          </AppButton>
        </View>

        <View className="m-5">
          <Text className="font-Karla_300Light text-[15px] text-center">
            By clicking 'Create Account' you agree to Habitat PKR's{" "}
            <Text
              className="underline font-Karla_300Light text-[15px]"
              onPress={handleTermsPress}
            >
              terms and conditions
            </Text>
          </Text>
        </View>

        <View className="flex-row justify-center mt-8">
          <Text className="font-Karla_400Regular text-xl">
            Already have an account?
          </Text>
          <Link href={"/onboarding/logIn"} asChild>
            <TouchableOpacity>
              <Text className="font-Karla_700Bold text-xl text-link-blue underline">
                {" "}
                Log in
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SignUp;
