import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Room from "../components/Room/Room";
import Messages from "../components/Messages/Messages";
import "./ForumPage.css";

const Forum = () => {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <Room className="side"></Room>
        <Messages className="main"></Messages>
      </div>
      <Footer className="footer"></Footer>
    </div>
  );
};

export default Forum;
