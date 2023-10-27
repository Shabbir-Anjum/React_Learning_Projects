import { createSlice } from "react-redux"
const initialstate={
    status: null,
    userData: null
}
const AuthSlice= createSlice({
    name: 'auth',
    initialstate,
    reducers:{
        login: (state, action)=>{}
    }
    
})
export default AuthSlice.reducers