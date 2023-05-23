import uuid from 'react-native-uuid';
import {Forum, Forums, Post} from './types';
import {PROTOTYPE_FORUMS} from './prototype';
import {RootState} from '../../store/configureStore';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ForumsState {
  forums: Forums;
}

type ForumInput = Omit<Forum, ['id']>;

type PostInput = {
  forumId: Forum['id'];
  post: Omit<Post, ['id']>;
};

type AnswerInput = {
  forumId: Forum['id'];
  postId: Post['id'];
  answer: Omit<Post, ['id']>;
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
      const {forumId, postInput} = action.payload;
      const post: Post = {
        id: uuid.v4(),
        ...postInput,
      };

      if (state.forums[forumId]?.posts) {
        state.forums[forumId].posts[post.id] = post;
      }
    },
    addAnswer: (state: ForumsState, action: PayloadAction<AnswerInput>) => {
      const {forumId, postId, postInput: answerInput} = action.payload;
      const answer: Post = {
        id: uuid.v4(),
        ...answerInput,
      };

      if (state.forums[forumId]?.posts[postId]?.answers) {
        state.forums[forumId].posts[postId].answers[answer.id] = answer;
      }
    },
  },
});

export const selectForums = (state: RootState) => state.forums.forums;

export const selectForum = (state: RootState, forumId: Forum['id']) =>
  state.forums.forums[forumId];

export const selectPost = (
  state: RootState,
  forumId: Forum['id'],
  postId: Post['id'],
) => state.forums.forums[forumId]?.posts[postId];

export const {addForum, addPost, addAnswer} = forumsSlice.actions;
export default forumsSlice.reducer;
