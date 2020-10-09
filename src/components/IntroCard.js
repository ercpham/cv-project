import React from "react";
import pfp from "./pfp.jpg";

const IntroCard = (props) => {
  return (
    <div className = "introCard">
      <img className = "pfp" src={pfp} alt="Profile" />
      <h2>
        My name is Eric Pham.
      </h2>
    </div>
  );
};

export default IntroCard;
