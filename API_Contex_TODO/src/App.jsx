import Profile from "./Components/Profile"
import Login from "./Login"

function App() {

  return (
    <>
    <div className="w-full h-screen bg-gradient-to-t from-orange-300 to-green-500">
     <div className='text-red-500 flex justify-center  w-full '>
     <Login/>
     <Profile/>
     </div>
     </div>
    </>
  )
}

export default App
