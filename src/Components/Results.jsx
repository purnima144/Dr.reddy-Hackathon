import React from "react";
import { drugData } from "./Data";
import Navbar3 from "./Navbar3";

export const Results = () => {
  return (
    <>
      <Navbar3 />
      <HomePageHeader />

      <div className="code">
        <p>Country: India</p>
        <p>Drug Code: 1287</p>
        <p>Input config: Molecular and Prefix</p>
      </div>
      <div className="data-container">
        {drugData.map((details, index) => {
          return (
            <div className="inner_container">
              <h2 className="inner1">{details.name}</h2>
              <h5 className="inner2">{details.content}</h5>
            </div>
          );
        })}
      </div>
    </>
  );
};

const HomePageHeader = () => {
  return (
    <>
      <header className="header">
        <p className="drug-name">Suggested Drug Names</p>
        <p className="content">Dynamic, Pristine and Edgy</p>
      </header>
    </>
  );
};
