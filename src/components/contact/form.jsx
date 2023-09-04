import React from 'react'
import Input from "./input";
import "./contact.css";

export const Form = () => {
  const submit = () => {
    setTimeout(() => {
      alert("Thank you for your message!");
    }, 1000)
  }
  return (
    <form action="mailto:marcotalaat355@yahoo.com" method="POST" onSubmit={submit} encType='text/plain'>
      <div className="row">
        <div className="col-md-6">
          <Input type={"text"} label={"First Name"} attr={"first-name"} name={"first_name"} />
        </div>
        <div className="col-md-6">
          <Input type={"text"} label={"Last Name"} attr={"last-name"} name={"last_name"} />
        </div>
      </div>
        <Input type={"email"} label={"E-mail"} attr={"email"} name={"email"} />
        <Input type={"text"} label={"Subject"} attr={"subject"} name={"subject"} />

        <div className='field-wrapper'>
            <label htmlFor="msg" >Your Message</label>
            <textarea name="msg" id="msg" className="msg"></textarea>
        </div>

        <input type="submit" value="Send Message" className="submit"/>
    </form>
  );
};
