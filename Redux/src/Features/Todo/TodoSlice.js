import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: 'Shabbir Anjum' }]
}
export const TodoSlice = createSlice({
    name: 'Todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: 1,
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todoToUpdate = state.todos.find((todo) => todo.id === id);
           
          
            if (todoToUpdate) {
              todoToUpdate.text = text;
              console.log(todoToUpdate.text)
            }
          },
          
        DeleteAllTodo: (state,action)=>{
            state.todos=[];
        }
    }
})
export const {addTodo, removeTodo, updateTodo, DeleteAllTodo}= TodoSlice.actions
export default TodoSlice.reducer