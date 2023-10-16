import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import {Outlet} from 'react-router-dom'

function App() {


  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
