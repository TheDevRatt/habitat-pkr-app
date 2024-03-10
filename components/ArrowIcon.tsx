import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const ArrowIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={29}
    fill="none"
    {...props}
  >
    <Path
      fill="#8D8D8D"
      d="M10.417 22.227a.975.975 0 0 1-.667-.269 1.153 1.153 0 0 1-.257-.355 1.307 1.307 0 0 1-.073-.893 1.22 1.22 0 0 1 .195-.401l4.666-6.27-4.5-6.283a1.225 1.225 0 0 1-.19-.405 1.308 1.308 0 0 1 .085-.893c.066-.136.155-.255.261-.351.108-.107.235-.187.371-.236a.934.934 0 0 1 .83.095c.125.08.234.187.32.316l5.032 7.02c.153.209.237.471.237.742s-.084.534-.237.743l-5.209 7.02a1.063 1.063 0 0 1-.387.326.943.943 0 0 1-.477.094Z"
    />
  </Svg>
);
export default ArrowIcon;