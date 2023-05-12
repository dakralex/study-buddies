import React from 'react';
import {View} from 'react-native';
import {AppButtonProps} from '../atoms/AppButton';
import NormalText from '../atoms/text/NormalText';
import useButtonStyles from '../../styles/Buttons';
import AppIconButton from '../atoms/AppIconButton';
import SubSubHeading from '../atoms/text/SubSubHeading';

type SearchResultItemProps = AppButtonProps & {
  title: string;
  description: string;
};

const SearchResultItem = (props: SearchResultItemProps) => {
  const {title, description} = props;
  const buttonStyles = useButtonStyles();

  return (
    <AppIconButton
      wrapperStyle={buttonStyles.searchResultItemWrapper}
      containerStyle={buttonStyles.searchResultItemContainer}>
      <View style={buttonStyles.searchResultItemContent}>
        <View>
          <SubSubHeading>{title}</SubSubHeading>
        </View>
        <View>
          <NormalText>{description}</NormalText>
        </View>
      </View>
    </AppIconButton>
  );
};

export default SearchResultItem;
