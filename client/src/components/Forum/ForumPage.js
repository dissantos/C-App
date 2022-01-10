import React from "react";
import Room from "../Room/Room";
import Messages from "../Messages/Messages";
import "./ForumPage.css";

const Forum = () => {
  return (
      <div className="main">
        <div className="col-1"><Room/></div>
        <div className="col-2"><Messages/></div>
      </div>
  );
};

export default Forum;
