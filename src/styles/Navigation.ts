import useStyles from '../hooks/useStyles';
import {Theme} from '@react-navigation/native';
import {useColorPalette} from '../hooks/Colors';
import {useColorScheme} from 'react-native';

export const useNavigationTheme = (): Theme => {
  const colorPalette = useColorPalette();

  return {
    colors: {
      primary: colorPalette.primary,
      text: colorPalette.foreground,
      background: colorPalette.background,
      card: colorPalette.gray,
      border: colorPalette.gray,
      notification: colorPalette.primary,
    },
    dark: useColorScheme() !== 'light',
  };
};

const useNavigationStyles = () =>
  useStyles(({colorPalette}) => ({
    headerContainer: {
      backgroundColor: colorPalette.background,
    },
    headerText: {
      color: colorPalette.primary,
      fontSize: 24,
      fontWeight: 'bold',
    },
    headerBackButton: {
      color: colorPalette.foreground,
    },
    tabBarContainer: {
      backgroundColor: colorPalette.background,
    },
    tabBarText: {
      color: colorPalette.foreground,
    },
    tabBarTextActive: {
      color: colorPalette.primary,
    },
  }));

export default useNavigationStyles;
