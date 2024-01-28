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
import { Link, useRouter } from "expo-router";

const SignUp = () => {
  const pronouns = [
    "",
    "she/her/hers",
    "he/him/his",
    "they/them/theirs",
    "other",
  ];

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(
    pronouns.map((pronoun) => ({ label: pronoun, value: pronoun }))
  );

  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const handleButtonPress = () => console.log("Button Pressed!");
  const handleTermsPress = () => {
    console.log("Navigating to TermsAndConditions");
    router.push("/onboarding/TermsAndConditions");
  };

  return (
    <LinearGradient
      colors={["#FFFFFF", "#0099CC"]}
      start={{ x: 1, y: 0.1 }}
      className="h-full"
    >
      <SafeAreaView className="m-3">
        <View className="mt-4 mx-3">
          <Text className="font-Karla_500Medium text-[40px]">Welcome</Text>
        </View>

        <View className="mt-[25] mx-5 space-y-[9.5%]">
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
              secureTextEntry={!showPassword}
              placeholder={"Password"}
              placeholderTextColor="#000"
              className="font-Karla_400Regular flex-1 py-2 text-[22px]"
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <FontAwesome
                name={showPassword ? "eye-slash" : "eye"}
                size={28}
              />
            </TouchableOpacity>
          </View>
          <TextInput
            keyboardType="numeric"
            placeholder={"Phone Number"}
            placeholderTextColor="#000"
            className="font-Karla_400Regular py-2 border-b text-[22px]"
          />
        </View>

        <View className="flex-row mx-5 mt-[9%]">
          <TextInput
            keyboardType="numeric"
            placeholder={"Age"}
            placeholderTextColor="#000"
            className="font-Karla_400Regular w-[25%] mr-[27%] border-b text-2xl"
          />

          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={{
              backgroundColor: "transparent",
              borderWidth: 0,
              borderBottomWidth: 1,
              borderBottomColor: "black",
              width: "50%",
              right: 0,
            }}
            placeholder="Pronouns"
            textStyle={{ fontSize: 22, bottom: 0 }}
            dropDownContainerStyle={{
              backgroundColor: "rgb(153, 230, 255, 0.9)",
              borderStyle: "solid",
            }}
          />
        </View>

        <View className="mx-3">
          <AppButton
            className="flex mt-12 mb-5 justify-center h-[50]"
            onPress={() => router.push("/onboarding/basicInfo")}
          >
            <Text className="font-Karla_400Regular text-[22]">
              Create Account
            </Text>
          </AppButton>
        </View>

        <View className="m-0">
          <Text className="font-Karla_300Light text-15 text-center">
            By clicking 'Create Account' you agree to Habitat PKR's{" "}
            <Text className="underline" onPress={handleTermsPress}>
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
