import React from 'react';
import Spinner from 'react-spinkit';
import color from 'color';
import { blockMargin, colors } from '../utils/constants';

export default () => (
  <Spinner
    name="line-scale-pulse-out"
    fadeIn="quarter"
    color={color(colors.secondary).fade(0.4).string()}
    style={{
      marginBottom: blockMargin,
    }}
  />
);
