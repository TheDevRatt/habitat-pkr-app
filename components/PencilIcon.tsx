import * as React from "react";
import Svg, { Path } from "react-native-svg";

const PencilIcon = (props) => (
  <Svg
    width={props.size || 19}
    height={props.size || 19}
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M14.25 0L11.875 2.375L16.625 7.125L19 4.75L14.25 0ZM9.5 4.75L0 14.25V19H4.75L14.25 9.5L9.5 4.75Z" fill={props.color || "black"} />
  </Svg>
);

export default PencilIcon;
