import React from 'react';
import AppScreen from '../AppScreen';
import NormalText from '../../components/atoms/text/NormalText';
import Heading from '../../components/atoms/text/Heading';
import SmallText from '../../components/atoms/text/SmallText';
import {HomeScreenProps as Props} from '../../navigation/types';
import Subheading from '../../components/atoms/text/Subheading';
import Subsubheading from '../../components/atoms/text/Subsubheading';

const HomeScreen = ({}: Props) => {
  return (
    <AppScreen>
      <Heading>Heading</Heading>
      <Subheading>Subheading</Subheading>
      <Subsubheading>Subsubheading</Subsubheading>
      <NormalText>Lorem ipsum dolor sit amet.</NormalText>
      <SmallText>Lorem ipsum dolor sit amet.</SmallText>
    </AppScreen>
  );
};

export default HomeScreen;
