import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const PencilIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={19}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="m14.25 0-2.375 2.375 4.75 4.75L19 4.75 14.25 0ZM9.5 4.75 0 14.25V19h4.75l9.5-9.5L9.5 4.75Z"
    />
  </Svg>
);
export default PencilIcon;
