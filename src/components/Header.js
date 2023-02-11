import React from "react";

const Header = () => {
  return (
    <div>
      <div className="header">
        <img src={require("../assets/done.png")} alt="" className="done" />
        <h1> My Todo-s</h1>
      </div>
    </div>
  );
};
export default Header;
