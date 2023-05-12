import useStyles from '../hooks/useStyles';
import {SCREEN_PADDING_HORIZONTAL} from './Screens';

const useButtonStyles = () =>
  useStyles(({colorPalette}) => ({
    buttonWrapper: {
      overflow: 'hidden',
      flexDirection: 'row',
      alignSelf: 'flex-start',
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonIcon: {
      width: 24,
      height: 24,
      color: colorPalette.foreground,
    },
    primaryButtonContainer: {
      paddingVertical: 10,
      paddingHorizontal: 14,
      borderRadius: 10,
      backgroundColor: colorPalette.primary,
    },
    primaryButtonContent: {
      paddingRight: 6,
    },
    secondaryButtonContainer: {
      paddingVertical: 10,
      borderRadius: 10,
    },
    secondaryButtonContent: {
      paddingRight: 6,
    },
    notificationItemWrapper: {
      backgroundColor: colorPalette.gray,
      paddingHorizontal: SCREEN_PADDING_HORIZONTAL,
      paddingVertical: 12,
      alignSelf: 'stretch',
    },
    notificationItemContainer: {
      width: '100%',
    },
    notificationItemContent: {
      paddingHorizontal: 10,
      marginRight: 'auto',
    },
  }));

export default useButtonStyles;
