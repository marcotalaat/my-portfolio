import React from "react";
import "./contact.css";

import { ContactInfo } from "./contactInfo";
import { Form } from "./form";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h1>Contact with me</h1>

        <div className="row">
          <div className="col-md-8 col-lg-4" data-aos="fade-left">
            <ContactInfo />
          </div>
          <div className="col-md-12 col-lg-8" data-aos="fade-up" data-aos-delay="50" >
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
