import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const BookingIconActive = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={78}
    height={77}
    fill="none"
    style={{ marginTop: 10 }}
    {...props}
  >
    <G clipPath="url(#a)" filter="url(#b)">
      <Path
        fill="#fff"
        d="M22.333 26.5h-4.166v29.166a4.179 4.179 0 0 0 4.166 4.167H51.5v-4.166H22.333V26.5Zm33.334-8.334h-25a4.179 4.179 0 0 0-4.167 4.167v25a4.179 4.179 0 0 0 4.167 4.167h25a4.179 4.179 0 0 0 4.166-4.167v-25a4.179 4.179 0 0 0-4.166-4.166Zm-2.084 18.75H32.75V32.75h20.833v4.166ZM45.25 45.25h-12.5v-4.167h12.5v4.167Zm8.333-16.667H32.75v-4.166h20.833v4.166Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M14 14h50v50H14z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default BookingIconActive;
