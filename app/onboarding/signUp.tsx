import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AppButton from "../../components/AppButton";
import { SelectList } from "react-native-dropdown-select-list";
import { Link } from 'expo-router';

const SignUp = () => {
  const [selected, setSelected] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const data = [
    { key: "1", value: "" },
    { key: "2", value: "she/her/hers" },
    { key: "3", value: "he/him/his" },
    { key: "4", value: "they/them/theirs" },
    { key: "5", value: "other" }
  ];

  return (
    <LinearGradient
      colors={["#FFFFFF", "#0099CC"]}
      start={{ x: 1, y: 0.3 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ margin: 5 }}>
        <View style={{ marginTop: 10, marginLeft: 2 }}>
          <Text style={{ fontFamily: "Karla_500Medium", fontSize: 32 }}>
            Welcome
          </Text>
        </View>
        <View style={{ marginTop: 8, marginHorizontal: 4, marginBottom: 9 }}>
          <TextInput
            placeholder={"First Name"}
            placeholderTextColor="#000"
            style={{ fontFamily: "Karla_400Regular", paddingVertical: 10, borderBottomWidth: 1, fontSize: 20 }}
          />
          <TextInput
            placeholder={"Last Name"}
            placeholderTextColor="#000"
            style={{ fontFamily: "Karla_400Regular", paddingVertical: 10, borderBottomWidth: 1, fontSize: 20 }}
          />
          <TextInput
            placeholder={"Email"}
            placeholderTextColor="#000"
            style={{ fontFamily: "Karla_400Regular", paddingVertical: 10, borderBottomWidth: 1, fontSize: 20 }}
          />
          <View style={{ flexDirection: "row", alignItems: "center", borderBottomWidth: 1, borderBottomColor: "#000" }}>
            <TextInput
              secureTextEntry={!showPassword}
              placeholder={"Password"}
              placeholderTextColor="#000"
              style={{ flex: 1, fontSize: 20 }}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <FontAwesome name={showPassword ? "eye-slash" : "eye"} size={28} />
            </TouchableOpacity>
          </View>
          <TextInput
            keyboardType="numeric"
            placeholder={"Phone Number"}
            placeholderTextColor="#000"
            style={{ fontFamily: "Karla_400Regular", paddingVertical: 10, borderBottomWidth: 1, fontSize: 20 }}
          />
        </View>

        <View style={{ minHeight: 0, zIndex: 30, width: 40, marginLeft: 4, marginTop: 10, flexDirection: "row" }}>
          <TextInput
            keyboardType="numeric"
            placeholder={"Age"}
            placeholderTextColor="#000"
            style={{ fontFamily: "Karla_400Regular", width: 120, marginRight: 24, paddingVertical: 10, borderBottomWidth: 1, fontSize: 20 }}
          />
          <SelectList
            data={data}
            setSelected={setSelected}
            save="value"
            placeholder="Pronouns"
            search={false}
            boxStyles={{ borderColor: 'transparent', borderBottomColor: 'black', borderRadius: 0, width: 167, position: 'absolute' }}
            inputStyles={{ fontSize: 20, paddingLeft: 0 }}
            dropdownStyles={{ borderColor: 'transparent' }}
            dropdownItemStyles={{ zIndex: 50 }}
          />
        </View>

        <View style={{ marginTop: 12, marginHorizontal: 4 }}>
          <AppButton style={{ paddingVertical: 10 }} onPress={() => console.log("Button Pressed!")}>
            Create An Account
          </AppButton>
        </View>

        <View style={{ marginTop: 5, marginHorizontal: 3 }}>
          <Text style={{ textAlign: "center", fontSize: 16, fontFamily: "Karla_300Light" }}>
            By clicking ‘Create Account’ you agree to Habitat PKR
            <TouchableOpacity style={{ paddingTop: 0.5 }}>
              <Text style={{ color: "#0099CC", fontSize: 16, paddingTop: 6, textDecorationLine: "underline", fontFamily: "Karla_300Light" }}>
                {" "}
                terms and conditions
              </Text>
            </TouchableOpacity>
          </Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 8 }}>
          <Text style={{ fontFamily: "Karla_400Regular", fontSize: 20 }}>
            Already have an account?
          </Text>
          <Link href={'/onboarding/logIn'} asChild>
            <TouchableOpacity>
              <Text style={{ fontFamily: "Karla_700Bold", fontSize: 20, color: "#0099CC", textDecorationLine: "underline" }}>
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
