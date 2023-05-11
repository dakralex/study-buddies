import {useColorScheme} from 'react-native';
import Colors from '../styles/Colors';
import {ColorPalette} from '../styles/types';

const useColorSchemeName = (): string => {
  return useColorScheme() === 'dark' ? 'dark' : 'light';
};

export const useColorPalette = (): ColorPalette => {
  const colorSchemeName = useColorSchemeName();

  return Colors[colorSchemeName];
};

export const usePrimaryColor = (): string => {
  return useColorPalette().primary;
};

export const useSecondaryColor = (): string => {
  return useColorPalette().secondary;
};

export const useForegroundColor = (): string => {
  return useColorPalette().foreground;
};

export const useBackgroundColor = (): string => {
  return useColorPalette().background;
};

export const useGrayColor = (): string => {
  return useColorPalette().gray;
};
