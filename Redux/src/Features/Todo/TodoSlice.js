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
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo:(state, action)=>{
         const  value= state.todos.find((todo)=> todo.text===action.payload.text)
         if(value){state.todos.text= action.payload.text}
        },
        DeleteAllTodo: (state,action)=>{
            state.text="";
            state.id= null
        }
    }
})
export const {addTodo, removeTodo, updateTodo, DeleteAllTodo}= TodoSlice.actions
export default TodoSlice.reducer