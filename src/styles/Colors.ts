import {FixedColorPalette, ThemedPalette} from './types';

const fixedColors: FixedColorPalette = {
  primary: '#FD5200',
  secondary: '#AF3800',
  red: '#F09583', // Dark Salmon
  yellow: '#F0E683', // Khaki
  green: '#B1F083', // Yellow-Green
  teal: '#83f0b5', // Teal Deer
  lightblue: '#83DAF0', // Medium Sky Blue
  darkblue: '#8392F0', // Vista Blue
  violet: '#C683F0', // Bright Lavender
  magenta: '#F083D1', // Princess Perfume
};

const Colors: ThemedPalette = {
  dark: {
    ...fixedColors,
    background: '#0F0A0A',
    foreground: '#F1EEE4',
    gray: '#454545',
  },
  light: {
    ...fixedColors,
    background: '#F1EEE4',
    foreground: '#0F0A0A',
    gray: '#BABABA',
  },
};

export default Colors;
