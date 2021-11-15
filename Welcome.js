import React from "react";
import "../Welcome/Welcome.css"

const Welcome = ({ user }) => {
  return (
    <center>
      {user === "" ?
       <div className="greeting">
           <h1>Welcome to <span>ABC Media</span></h1>
           <h2>Please Login 😇</h2> 
       </div>
       : ''}
    </center>
  );
};

export default Welcome;
