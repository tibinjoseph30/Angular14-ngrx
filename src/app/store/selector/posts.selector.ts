import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostState } from "../reducers/posts.reducer";

const getPostState = createFeatureSelector<PostState>('posts');

export const getPosts = createSelector(getPostState, (state)=> {
    return state.posts;
});

export const getPostsById = createSelector(
  getPostState, (state: { posts: any[]; }, props: { id: any; })=> {
    return state.posts.find(post => post.id === props.id);
  }
);
