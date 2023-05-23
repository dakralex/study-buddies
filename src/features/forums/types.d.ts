export type Forum = {
  id: string;
  title: string;
  posts: Posts;
};

export type Post = {
  id: string;
  title?: string;
  forum_id: string;
  author_id: string;
  timestamp: string;
  content: string;
  answers?: Answers;
};

export type Answer = Omit<Post, 'title' | 'answers'>;

export type ForumsKey = string;
export type Forums = {
  [forum_id: ForumsKey]: Forum;
};

export type PostsKey = string;
export type Posts = {
  [post_id: PostsKey]: Post;
};

export type AnswersKey = PostsKey;
export type Answers = {
  [answer_id: AnswersKey]: Answer;
};
