import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/models/posts.model";

export const addPosts = createAction(
  'add posts',
  props<{post: Post}>()
);
export const updatePosts = createAction(
  'update posts',
  props<{post: Post}>()
);
