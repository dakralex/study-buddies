import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useGrayColor} from '../../hooks/Colors';

type DividerProps = {
  height: number;
};

const Divider = ({height}: DividerProps) => {
  const gray = useGrayColor();

  const styles = StyleSheet.create({
    divider: {
      marginVertical: 8,
      height: height,
      backgroundColor: gray,
    },
  });

  return <View style={styles.divider} />;
};

export default Divider;
