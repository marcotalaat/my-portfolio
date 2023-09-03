import React, { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./Navbar/NavbarDesktop/navbar";
import Landing from "./landing/landing";
import About from "./About/about";
import Choose from "./About/choose-me";
import Works from "./Works/works";
import Reviews from "./reviews/reviews";
import Contact from "./contact/contact";
import { Footer } from "./Footer/footer";
import NavMobile from "./Navbar/NavbarMobile/navMobile";
import AboutMobile from "./About/aboutMobile";
import AOS from "aos";
import "aos/dist/aos.css";
import Admin from "./Admin/admin";

function App() {
  const state = {
    cv: { id: 1, count: 0 },
  };
  AOS.init({
    duration: 500,
  });

  const [nav, setNav] = useState(true);
  const [about, setAbout] = useState(true);

  useEffect(() => {
    window.addEventListener("load", function () {
      if (this.innerWidth <= 1000) {
        setNav(true);
        setAbout(true);
      } else {
        setNav(false);
        setAbout(false);
      }
    });
  }, []);

  const showNav = nav ? <NavMobile /> : <Navbar />;
  const showAbout = about ? <AboutMobile /> : <About />;

  const showAdmin =
    window.location.href === "http://localhost:3000/admin3391" ? <Admin /> : null;

  return (
    <>
      {showAdmin}
      {showNav}

      <Landing countCv={state.cv} />
      {showAbout}
      <Choose />
      <Works />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
