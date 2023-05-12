import useStyles from '../hooks/useStyles';
import {StyleProp, TextStyle} from 'react-native';

export type TextStyleTypes = keyof ReturnType<typeof useTextStyles>;

const useTextStyles = () =>
  useStyles(({colorPalette}) => {
    const textDefaults: StyleProp<TextStyle> = {
      marginBottom: 4,
      fontSize: 16,
      fontWeight: 'normal',
      color: colorPalette.foreground,
    };

    return {
      font: textDefaults,
      heading: {
        ...textDefaults,
        marginBottom: 10,
        fontSize: 28,
        fontWeight: 'bold',
        color: colorPalette.primary,
      },
      subHeading: {
        ...textDefaults,
        marginBottom: 8,
        fontSize: 24,
        fontWeight: 'bold',
      },
      subSubHeading: {
        ...textDefaults,
        marginBottom: 4,
        fontSize: 18,
        fontWeight: 'bold',
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
    };
  });

export default useTextStyles;
