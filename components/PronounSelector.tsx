import React, { useState } from "react";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";

const PronounSelector = () => {
  const [selectedPronoun, setSelectedPronoun] = useState("");

  return (
    <View>
      <Picker
        selectedValue={selectedPronoun}
        onValueChange={(itemValue, itemIndex) => setSelectedPronoun(itemValue)}
      >
        <Picker.Item label="" value="" />
        <Picker.Item label="She/her/Hers" value="she/her/hers" />
        <Picker.Item label="He/Him/His" value="he/him/his" />
        <Picker.Item label="They/Them/Theirs" value="they/them/theirs" />
        <Picker.Item label="Other" value="other" />
      </Picker>
    </View>
  );
};

export default PronounSelector;
