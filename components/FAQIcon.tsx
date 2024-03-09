import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const FAQIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={31}
    fill="none"
    {...props}
  >
    <Path
      stroke="#8D8D8D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.981}
      d="M13.5 29.616c6.904 0 12.5-6.286 12.5-14.039S20.404 1.539 13.5 1.539 1 7.824 1 15.577s5.596 14.039 12.5 14.039Z"
    />
    <Path
      stroke="#8D8D8D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.981}
      d="M9.75 11.365c0-4.913 6.875-4.913 6.875 0 0 3.51-3.125 2.808-3.125 7.02M13.5 24.013l.012-.015"
    />
  </Svg>
);
export default FAQIcon;
