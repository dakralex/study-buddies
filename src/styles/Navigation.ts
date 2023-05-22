import useStyles from '../hooks/useStyles';

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
