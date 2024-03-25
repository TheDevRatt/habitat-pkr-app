import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";
import { TouchableOpacity } from "react-native";

const XIcon = ({ onPress, ...props }: SvgProps & { onPress: () => void }) => (
  <TouchableOpacity onPress={onPress}>
    <Svg width={25} height={25} fill="none" {...props}>
      <Circle cx={12.5} cy={12.5} r={11.5} stroke="#EA4335" strokeWidth={2} />
      <Path
        fill="#EA4335"
        d="m14.157 12.21 4.166-4.158a.973.973 0 1 0-1.376-1.376l-4.157 4.167-4.157-4.167a.973.973 0 0 0-1.376 1.376l4.167 4.157-4.167 4.157a.968.968 0 0 0 0 1.376.97.97 0 0 0 1.376 0l4.157-4.166 4.157 4.166a.968.968 0 0 0 1.376 0 .97.97 0 0 0 0-1.376l-4.166-4.157Z"
      />
    </Svg>
  </TouchableOpacity>
);
export default XIcon;
