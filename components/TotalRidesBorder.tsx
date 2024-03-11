import * as React from "react";
import Svg, { SvgProps, G, Rect, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const TotalRidesBorder = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={187}
    height={119}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Rect
        width={173}
        height={105}
        x={7}
        y={5}
        stroke="#0081AC"
        strokeOpacity={0.7}
        strokeWidth={2}
        rx={19}
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default TotalRidesBorder;
