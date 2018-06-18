import color from 'color';

const colors = {
  primary: '#3B352E',
  text: '#262422',
  textMuted: color('#262422').fade(0.3).string(),
};

const fontSizes = {
  large: '110%',
  small: '90%',
};

export { colors, fontSizes };
