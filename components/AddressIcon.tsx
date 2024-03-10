import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const AddressIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      fill="#8D8D8D"
      d="M29.464 0H2.68A2.68 2.68 0 0 0 0 2.679V22.32A2.68 2.68 0 0 0 2.679 25h26.785a2.68 2.68 0 0 0 2.679-2.679V2.68A2.68 2.68 0 0 0 29.464 0Zm0 22.321H2.68V2.68h26.785V22.32ZM11.607 12.5a3.575 3.575 0 0 0 3.572-3.571 3.575 3.575 0 0 0-3.572-3.572A3.575 3.575 0 0 0 8.036 8.93a3.575 3.575 0 0 0 3.571 3.571Zm-5 7.143h10c.692 0 1.25-.48 1.25-1.072V17.5c0-1.775-1.68-3.214-3.75-3.214-.602 0-1.043.446-2.5.446-1.501 0-1.864-.446-2.5-.446-2.07 0-3.75 1.44-3.75 3.214v1.071c0 .592.558 1.072 1.25 1.072ZM20.09 16.07h6.25c.246 0 .447-.2.447-.446v-.893c0-.245-.201-.446-.447-.446h-6.25c-.245 0-.446.2-.446.446v.893c0 .245.2.446.446.446Zm0-3.571h6.25c.246 0 .447-.2.447-.446v-.893c0-.246-.201-.447-.447-.447h-6.25c-.245 0-.446.201-.446.447v.893c0 .245.2.446.446.446Zm0-3.571h6.25c.246 0 .447-.201.447-.447V7.59c0-.245-.201-.446-.447-.446h-6.25c-.245 0-.446.2-.446.446v.893c0 .246.2.447.446.447Z"
    />
  </Svg>
);
export default AddressIcon;