import React from "react";
import Single from "./single-work";
import './works.css'

import lacostaCover from "./../../img/works/lacosta/lacosta-cover.webp";
import lacostaFull from "./../../img/works/lacosta/lacosta-full.webp";

import powerfulCover from "./../../img/works/powerful/powerful-cover.webp";
import powerfulFull from "./../../img/works/powerful/powerfull-full.webp";

import katamerosCover from "./../../img/works/katameros/katameros-cover.webp";
import katamerosFull from "./../../img/works/katameros/katameros-full.webp";

import globeCover from "./../../img/works/globe/globe-cover.webp";
import globeFull from "./../../img/works/globe/globe-full.webp";

import overseasCard from "./../../img/works/overseas/overseas.webp";
import overseasFull from "./../../img/works/overseas/overseas-full.webp";


const Works = () => {
  const works = [
    {
      id: 1,
      title: "Lacosta Realestate",
      description: `Real estate multilanguage website, using custom ajax to make
            search criteria when you choose a developer in the developer
            menu, it will filter the projects menu according to the
            developer chosen I make it custom using ajax.`,
      url: "https://lacosta-realestate.com/",
      imgCover: lacostaCover,
      imgFull: lacostaFull
    },
    {
      id: 2,
      title: "Powerful",
      description: `For powerful international company contains a custom post
      type I made it using PHP code, not plugins this reduced number
      of plugins lead to enhanced performence of the website.`,
      url: "https://powerful.com.eg/",
      imgCover: powerfulCover,
      imgFull: powerfulFull
    },
    {
      id: 3,
      title: "Katameros",
      description: `A blog website contains a custom post
      type I made it using PHP code, not plugins this reduced number
      of plugins lead to enhanced performence of the website.`,
      url: "https://new.katameros.bible/",
      imgCover: katamerosCover,
      imgFull: katamerosFull
    },
    {
      id: 4,
      title: "Expertise - Globe International",
      description: `A form created from scratch using PHP and MySQL contains:
      admin page has full control and displays registered users with
      their details, you can accept or ignore registered users and it will
      send a custom email for users if accepted or ignored
      automatically, it also contains filter users upon anything. if you
      want to send a special certificate, for example, you can upload all
      certificates at one time and it will send for each one
      automatically based on ID or Phone number.`,
      url: "https://expertise.globe-international.com/",
      imgCover: globeCover,
      imgFull: globeFull
    },
    {
      id: 5,
      title: "Overseas",
      description: `A blog website contains a custom post
      type I made it using PHP code, not plugins this reduced number
      of plugins lead to enhanced performence of the website.`,
      url: "https://occ-egy.com/",
      imgCover: overseasCard,
      imgFull: overseasFull
    }
  ];


  return (
    <section className="works" id="works">
      <div className="container">
        <h1>My Works</h1>
        <div className="row">
            <Single works={works} />
        </div>
      </div>
    </section>
  );
};
export default Works;
