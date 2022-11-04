import { createReducer, on } from "@ngrx/store"
import { Post } from "src/app/models/posts.model"
import { addPosts, updatePosts } from "../actions/posts.actions"

export interface PostState {
    posts: Post[]
}

const initialState = {
    posts: [
        {
            id: '1',
            title: 'abc',
            description: 'lorem ipsum'
        },
        {
            id: '2',
            title: 'def',
            description: 'lorem ipsum 2'
        }
    ]
}

export const postsReducer = createReducer(
    initialState,
    on(addPosts, (state, action:any)=> {
      let post = { ...action.post };
      post.id = (state.posts.length + 1).toString();
      return {
        ...state,
        posts: [...state.posts, post],
      };
    }),
    on(updatePosts, (state, action:any)=> {
      const updatedposts = state.posts.map((post)=> {
        return action.post.id === post.id ? action.post : post;
      })
      return {
        ...state,
        posts: updatedposts
      }
    })
)
