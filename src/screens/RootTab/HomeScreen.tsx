import React from 'react';
import {HomeScreenProps as Props} from '../../navigation/types';

import AppScreen from '../AppScreen';
import Heading from '../../components/atoms/text/Heading';
import Subheading from '../../components/atoms/text/Subheading';
import Subsubheading from '../../components/atoms/text/Subsubheading';
import BoldText from '../../components/atoms/text/BoldText';
import NormalText from '../../components/atoms/text/NormalText';
import SmallText from '../../components/atoms/text/SmallText';

const HomeScreen = ({}: Props) => {
  return (
    <AppScreen>
      <Heading>Heading</Heading>
      <Subheading>Subheading</Subheading>
      <Subsubheading>Subsubheading</Subsubheading>
      <BoldText>Lorem ipsum dolor sit amet.</BoldText>
      <NormalText>Lorem ipsum dolor sit amet.</NormalText>
      <SmallText>Lorem ipsum dolor sit amet.</SmallText>
    </AppScreen>
  );
};

export default HomeScreen;
