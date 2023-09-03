import React, { useEffect, useState } from "react";
import "./App.css";

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


  return (
    <>
      <h1>Welcome</h1>
    </>
  );
}

export default App;
