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
        login: (state)=>{
            state.status=false;
            state.userData= null
        },
    }

    
})
export default AuthSlice.reducers