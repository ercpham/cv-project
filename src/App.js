import React from "react";
import GenInfo from "./components/GenInfo";
import EdInfo from "./components/EdInfo";
import JobInfo from "./components/JobInfo";
import NavBar from "./components/NavBar";
import IntroCard from "./components/IntroCard";
import About from "./components/About";

const App = (prop) => {
  return (
    <div className="fillScreen">
      <NavBar />
      <div className="narrowMargin">
        <IntroCard />
        <About />
      </div>
    </div>
  );
};

export default App;
