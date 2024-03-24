import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';
import TickMark from './TickMark'; // Import TickMark component

const CheckBoxIcon = ({ checked }) => (
  <Svg width="15" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Rect x="1" y="1" width="13" height="13" stroke="#E55D25" strokeWidth="2"/>
    {checked && <TickMark />}
  </Svg>
);

export default CheckBoxIcon;
