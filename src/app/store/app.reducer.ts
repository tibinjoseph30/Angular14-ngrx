import { counterReducer, CounterState} from "./reducers/counter.reducer";
import { postsReducer, PostState } from "./reducers/posts.reducer";

export interface AppState {
    counter: CounterState,
    post: PostState
}

export const appReducer = {
    counter: counterReducer,
    posts: postsReducer
}