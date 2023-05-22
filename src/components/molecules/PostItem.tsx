import React from 'react';

import {Post} from '../../features/forums/types';
import {AppButtonProps} from '../atoms/AppButton';
import SearchResultItem from './SearchResultItem';
import {PROTOTYPE_USERS} from '../../features/users/users';

type PostItemProps = AppButtonProps & {
  post: Post;
};
const PostItem = (props: PostItemProps) => {
  const {onPress} = props;
  const {title, author_id, timestamp} = props.post;
  const user = PROTOTYPE_USERS[author_id];

  const now = new Date();
  const postDate = new Date(timestamp);
  const isPostFromToday =
    now.getFullYear() - postDate.getFullYear() === 0 && now - postDate === 0;
  const postDateString = isPostFromToday
    ? postDate.toTimeString()
    : postDate.toLocaleDateString();

  return (
    <SearchResultItem
      onPress={onPress}
      title={title ?? ''}
      description={`${user.fullname} at ${postDateString}`}
    />
  );
};

export default PostItem;
