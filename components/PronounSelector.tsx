import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Text } from "@/components/Themed";

interface PronounSelectorProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  editable?: boolean;
}

const PronounSelector: React.FC<PronounSelectorProps> = ({
  value,
  setValue,
  editable = true,
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

  useEffect(() => {
    if (!editable) {
      setOpen(false); // Automatically close the picker if edit mode is disabled
    }
  }, [editable]);

  return (
    <View>
      {editable ? (
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Select your pronouns"
          style={{
            borderWidth: 0,
            borderBottomWidth: 1,
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
      ) : (
        // Display the selected value as text if not editable
        <Text style={{ borderBottomWidth: 1, padding: 16 }}>
          {items.find((item) => item.value === value)?.label ||
            "Select your pronouns"}
        </Text>
      )}
    </View>
  );
};

export default PronounSelector;
