import * as React from "react";
import Svg, {
  SvgProps,
  Path,
  Defs,
  Pattern,
  Use,
  Image,
} from "react-native-svg";
const AdminIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={50}
    height={50}
    fill="none"
    style={{ marginTop: 10 }}
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h50v50H0z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#b" transform="scale(.00667)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,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"
        id="b"
        width={150}
        height={150}
      />
    </Defs>
  </Svg>
);
export default AdminIcon;
