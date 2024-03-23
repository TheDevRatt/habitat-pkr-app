import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const LockIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <Path
      fill="#231F20"
      d="M21.25 10H20V7.638a5 5 0 0 0-10 0V10H8.75A3.75 3.75 0 0 0 5 13.75v10a3.75 3.75 0 0 0 3.75 3.75h12.5A3.75 3.75 0 0 0 25 23.75v-10A3.75 3.75 0 0 0 21.25 10ZM12.5 7.638A2.575 2.575 0 0 1 15 5a2.575 2.575 0 0 1 2.5 2.638V10h-5V7.638Zm10 16.112A1.25 1.25 0 0 1 21.25 25H8.75a1.25 1.25 0 0 1-1.25-1.25v-10a1.25 1.25 0 0 1 1.25-1.25h12.5a1.25 1.25 0 0 1 1.25 1.25v10Z"
    />
    <Path
      fill="#231F20"
      d="M15 15a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Zm0 5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z"
    />
  </Svg>
);
export default LockIcon;
