import TodoReducer from "../Features/Todo/TodoSlice";
import { configureStore } from '@reduxjs/toolkit';

export const Store = configureStore({
    reducer: TodoReducer
})
