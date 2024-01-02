import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authservice from "./Appwrite/Auth";
import { login, logout } from "./Store/AuthSlice";
import { Header, Footer } from "./Components";
function App() {
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authservice.currentUser().then((userdata) => {
      if (userdata) {
        dispatch(login({ userdata }));
      } else {
        dispatch(logout())
      }
    }).finally(()=> setloading(true))
  }, []);
  return !loading ? (
    <div className=" min-h-screen flex flex-wrap content-between bg-gray-700">
      <div className=" w-full block">
        <Header/>
        <main>
          {/* <Outlet/> */}
        </main>
        <main>
          {/* <Outlet/> */}
        </main>
        <Footer/>
      </div>
    </div>
  ) : null
}

export default App;
