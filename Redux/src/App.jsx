import Profile from "./Components/Profile"
import TodoSlice from "./Features/Todo/TodoSlice"
import Login from "./Login"
import Addtodo from "./Components/Addtodo"
import Todos from "./Components/Todos"
function App() {

  return (
    <>
    <div className="items-center">
    <Addtodo/>
    <Todos/>
    </div>
    </>
  )
}

export default App
