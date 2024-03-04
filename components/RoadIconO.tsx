import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const RoadIconO = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={51}
    fill="none"
    {...props}
  >
    <Path
      fill="#E55D25"
      d="m0 50.784 2.187-7.255L0 36.274l13.473 7.255L0 50.784ZM40.938 44.566H16.582a1.036 1.036 0 0 1 0-2.073h24.356a4.664 4.664 0 0 0 0-9.328H8.809a6.736 6.736 0 1 1 0-13.473h24.356a1.037 1.037 0 0 1 0 2.073H8.809a4.664 4.664 0 0 0 0 9.327h32.129a6.737 6.737 0 0 1 0 13.474ZM36.274 18.655a1.036 1.036 0 0 1-1.036-1.036V1.036a1.036 1.036 0 0 1 2.072 0V17.62a1.037 1.037 0 0 1-1.036 1.036Z"
    />
    <Path
      fill="#E55D25"
      d="M36.274 9.328h10.364l-3.11-4.104 3.11-4.187H36.274v8.29ZM36.274 23.837a3.11 3.11 0 1 0 0-6.218 3.11 3.11 0 0 0 0 6.218Z"
    />
  </Svg>
);
export default RoadIconO;
