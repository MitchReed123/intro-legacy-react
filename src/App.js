import React from "react";
import "./App.css";

import FunctionalComponent from "./components/functional/functionalComponent";
import ClassComponent from "./components/class/classComponent";
import Counter from "./components/counter/counter";
import Fetch from "./components/fetch/fetch";

function App() {
  return (
    <div className="App">
      {/* <FunctionalComponent />
      <ClassComponent /> */}
      <Counter />
      <Fetch />
    </div>
  );
}

export default App;
