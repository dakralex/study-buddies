export type ColorPalette = {
  [index: string]: string;
  primary: string;
  secondary: string;
  background: string;
  foreground: string;
  gray: string;
};

export type ThemedPalette = {
  [index: string]: ColorPalette;
  dark: ColorPalette;
  light: ColorPalette;
};
