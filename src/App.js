import React from "react";
import GenInfo from "./components/GenInfo";
import EdInfo from "./components/EdInfo"
import JobInfo from "./components/JobInfo"

const App = (prop) => {
  return (
    <div className = "fillScreen">
      <GenInfo />
      <EdInfo />
      <JobInfo />
    </div>
  );
};

export default App;
