import React from 'react';
import {
  StyleProp,
  TouchableHighlight,
  TouchableHighlightProps,
  View,
  ViewStyle,
} from 'react-native';
import useButtonStyles from '../../styles/Buttons';

export type AppButtonProps = TouchableHighlightProps & {
  wrapperStyle?: StyleProp<ViewStyle> | undefined;
  containerStyle?: StyleProp<ViewStyle> | undefined;
};

const AppButton = (props: AppButtonProps) => {
  const {children, wrapperStyle, containerStyle} = props;
  const buttonStyles = useButtonStyles();

  return (
    <TouchableHighlight
      {...props}
      style={[buttonStyles.buttonWrapper, wrapperStyle]}>
      <View style={[buttonStyles.buttonContainer, containerStyle]}>
        {children}
      </View>
    </TouchableHighlight>
  );
};

export default AppButton;
