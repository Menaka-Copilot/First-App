import React, { useState } from 'react'
import './Maincontent.css';
import styled from 'styled-components';

const Button = styled.button `
background: #edcd1f;
font-weight:700;
padding: 10px 20px;
width:150px;
`;

function Contactform () {
//    const [name, setName] = useState();
//    function handleChange(e) {
//     setName(e.target.value);
//    }
//    function handleSubmit(e) {
//     e.preventDefault();
//     alert(name);
//    }

//Multiple textbox
const [inputs, setInputs] = useState({});
//const [mytxt, setMytxt] = useState("");
const handleChange = (e) => {
    const name  = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]:value}));
    //setMytxt(e.target.value);
}
function handleSubmit(e) {
    e.prventDefault();
}
const [phone, setPhone] = useState('');

  // Formatter function to apply the (XXX) XXX-XXXX mask
  const formatPhoneNumber = (value) => {
    if (!value) return value;
    
    // Clean the input string: remove all non-digit characters
    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;

    // Return early if the length is small
    if (phoneNumberLength < 4) return phoneNumber;

    // Apply formatting logic as the length grows
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

  const handleInputChange = (e) => {
    const formattedInputValue = formatPhoneNumber(e.target.value);
    setPhone(formattedInputValue);
  };

  return (
    <section className='about-form-bg'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 col-12'>
                    <h2>About Us</h2>
                    <p>Engineering Contracting Company (ECC) is an independent construction company, pioneering how construction is done in the UAE, and has been instrumental in sculpting the skyline of the United Arab Emirates over the past five decades.</p>
                    <p>Established in 1975, ECC is one of the oldest contracting companies in the UAE and has spent the past half-century reshaping perspectives on what’s possible. Cultivating a reputation built on trust, delivery and a tireless dedication to innovation.</p>
                    <p>Our commitment is not just to progression but to a more sustainable and meaningful world.</p>
                </div>
                <div className='col-md-6 col-12'>
                    <h2>Contact Us</h2>
                    <div className='contact-form-bg'>
                        <form onSubmit={handleSubmit}>
                            <label>First Name</label>
                            <input type='text' name='firstname' value={inputs.firstname} onChange={handleChange} className='form-control' placeholder='First Name' />
                            <label>Last Name</label>
                            <input type='text' name='lastname' value={inputs.lastname} onChange={handleChange} className='form-control' placeholder='Last Name' />
                            <label>Phone Number</label>
                            <input type='tel' name='phoneno' value={phone} className='form-control' placeholder='(123) 456-7890' onChange={handleInputChange} />
                            <label>Comments</label>
                            <textarea name='description' value={inputs.textarea} onChange={handleChange} className='form-control'></textarea>
                            <Button type='submit'>Submit</Button>
                        </form> 
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contactform
