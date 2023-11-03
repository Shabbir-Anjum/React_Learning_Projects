import { createSlice } from "react-redux"
const initialstate={
    status: null,
    userData: null
}
const AuthSlice= createSlice({
    name: 'auth',
    initialstate,
    reducers:{
        login: (state, action)=>{
            state.status=true;
            state.userData= action.paylaod
        },
        logout: (state)=>{
            state.status=false;
            state.userData= null
        },
    }

    
}) 
export const {login, logout}= AuthSlice.actions
export default AuthSlice.reducers