import { useState } from "react";
import UserContext from "./Context";

const Provider= ({children})=>{
    const [user,setuser]= useState(null)
    return(
    <UserContext.Provider value={{user, setuser}}>
        {children}
    </UserContext.Provider>
    )
}
export default Provider