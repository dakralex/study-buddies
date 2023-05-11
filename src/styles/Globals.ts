import useStyles from '../hooks/useStyles';
import {StyleProp, TextStyle} from 'react-native';

const useGlobalStyles = () =>
  useStyles(({colorPalette}) => {
    const textDefaults: StyleProp<TextStyle> = {
      color: colorPalette.foreground,
      fontSize: 16,
      fontWeight: 'normal',
      marginBottom: 4,
    };

    return {
      font: textDefaults,
      heading: {
        ...textDefaults,
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      subHeading: {
        ...textDefaults,
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
      },
      subSubHeading: {
        ...textDefaults,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
      },
      text: {
        ...textDefaults,
      },
      smallText: {
        ...textDefaults,
        fontSize: 13,
      },
      boldText: {
        ...textDefaults,
        fontWeight: 'bold',
      },
      divider: {
        marginVertical: 16,
      },
    };
  });

export default useGlobalStyles;
