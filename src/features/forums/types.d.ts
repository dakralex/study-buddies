import {PROTOTYPE_USERS} from '../users/users';

export type Forum = {
  id: string;
  title: string;
  posts: Posts;
};

export type Post = {
  id: string;
  title?: string;
  author_id: keyof typeof PROTOTYPE_USERS;
  timestamp: string;
  content: string;
  answers?: Posts;
};

export type Forums = {
  [forum_id: string]: Forum;
};

export type Posts = {
  [post_id: string]: Post;
};
