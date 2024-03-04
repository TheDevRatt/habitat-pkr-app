import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const CreditIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      fill="#8D8D8D"
      d="M23.75 0H1.25C.919 0 .6.148.367.412.132.675 0 1.032 0 1.404v18.718c0 .372.132.729.367.992.234.263.552.411.883.412h22.5c.331 0 .65-.149.884-.412.234-.263.366-.62.366-.992V1.404c0-.372-.132-.73-.366-.992A1.187 1.187 0 0 0 23.75 0Zm-.417 1.872v3.743H1.667V1.872h21.666ZM1.667 19.654V9.359h21.666v10.295H1.667Z"
    />
    <Path
      fill="#8D8D8D"
      d="M7.083 14.039H3.75v1.871h3.333V14.04ZM12.083 14.039H8.75v1.871h3.333V14.04Z"
    />
  </Svg>
);
export default CreditIcon;
