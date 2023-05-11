import useStyles from '../hooks/useStyles';
import {StyleProp, TextStyle} from 'react-native';

export type TextStyleTypes = keyof ReturnType<typeof useTextStyles>;

const useTextStyles = () =>
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
    };
  });

export default useTextStyles;
