import React from 'react'
import "./contact.css";

const Input = ({type, label, attr, name}) => {
    return(
        <div className='field-wrapper mb-5'>
            <label htmlFor={attr}>{label}</label>
            <input type={type} id={attr} className={attr} name={name} required />
        </div>
    )
}
export default Input;