import color from 'color';

const api = {
  base: 'https://hound.uber.space/cockpit/api',
  token: 'bd188c7f5bfed1d21f76ce54061cd8',
};

const colors = {
  primary: '#3B352E',
  text: '#262422',
  textMuted: color('#262422').fade(0.3).string(),
};

const fontSizes = {
  large: '110%',
  small: '90%',
};

const blockMargin = '2.5rem';

export { api, colors, fontSizes, blockMargin };
