import React, { Component } from "react";
import "./pictures_style.css";
import ski from "./img/ski.jpg";
import skate from "./img/skate.jpg";
import swimming from "./img/swimming.jpg";
import slade from "./img/slade.jpg";
import hot from "./img/hot_2.jpg";
import hokey from "./img/hokey_2.jpg";
import snowballs from "./img/snowballs.jpg";

import Picture from "./Picture";

const Pictures = () => {
  return (
    <div className="container">
      <h2>Зимове шаленство</h2>
      <div className="flex">
        <Picture photo={slade} />
        <Picture photo={ski} />
        <Picture photo={swimming} />
        <Picture photo={snowballs} />
      </div>
      <div className="flex-square">
        <Picture photo={skate} />
        <Picture photo={hot} />
        <Picture photo={hokey} />
      </div>
    </div>
  );
};

export default Pictures;
