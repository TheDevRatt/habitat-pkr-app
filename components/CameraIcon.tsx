import * as React from 'react';
import Svg, { Rect, Defs, Pattern, Use, Image } from 'react-native-svg';

const CameraIcon = () => (
  <Svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <Rect width="70" height="70" fill="url(#pattern0)"/>
    <Defs>
      <Pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <Use href="#image0_204_1074" transform="scale(0.005)"/>
      </Pattern>
      <Image id="image0_204_1074" width="200" height="200"
        href="data:image/png;base64,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"
    
     
       />
    </Defs>
  </Svg>
 );
 export default CameraIcon;
