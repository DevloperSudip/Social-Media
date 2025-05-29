import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./assets/Components/Header";
import Sidebar from "./assets/Components/Sidebar";
import Footer from "./assets/Components/Footer";
import CreatePost from "./assets/Components/CreatePost";

import PostList from "./assets/Components/PostList";
import PostListProvide from "./assets/store/Post-list-store";
import SignUp from "./assets/Components/SignUp";
import Login from "./assets/Components/Login";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvide>
      <div className="app-components">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="contains">
          {/* <Header handleSignUpClick={() => setShowSignUp(true)} /> */}
          <Header setSelectedTab={setSelectedTab} />

          {selectedTab === "SignUp" ? (
            <SignUp />
          ) : selectedTab === "Login" ? (
            <Login />
          ) : selectedTab === "Home" ? (
            <PostList />
          ) : (
            <CreatePost />
          )}
          {/* {selectedTab === "Home" && <PostList />} */}
          <Footer />
        </div>
      </div>
    </PostListProvide>
  );
}

export default App;
