import { configureStore } from '@reduxjs/toolkit';
import PostsReducer from './GetPosts/PostsReducer';

export const store = configureStore({
  reducer: {

      posts : PostsReducer

    },

});