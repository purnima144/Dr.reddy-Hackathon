import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Results, fetchData } from "./Results";
import Navbar2 from "./Navbar2";

function Namegenerator({ setTerm }) {
  return (
    <>
      <Navbar2 />
      <div className="container">
        <h1 className="drug-gene">DRUG NAME GENERATOR</h1>
        <p className="drug-dis">
          <h3> generate brandable drug name using artificial intelligence</h3>
        </p>

        <form className="container1">
          <div className="left">
            <label for="fn">
              <b>Input:</b>
            </label>
            <input type="text" placeholder="Name" name="fn" id="fn" required />

            <label for="ln">
              <b>Country Name:</b>
            </label>
            <input
              type="text"
              placeholder="Country Name"
              name="ln"
              id="ln"
              required
            />
          </div>

          <div className="right">
            <select id="sel" name="sel">
              <option value="select">Choose</option>
              <option value="prefix">List of strings prefix</option>
              <option value="suffix">List of strings suffix</option>
            </select>
          </div>

          <button class="generate-btn" type="submit">
            Generate
          </button>
        </form>
      </div>
    </>
  );
}

export default Namegenerator;
