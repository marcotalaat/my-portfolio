import React from 'react';
import bkgUrl from './../../img/contact-us-bkg.png';
import { motion as m } from 'framer-motion';
import { Social } from './socialLinks';

export const ContactInfo = () => {
  const background = {
    backgroundImage: `url(${bkgUrl})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  }
    return(
        <m.div className="contact-info" style={background}>
        <m.h3>Contact Information</m.h3>
        <m.p>You can contact with me vai: </m.p>
        <m.ul>
          <m.li>
            <m.a href="tel: +201202937338">0120 293 7338</m.a>
          </m.li>
          <m.li>
            <m.a href="mailto: marcotalaat355@yahoo.com">
              marcotalaat355@yahoo.com
            </m.a>
          </m.li>
        </m.ul>

        <Social />

      </m.div>
    )
}