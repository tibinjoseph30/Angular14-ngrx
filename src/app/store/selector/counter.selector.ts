import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "../reducers/counter.reducer";

const getCounterState = createFeatureSelector<CounterState>('counter');

export const getCounter = createSelector(getCounterState, (state)=> {
    return state.counter;
})