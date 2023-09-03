import React, { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar/NavbarDesktop/navbar";
import Landing from "./components/landing/landing";
import About from "./components/About/about";
import Choose from "./components/About/choose-me";
import Works from "./components/Works/works";
import Reviews from "./components/reviews/reviews";
import Contact from "./components/contact/contact";
import { Footer } from "./components/Footer/footer";
import NavMobile from "./components/Navbar/NavbarMobile/navMobile";
import AboutMobile from "./components/About/aboutMobile";
import AOS from "aos";
import "aos/dist/aos.css";
import Admin from "./components/Admin/admin";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
