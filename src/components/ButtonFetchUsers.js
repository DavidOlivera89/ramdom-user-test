import React from "react";

const ButtonFetchUsers = props => {
  return (
    <button
      id="bttn_addUser"
      style={{
        padding: "10px 20px",
        border: "2px solid black",
        backgroundColor: "white",
        margin: 20
      }}
      onClick={props.click}
    >
      Add user
    </button>
  );
};

export default ButtonFetchUsers;
