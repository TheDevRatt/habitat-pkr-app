import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const HomeIconActive = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={70}
    height={74}
    fill="none"
    style={{ marginTop: 10 }}
    {...props}
  >
    <G clipPath="url(#a)" filter="url(#b)">
      <Path
        fill="#fff"
        d="m35 18.25-16.667 12.5v25H28.75V41.167h12.5V55.75h10.417v-25L35 18.25Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M10 12h50v50H10z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default HomeIconActive;
