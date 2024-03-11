import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const HomeIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    style={{ marginTop: 10 }}
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#100F0F"
        d="M25 6.25 8.333 18.75v25H18.75V29.167h12.5V43.75h10.416v-25L25 6.25Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h50v50H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default HomeIcon;
