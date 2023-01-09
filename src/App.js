import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Generator from "./Components/Generator";
import Services from "./Components/Services";
import Footer from "./Components/Footer";

import Namegenerator from "./Components/Namegenerator";
import { Results } from "./Components/Results";

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Footer /> */}
      <Namegenerator /> 
       {/* <Results /> */}
    </div>
  );
}

export default App;
