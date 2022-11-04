import { createReducer, on } from "@ngrx/store";
import { Counter } from "src/app/models/counter.model";
import { counterDecrement, counterIncrement, counterReset, customIncrement } from "../actions/counter.actions";

export interface CounterState {
    counter: Counter;
}

export const initialState = {
    counter: 0
}

export const counterReducer = createReducer(
    initialState,
    on(counterIncrement, (state)=> {
        return {
            ...state,
            counter: state.counter + 1
        }
    }),
    on(counterDecrement, (state)=> {
        return {
            ...state,
            counter: state.counter - 1
        }
    }),
    on(counterReset, (state)=> {
        return {
            ...state,
            counter: 0
        }
    }),
    on(customIncrement, (state, action)=> {
        return {
            ...state,
            counter: state.counter + action.count
        }
    })
)