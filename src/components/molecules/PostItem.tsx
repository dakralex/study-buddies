import React from 'react';
import {View} from 'react-native';
import AppIconButton from '../atoms/AppIconButton';
import {AppButtonProps} from '../atoms/AppButton';
import useButtonStyles from '../../styles/Buttons';
import NormalText from '../atoms/text/NormalText';
import SubSubHeading from '../atoms/text/SubSubHeading';
import {Post} from '../../features/forums/types';
import {PROTOTYPE_USERS} from '../../features/users/users';

type PostItemProps = AppButtonProps & {
  post: Post;
};
const PostItem = (props: PostItemProps) => {
  const {
    onPress,
    post: {id, title, author_id, timestamp, content},
  } = props;
  const buttonStyles = useButtonStyles();
  const user = PROTOTYPE_USERS[author_id];
  return (
    <AppIconButton
      onPress={onPress}
      wrapperStyle={buttonStyles.searchResultItemWrapper}
      containerStyle={buttonStyles.searchResultItemContainer}>
      <View style={buttonStyles.searchResultItemContent}>
        <View>
          <SubSubHeading> {title} </SubSubHeading>
        </View>
        <View>
          <NormalText>
            {' '}
            {user.fullname}, {timestamp}
          </NormalText>
        </View>
      </View>
    </AppIconButton>
  );
};

export default PostItem;
