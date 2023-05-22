import React from 'react';
import {StyleProp, TextStyle} from 'react-native';
import NormalText from '../atoms/text/NormalText';
import useButtonStyles from '../../styles/Buttons';
import AppButton, {AppButtonProps} from '../atoms/AppButton';

export type ToggleButtonProps = AppButtonProps & {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  stateOnText: string;
  stateOnColor?: string;
  stateOffText: string;
  stateOffColor?: string;
};

const ToggleButton = (props: ToggleButtonProps) => {
  const {
    onPress,
    state,
    setState,
    stateOnText,
    stateOnColor,
    stateOffText,
    stateOffColor,
  } = props;
  const buttonStyles = useButtonStyles();

  const stateOnContainer: StyleProp<TextStyle> = {
    ...buttonStyles.toggleButtonOnContainer,
    backgroundColor:
      stateOnColor ?? buttonStyles.toggleButtonOnContainer.backgroundColor,
  };

  const stateOffContainer: StyleProp<TextStyle> = {
    ...buttonStyles.toggleButtonOffContainer,
    backgroundColor:
      stateOffColor ?? buttonStyles.toggleButtonOffContainer.backgroundColor,
  };

  return (
    <AppButton
      {...props}
      onPress={event => {
        setState(!state);

        if (onPress) {
          onPress(event);
        }
      }}
      containerStyle={state ? stateOnContainer : stateOffContainer}>
      <NormalText>{state ? stateOnText : stateOffText}</NormalText>
    </AppButton>
  );
};

export default ToggleButton;
