import React from "react";
import Clock from "./Clock"

function Message(props) {
  return (
    <div>
      <Clock/>
      <h1>Hello I am {props.ad}</h1>
    </div>
  );
}

export default Message;
