import React from 'react';
import {Post} from '../../features/forums/types';
import {AppButtonProps} from '../atoms/AppButton';
import SearchResultItem from './SearchResultItem';

import {useAppSelector} from '../../store/configureStore';
import {selectUser} from '../../features/users/usersSlice';

type PostItemProps = AppButtonProps & {
  post: Post;
};
const PostItem = (props: PostItemProps) => {
  const {onPress} = props;
  const {title, author_id, timestamp} = props.post;
  const user = useAppSelector(state => selectUser(state, author_id));

  const postDate = new Date(timestamp);
  const postDateString = postDate.toLocaleDateString();

  return (
    <SearchResultItem
      onPress={onPress}
      title={title ?? ''}
      description={`${user.fullname} at ${postDateString}`}
    />
  );
};

export default PostItem;
