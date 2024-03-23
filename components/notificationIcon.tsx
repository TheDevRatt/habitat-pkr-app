import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const NotificationIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <Path
      fill="#100F0F"
      d="M25.65 19.013 23.4 16.75v-5.575a8.575 8.575 0 0 0-7.275-8.6A8.425 8.425 0 0 0 6.6 10.913v5.837l-2.25 2.263A2.05 2.05 0 0 0 5.8 22.5H10v.425a4.8 4.8 0 0 0 5 4.575 4.8 4.8 0 0 0 5-4.575V22.5h4.2a2.05 2.05 0 0 0 1.45-3.487Zm-8.15 3.912A2.35 2.35 0 0 1 15 25a2.35 2.35 0 0 1-2.5-2.075V22.5h5v.425ZM6.887 20l1.475-1.475A2.5 2.5 0 0 0 9.1 16.75v-5.837a5.913 5.913 0 0 1 2.025-4.45A5.837 5.837 0 0 1 15.8 5a6.075 6.075 0 0 1 5.1 6.125v5.625a2.5 2.5 0 0 0 .725 1.775L23.113 20H6.887Z"
    />
  </Svg>
);
export default NotificationIcon;
