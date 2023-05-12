export type FixedColorPalette = {
  [index: string]: string;
  primary;
  secondary;
  red;
  yellow;
  green;
  teal;
  lightblue;
  darkblue;
  violet;
  magenta;
};

export type ColorPalette = FixedColorPalette & {
  background;
  foreground;
  gray;
};

export type ThemedPalette = {
  [index: string]: ColorPalette;
  dark: ColorPalette;
  light: ColorPalette;
};
