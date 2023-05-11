import useStyles from '../hooks/useStyles';

const PADDING_VERTICAL = 16;
const PADDING_HORIZONTAL = 16;

const useScreenStyles = () =>
  useStyles(({colorPalette, safeAreaInsets}) => ({
    screenViewContainer: {
      flex: 1,
      backgroundColor: colorPalette.background,
      paddingTop: safeAreaInsets.top + PADDING_HORIZONTAL,
      paddingBottom: safeAreaInsets.bottom + PADDING_HORIZONTAL,
      paddingLeft: safeAreaInsets.left + PADDING_VERTICAL,
      paddingRight: safeAreaInsets.right + PADDING_VERTICAL,
    },
  }));

export default useScreenStyles;
