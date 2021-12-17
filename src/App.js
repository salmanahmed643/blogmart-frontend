
import Home from "./component/Home/Home/Home";
import SignIn from "./component/Login/SignIn/SignIn";
import SignUp from "./component/Login/SignUp/SignUp";
import Settings from "./component/Settings/Settings";
import Navigation from "./component/Shared/Navigation/Navigation";
import SinglePosts from "./component/Single/SinglePosts/SinglePosts";
import Write from "./component/Write/Write";

import { BrowserRouter, Routes, Route, } from "react-router-dom";

function App() {
  const user = false;
  return (
    <>
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />

          <Route path="/write" element={user ? <Write/> : <SignUp/>} />
          <Route path="/settings" element={user ? <Settings/> : <SignUp/>} />
          <Route path="/signin" element={user ? <Home/> : <SignIn/>} />
          <Route path="/signup" element={user ? <Home/> : <SignUp/>} />

          <Route path="/post/:postId" element={<SinglePosts/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
