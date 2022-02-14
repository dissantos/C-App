import React from "react";
import { TextField } from "@material-ui/core";

const Messages = (props) => {
  const { mensagem, cor } = props;

  return (
    <div className="messages">
      <div className="category calendars">
        <p className= {`${cor}`}>
        {`${mensagem}`}
        </p>
      </div>
      
      
    </div>
  );
};

export default Messages;
