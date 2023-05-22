import React from 'react';
import {View} from 'react-native';
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
  const user = PROTOTYPE_USERS[author_id];
  const postDate = new Date(timestamp);
  const postDateString = `${postDate.toLocaleDateString()} ${postDate.toLocaleTimeString()}`;

  return (
    <View>
      <View>
        <SubSubHeading>{title}</SubSubHeading>
      </View>
      <View>
        <NormalText>{user.fullname}</NormalText>
        <NormalText>{postDateString}</NormalText>
        <NormalText>{content}</NormalText>
      </View>
    </View>
  );
};

export default FullPostItem;
