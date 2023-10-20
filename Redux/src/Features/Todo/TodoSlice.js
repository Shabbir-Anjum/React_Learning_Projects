import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, name: 'Shabbir Anjum' }]
}
export const TodoSlice = createSlice({
    name: 'SuperMan',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                name: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo:(state, action)=>{
         const  value= state.todos.find((todo)=> todo.id===action.payload.id)
         if(value){state.todos.name= action.payload.name}
        }
    }
})
export const {addTodo, removeTodo, updateTodo}= TodoSlice.actions
export default TodoSlice.reducer