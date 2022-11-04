import { createAction, props } from "@ngrx/store";

export const counterIncrement = createAction('increment');
export const counterDecrement = createAction('decrement');
export const counterReset = createAction('reset');
export const customIncrement = createAction(
    'custom increment', 
    props<{count: number}>()
);