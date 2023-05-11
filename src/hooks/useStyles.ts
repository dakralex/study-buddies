import {StyleSheet} from 'react-native';
import {useMemo} from 'react';
import {useColorPalette} from './Colors';
import {EdgeInsets, useSafeAreaInsets} from 'react-native-safe-area-context';
import {ColorPalette} from '../styles/types';
import NamedStyles = StyleSheet.NamedStyles;

type UseStylesProps = {
  colorPalette: ColorPalette;
  safeAreaInsets: EdgeInsets;
};

const useStyles = <T extends NamedStyles<T> | NamedStyles<any>>(
  create: ({colorPalette}: UseStylesProps) => T | NamedStyles<T>,
): T => {
  const colorPalette = useColorPalette();
  const safeAreaInsets = useSafeAreaInsets();

  return useMemo(
    () =>
      StyleSheet.create(
        create({
          colorPalette: colorPalette,
          safeAreaInsets: safeAreaInsets,
        }),
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [colorPalette, safeAreaInsets],
  );
};

export default useStyles;
