import {FixedColorPalette, ThemedPalette} from './types';

const fixedColors: FixedColorPalette = {
  primary: '#EF6C35',
  secondary: '#F98903',
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
    background: '#161C2E',
    foreground: '#E8E6F2',
    gray: '#283253',
    lightGray: '#8392C3',
  },
  light: {
    ...fixedColors,
    background: '#E8E6F2',
    foreground: '#161C2E',
    gray: '#B5AFD5',
    lightGray: '#DAD7EA',
  },
};

export default Colors;
