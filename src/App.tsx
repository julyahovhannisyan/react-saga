import "./App.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { totalUsersRequest, usersRequest } from "./store/users/actions";
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import UserUpdate from "./components/User";
import React from "react";
import { TOTAL_USERS_REQUEST } from "./store/users/actionType";

function App() {
  const dispatch = useDispatch();

  const UsersList = React.lazy(() => import("./pages/Users"));
  const Loading = () => <p>Loading ...</p>;

  useEffect(() => {
    dispatch(usersRequest({ page: 1, limit: 10 }));
    dispatch(totalUsersRequest({type: TOTAL_USERS_REQUEST}));
  }, []);

  return (
    <div className="Container">
      <div className="Container_sidebar">
        <Sidebar />
      </div>
      <div className="Container_wrapper">
        <Header />
        <React.Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/" element={<UsersList />} />
            <Route path="/edit/:id" element={<UserUpdate />} />
            <Route path="/new" element={<UserUpdate />} />
          </Routes>
        </React.Suspense>
      </div>
    </div>
  );
}

export default App;
