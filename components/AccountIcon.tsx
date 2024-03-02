import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const AccountIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#100F0F"
        d="M24.833 8C13.333 8 4 17.333 4 28.833c0 11.5 9.333 20.834 20.833 20.834 11.5 0 20.834-9.334 20.834-20.834S36.333 8 24.833 8Zm0 6.25a6.242 6.242 0 0 1 6.25 6.25 6.242 6.242 0 0 1-6.25 6.25 6.242 6.242 0 0 1-6.25-6.25 6.242 6.242 0 0 1 6.25-6.25Zm0 29.583c-5.208 0-9.812-2.666-12.5-6.708.063-4.146 8.334-6.417 12.5-6.417 4.146 0 12.438 2.271 12.5 6.417-2.687 4.042-7.291 6.708-12.5 6.708Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h50v50H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default AccountIcon;
