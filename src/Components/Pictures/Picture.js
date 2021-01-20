import React, { Component } from "react";
import "./pictures_style.css";

const Picture = ({ photo }) => {
  return (
    <div className="picture">
      <img src={photo} alt="picture" />
    </div>
  );
};

export default Picture;