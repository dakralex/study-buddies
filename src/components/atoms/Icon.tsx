import React from 'react';
import {default as VectorIcon} from 'react-native-vector-icons/Ionicons';

type IconProps = {
  name: string;
  size: number;
  color: string;
};

const Icon = ({name, size, color}: IconProps) => {
  return <VectorIcon name={name} size={size} color={color} />;
};

export default Icon;
