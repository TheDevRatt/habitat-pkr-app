import * as React from "react";
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";

const PKRLogo = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={200}
    height={200}
    fill="none"
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h200v200H0z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#b" transform="scale(.00195)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,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AX7f8ZpZYwJAQRvr998N4LSzBQWf6VTVh52tl6hisehB8AGXaxrBO12ulzrR+jcAdfe7B/3w+ikEcoQJAAXtxOLiGVF7y/qNhSMcyasPAnLrgWc/+w2jWyMv0my+E8AdGP0o5RVA/ktRlhzaNERFt/tQE7gR0Pdjw2jwETgHwe0yNva2Ea5BmxDfARANanp6+rD0+/9AVX4egpcDOLCHL2dFcR+Aryrsn7W73SBGoKbo8OHDByfM2Kus4JUiekwUf1OBg3v4kn0ITkD1flHzxb7Rz5ZleXZoAdPTHDt0aP/5fftfr0ZfA4tXQXB4T19QUUD0bgCfrkXuKMuS+/4eMAGgaLVaresawDGoHAHspIq0RHUCkP2ATKz9V3pOoI8Bck4hpYo+ItbOyfj4g0VRcNiIJ1NTU1dLX45A8FxIfTVUfkJExkX0marSFNGLl9L8JVRXoOaUil0S1ZP7nvnMgj0afr1ocrLVB66DygtV5EUierVaXCWCqwAZX/uv9BygfYE5BdUuRBdUpDO2unrP+n0fRERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERE3vx/HAOcB4lC6nEAAAAASUVORK5CYII="
        id="b"
        width={512}
        height={512}
      />
    </Defs>
  </Svg>
);
export default PKRLogo;