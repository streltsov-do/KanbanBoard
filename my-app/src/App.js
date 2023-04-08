import React from "react";
import './App.css'

import AwesomeHeader  from "./components/1_header/AwesomeHeader";
import AwesomeMain    from "./components/2_main/AwesomeMain";
import AwesomeFooter  from "./components/3_footer/AwesomeFooter";

import dataMock from "./components/dataMock";

function App() {
  return (
    <>
      <AwesomeHeader/>
      <AwesomeMain prop={dataMock}/>
      <AwesomeFooter prop={dataMock}/>
    </>
  );
}

export default App;
