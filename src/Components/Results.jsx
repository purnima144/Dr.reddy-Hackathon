import React from "react";
import { drugData } from "./Data";
import Navbar3 from "./Navbar3";
import ResultPageHeader from "./ResultPageHeader"
import { Component } from "react";

export default function Results() {
  return (
    <div>
      <Navbar3 />
      <ResultPageHeader />

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
    </div>
  );
}


