import useStyles from '../hooks/useStyles';
import {StyleProp, ViewStyle} from 'react-native';

export const SCREEN_PADDING_VERTICAL = 16;
export const SCREEN_PADDING_HORIZONTAL = 16;

const useScreenStyles = () =>
  useStyles(({colorPalette, safeAreaInsets}) => {
    const screenViewDefaults: StyleProp<ViewStyle> = {
      flex: 1,
      backgroundColor: colorPalette.background,
    };

    return {
      screenViewContainer: {
        ...screenViewDefaults,
        paddingTop: safeAreaInsets.top + SCREEN_PADDING_HORIZONTAL,
        paddingBottom: safeAreaInsets.bottom + SCREEN_PADDING_HORIZONTAL,
        paddingLeft: safeAreaInsets.left,
        paddingRight: safeAreaInsets.right,
      },
      screenViewPaddedContainer: {
        ...screenViewDefaults,
        paddingTop: safeAreaInsets.top + SCREEN_PADDING_HORIZONTAL,
        paddingBottom: safeAreaInsets.bottom + SCREEN_PADDING_HORIZONTAL,
        paddingLeft: safeAreaInsets.left + SCREEN_PADDING_VERTICAL,
        paddingRight: safeAreaInsets.right + SCREEN_PADDING_VERTICAL,
      },
    };
  });

export default useScreenStyles;
