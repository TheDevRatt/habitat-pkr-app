import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const OrangeArrowIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={34}
    fill="none"
    {...props}
  >
    <Path
      fill="#E55D25"
      d="M12.5 26.673a1.17 1.17 0 0 1-.8-.323 1.385 1.385 0 0 1-.309-.426 1.571 1.571 0 0 1-.088-1.072c.05-.176.128-.34.234-.481l5.6-7.525-5.4-7.539a1.468 1.468 0 0 1-.228-.486 1.57 1.57 0 0 1 .101-1.072 1.38 1.38 0 0 1 .314-.421c.13-.128.281-.224.445-.283a1.12 1.12 0 0 1 .996.115c.15.095.28.224.384.378l6.038 8.424c.184.25.284.566.284.891 0 .325-.1.64-.284.891l-6.25 8.424c-.126.17-.285.304-.465.392a1.13 1.13 0 0 1-.573.113Z"
    />
  </Svg>
);
export default OrangeArrowIcon;
