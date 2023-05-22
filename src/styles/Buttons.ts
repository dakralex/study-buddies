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
    toggleButtonOnContainer: {
      paddingVertical: 10,
      paddingHorizontal: 14,
      borderRadius: 10,
      backgroundColor: colorPalette.primary,
    },
    toggleButtonOffContainer: {
      paddingVertical: 10,
      paddingHorizontal: 14,
      borderRadius: 10,
      backgroundColor: colorPalette.secondary,
    },
    secondaryButtonContainer: {
      paddingVertical: 10,
      borderRadius: 10,
    },
    secondaryButtonContent: {
      paddingRight: 6,
    },
    floatingActionButtonWrapper: {
      position: 'absolute',
      right: 16,
      bottom: 16,
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
    searchResultItemWrapper: {
      paddingHorizontal: SCREEN_PADDING_HORIZONTAL,
      paddingVertical: 12,
      alignSelf: 'stretch',
    },
    searchResultItemContainer: {
      width: '100%',
    },
    searchResultItemContent: {
      flexDirection: 'column',
      rowGap: 8,
      paddingRight: 10,
      marginRight: 'auto',
    },
  }));

export default useButtonStyles;
