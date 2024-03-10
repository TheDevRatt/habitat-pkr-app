import React, { useState } from "react";
import { View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const PronounSelector = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "She/Her/Hers", value: "she/her/hers" },
    { label: "He/Him/His", value: "he/him/his" },
    { label: "They/Them/Theirs", value: "they/them/theirs" },
    { label: "Other", value: "other" },
  ]);

  return (
    <View>
      <DropDownPicker
        open={open}
        value={pronouns}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Select your pronouns"
        style={{ borderWidth: 1, backgroundColor: "transparent", zIndex: 3000 }}
        dropDownContainerStyle={{
          borderWidth: 1,
          backgroundColor: "#fff",
        }}
      />
    </View>
  );
};

export default PronounSelector;
