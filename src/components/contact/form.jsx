import React, { useRef } from "react";
import Input from "./input";
import "./contact.css";
import emailjs from "@emailjs/browser";

export const Form = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_vagt0pn', 'template_alfunel', e.target, 'olmh400L2LdpnRI3v')
      .then((result) => {
        setTimeout(() => {
          alert("Thank you for your message, I will contact with you soon!");
        }, 1000);
      }, (error) => {
        setTimeout(() => {
          alert("Error occure. try again, please.");
        }, 1000);
      });
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      encType="text/plain"
    >
      <div className="row">
        <div className="col-md-6">
          <Input
            type={"text"}
            label={"First Name"}
            attr={"first-name"}
            name={"first_name"}
          />
        </div>
        <div className="col-md-6">
          <Input
            type={"text"}
            label={"Last Name"}
            attr={"last-name"}
            name={"last_name"}
          />
        </div>
      </div>
      <Input type={"email"} label={"E-mail"} attr={"email"} name={"email"} />
      <Input
        type={"text"}
        label={"Subject"}
        attr={"subject"}
        name={"subject"}
      />

      <div className="field-wrapper">
        <label htmlFor="msg">Your Message</label>
        <textarea name="msg" id="msg" className="msg"></textarea>
      </div>

      <input type="submit" value="Send Message" className="submit" />
    </form>
  );
};
