import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const TermsIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={38}
    fill="none"
    {...props}
  >
    <Path
      fill="#8D8D8D"
      d="M22.222.43H2.778C1.25.43 0 1.836 0 3.55v31.197c0 1.716 1.25 3.12 2.778 3.12h19.444c1.528 0 2.778-1.404 2.778-3.12V3.55C25 1.835 23.75.43 22.222.43Zm0 33.537c0 .437-.305.78-.694.78H3.472c-.389 0-.694-.343-.694-.78V4.33c0-.437.305-.78.694-.78h18.056c.389 0 .694.343.694.78v29.637Z"
    />
    <Path
      fill="#8D8D8D"
      d="M9.722 16.03H6.944c-.763 0-1.388-.703-1.388-1.56V8.23c0-.858.625-1.56 1.388-1.56h2.778c.764 0 1.39.702 1.39 1.56v6.24c0 .857-.626 1.56-1.39 1.56Zm8.334 9.358H6.944c-.763 0-1.388-.702-1.388-1.56v-3.12c0-.857.625-1.559 1.388-1.559h11.112c.764 0 1.389.702 1.389 1.56v3.12c0 .857-.625 1.56-1.39 1.56Zm0-15.598h-2.778c-.764 0-1.39-.702-1.39-1.56 0-.858.626-1.56 1.39-1.56h2.778c.764 0 1.389.702 1.389 1.56 0 .858-.625 1.56-1.39 1.56Zm0 6.24h-2.778c-.764 0-1.39-.703-1.39-1.56 0-.858.626-1.56 1.39-1.56h2.778c.764 0 1.389.702 1.389 1.56 0 .857-.625 1.56-1.39 1.56Zm0 15.598H6.944c-.763 0-1.388-.702-1.388-1.56 0-.858.625-1.56 1.388-1.56h11.112c.764 0 1.389.702 1.389 1.56 0 .858-.625 1.56-1.39 1.56Z"
    />
  </Svg>
);
export default TermsIcon;