export type Forum = {
  id: string;
  title: string;
  posts: Posts;
};

export type Post = {
  id: string;
  title?: string;
  author_id: string;
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
