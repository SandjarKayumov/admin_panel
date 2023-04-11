import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div>
      <div
        className="lds-roller"
        style={{ display: "flex", justifyContent: "center", margin: ".5rem" }}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
