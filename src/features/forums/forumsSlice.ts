import uuid from 'react-native-uuid';
import {PROTOTYPE_FORUMS} from './prototype';
import {RootState} from '../../store/configureStore';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Forum, Forums, ForumsKey, Post, PostsKey} from './types';

interface ForumsState {
  forums: Forums;
}

export type ForumInput = Omit<Forum, 'id'>;

export type PostInput = {
  forumId: ForumsKey;
  post: Omit<Post, 'id'>;
};

export type AnswerInput = {
  forumId: ForumsKey;
  postId: PostsKey;
  answer: Omit<Post, 'id'>;
};

const initialState: ForumsState = {
  forums: PROTOTYPE_FORUMS,
};

export const forumsSlice = createSlice({
  name: 'forums',
  initialState,
  reducers: {
    addForum: (state: ForumsState, action: PayloadAction<ForumInput>) => {
      const forum: Forum = {
        id: uuid.v4(),
        ...action.payload,
      };

      state.forums[forum.id] = forum;
    },
    addPost: (state: ForumsState, action: PayloadAction<PostInput>) => {
      const {forumId, post: postInput} = action.payload;
      const post: Post = {
        id: uuid.v4() as string,
        ...postInput,
      };

      if (state.forums[forumId]) {
        state.forums[forumId].posts[post.id] = post;
      }
    },
    addAnswer: (state: ForumsState, action: PayloadAction<AnswerInput>) => {
      const {forumId, postId, answer: answerInput} = action.payload;
      const answer: Post = {
        id: uuid.v4() as string,
        ...answerInput,
      };

      // TODO Refactor
      if (state.forums[forumId]?.posts?.[postId]) {
        if (!state.forums[forumId]?.posts?.[postId].answers) {
          state.forums[forumId].posts[postId].answers = {};
        }

        state.forums[forumId].posts[postId].answers[answer.id] = answer;
      }
    },
  },
});

export const selectForums = (state: RootState) => state.forums.forums;

export const selectForum = (state: RootState, forumId: ForumsKey) =>
  state.forums.forums[forumId];

export const selectPost = (
  state: RootState,
  forumId: ForumsKey,
  postId: PostsKey,
) => state.forums.forums[forumId]?.posts[postId];

export const {addForum, addPost, addAnswer} = forumsSlice.actions;
export default forumsSlice.reducer;
