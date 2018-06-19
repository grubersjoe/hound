import Typography from 'typography';
// eslint-disable-next-line
import 'typeface-overpass';
import color from 'color';
import { colors } from './constants';
import bgImage from '../images/bg.jpg';

const theme = {
  title: 'Hound',
  baseFontSize: '18px',
  baseLineHeight: 1.5,
  boldWeight: 700,
  bodyColor: colors.text,
  bodyFontFamily: ['Overpass', 'monospace'],
  bodyWeight: 400,
  blockMarginBottom: 0.85,
  headerFontFamily: ['Overpass', 'sans-serif'],
  headerWeight: 700,
  scaleRatio: 1.618,
};

theme.overrideThemeStyles = () => ({
  // Typographys JS doesn't support breakpoints so far
  // See https://github.com/KyleAMathews/typography.js/issues/75
  // This is a very ugly workaround:
  '@media (max-width: 767px) { html { font-size: 16px } }': {},

  html: {
    background: `url(${bgImage}) center top no-repeat ${colors.bg}`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    overflow: 'auto',
  },

  'h1, h2, h3': {
    lineHeight: 1.3,
  },

  'h1 a, h2 a, h3 a, h4 a, h5 a, h6 a': {
    color: 'inherit',
  },

  h2: {
    marginBottom: '0.75rem',
  },

  a: {
    color: colors.text,
    textDecoration: 'none',
  },

  'td a': {
    padding: '0.25rem 0.4rem',
    borderRadius: '0.2rem',
    backgroundColor: color(colors.secondary).fade(0.9).string(),
    transition: '0.2s background-color ease-in-out',
  },

  'td a:hover': {
    backgroundColor: color(colors.secondary).fade(0.85).string(),
  },

  small: {
    fontSize: '90%',
  },

  li: {
    marginBottom: '0.25rem',
  },

  tr: {
    verticalAlign: 'top',
  },

  td: {
    borderBottom: 'none',
    padding: '0.3rem 0.5rem',
  },
});

const typography = new Typography(theme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
