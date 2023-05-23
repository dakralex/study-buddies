import React from 'react';
import {View} from 'react-native';
import NormalText from '../atoms/text/NormalText';
import SubSubHeading from '../atoms/text/SubSubHeading';

import {useAppSelector} from '../../store/configureStore';
import {selectUser} from '../../features/users/usersSlice';

import {Post} from '../../features/forums/types';
import {AppButtonProps} from '../atoms/AppButton';

type FullPostItemProps = AppButtonProps & {
  post: Post;
};
const FullPostItem = (props: FullPostItemProps) => {
  const {title, author_id, timestamp, content} = props.post;
  const user = useAppSelector(state => selectUser(state, author_id));
  const postDate = new Date(timestamp);
  const postDateString = `${postDate.toLocaleDateString()} ${postDate.toLocaleTimeString()}`;

  return (
    <View>
      <View>
        <SubSubHeading>{title}</SubSubHeading>
      </View>
      <View>
        <NormalText>{user?.fullname ?? 'Unbekannter Autor'}</NormalText>
        <NormalText>{postDateString}</NormalText>
        <NormalText>{content}</NormalText>
      </View>
    </View>
  );
};

export default FullPostItem;
