import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import {
  HomePage,
  Rent,
  TripItinerary,
  People,
  NotFound,
  RegisterPage,
} from "./routes/elementPath";
import { path } from "./routes/path";
import LoginPage from "./pages/LoginPage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { meAsync } from "./redux/user/userSlice";
import { socket } from "./socket";
import FriendPage from "./pages/FriendPage";

function App() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth?.userDetails?._id);
  useEffect(() => {
    (async () => {
      await dispatch(meAsync()).unwrap();
      socket.emit("register", userId);
      socket.on("online", (users) => {
        console.log(users);
      });
    })();
  }, [dispatch, userId]);
  return (
    <Routes>
      <Route path={path.home} element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={path.rent} element={<Rent />} />
        <Route path={path.trip} element={<TripItinerary />} />
        <Route path={path.people} element={<People />} />
        <Route path={path.friends} element={<FriendPage />} />
      </Route>
      <Route path={path.register} element={<RegisterPage />} />
      <Route path={path.login} element={<LoginPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
