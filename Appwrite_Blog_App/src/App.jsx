import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authservice from "./Appwrite/Auth";
import { login, logout } from "./Store/AuthSlice";
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
    }).finally(setloading(false))
  }, []);
  return !loading ? (
    <div className=" "></div>
  ) : null
}

export default App;
