import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const BookingIcon = (props: any) => (
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
        d="M8.333 12.5H4.167v29.167a4.179 4.179 0 0 0 4.166 4.166H37.5v-4.166H8.333V12.5Zm33.334-8.333h-25A4.179 4.179 0 0 0 12.5 8.333v25a4.179 4.179 0 0 0 4.167 4.167h25a4.179 4.179 0 0 0 4.166-4.167v-25a4.179 4.179 0 0 0-4.166-4.166Zm-2.084 18.75H18.75V18.75h20.833v4.167ZM31.25 31.25h-12.5v-4.167h12.5v4.167Zm8.333-16.667H18.75v-4.166h20.833v4.166Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h50v50H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default BookingIcon;
