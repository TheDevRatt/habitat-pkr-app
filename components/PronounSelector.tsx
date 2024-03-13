import React, { useState, Dispatch, SetStateAction } from "react";
import { View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

interface PronounSelectorProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const PronounSelector: React.FC<PronounSelectorProps> = ({
  value,
  setValue,
}) => {
  const handleValueChange = (selectedValue: any) => {
    setValue(selectedValue);
  };
  const [open, setOpen] = useState(false);
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
        value={value}
        onChangeValue={handleValueChange}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder="Select your pronouns"
        style={{
          borderWidth: 1,
          backgroundColor: "transparent",
          zIndex: 3000,
          borderTopColor: "transparent",
          borderLeftColor: "transparent",
          borderRightColor: "transparent",
          borderRadius: 0,
        }}
        dropDownContainerStyle={{
          borderWidth: 1,
          backgroundColor: "#fff",
        }}
      />
    </View>
  );
};

export default PronounSelector;
