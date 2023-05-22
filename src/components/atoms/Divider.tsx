import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useColorPalette} from '../../hooks/Colors';

type DividerProps = {
  height: number;
};

const Divider = ({height}: DividerProps) => {
  const colorPalette = useColorPalette();

  return (
    <View
      style={[styles.divider, {height}, {backgroundColor: colorPalette.grey}]}
    />
  );
};

const styles = StyleSheet.create({
  divider: {
    marginVertical: 8,
  },
});

export default Divider;
