import React from 'react';
import {View} from 'react-native';
import AppIconButton from '../atoms/AppIconButton';
import useButtonStyles from '../../styles/Buttons';
import NormalText from '../atoms/text/NormalText';
import SubSubHeading from '../atoms/text/SubSubHeading';

import {Post} from '../../features/forums/types';
import {AppButtonProps} from '../atoms/AppButton';
import {PROTOTYPE_USERS} from '../../features/users/users';

type FullPostItemProps = AppButtonProps & {
  post: Post;
};
const FullPostItem = (props: FullPostItemProps) => {
  const {title, author_id, timestamp, content} = props.post;
  const buttonStyles = useButtonStyles();
  const user = PROTOTYPE_USERS[author_id];

  return (
    <AppIconButton
      wrapperStyle={buttonStyles.searchResultItemWrapper}
      containerStyle={buttonStyles.searchResultItemContainer}>
      <View style={buttonStyles.searchResultItemContent}>
        <View>
          <SubSubHeading>{title}</SubSubHeading>
        </View>
        <View>
          <NormalText>{user.fullname}</NormalText>
          <NormalText>{timestamp}</NormalText>
          <NormalText>{content}</NormalText>
        </View>
      </View>
    </AppIconButton>
  );
};

export default FullPostItem;
