import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { TouchableOpacity } from "react-native";

// Add an onPress prop to the component props
const CheckmarkIcon = ({
  onPress,
  ...props
}: SvgProps & { onPress: () => void }) => (
  <TouchableOpacity onPress={onPress}>
    <Svg width={30} height={31} fill="none" {...props}>
      <Path
        fill="#34A853"
        d="M14.999 2.502a12.493 12.493 0 0 0-11.548 7.723 12.519 12.519 0 0 0 2.71 13.633 12.496 12.496 0 0 0 21.338-8.846 12.517 12.517 0 0 0-3.661-8.846 12.5 12.5 0 0 0-8.839-3.664Zm0 22.518a9.994 9.994 0 0 1-9.239-6.178A10.015 10.015 0 0 1 7.928 7.935a9.998 9.998 0 0 1 17.071 7.077c0 2.654-1.053 5.2-2.929 7.076A9.996 9.996 0 0 1 15 25.02Z"
      />
      <Path
        fill="#34A853"
        d="m18.375 10.496-4.726 6.255-2.037-2.64a1.252 1.252 0 1 0-1.975 1.539l3.037 3.89a1.25 1.25 0 0 0 1.976-.012l5.712-7.506a1.26 1.26 0 0 0-1.168-2.01c-.33.044-.63.218-.832.484h.013Z"
      />
    </Svg>
  </TouchableOpacity>
);

export default CheckmarkIcon;
