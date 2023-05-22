export type FixedColorPalette = {
  [index: string]: string;
  primary: string;
  secondary: string;
  red: string;
  yellow: string;
  green: string;
  teal: string;
  lightblue: string;
  darkblue: string;
  violet: string;
  magenta: string;
};

export type ColorPalette = FixedColorPalette & {
  background: string;
  foreground: string;
  gray: string;
  lightGray: string;
};

export type ThemedPalette = {
  [index: string]: ColorPalette;
  dark: ColorPalette;
  light: ColorPalette;
};
