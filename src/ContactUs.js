import React from 'react'
import { useState} from 'react'
import './Contact.css'

export default function Contactus(){
    const [Name , setName] = useState('');
    const [Email ,setEmail] = useState('');
    const [mobileno ,setmobileno ] = useState('');
    const [ssage ,setMessage] = useState('');

    function handle(event){
        setName(event.target.value);
    }

    function email(event){
        setEmail(event.target.value);
    }
    function mobile(event){
        setmobileno(event.target.value);
    }

    function essage(event){
        setMessage(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault(); 
        
        console.log("Name:", Name);
        console.log("Email:", Email);
        console.log("Mobile Number:", mobileno);
        console.log("Message:", ssage);
      }
    return (
        <div className='outermost'>
        <form onSubmit={handleSubmit}>
            <h1>Contact Us</h1>
          <label>
            <h1>NAME*</h1>
            <input
              type="text"
              value={Name}
              onChange={handle}
              placeholder="Type here..."
            />
          </label>

          <label>

            <h1>Email*</h1>
            <input
              type="email"
              value={Email}
              onChange={email}
              placeholder="Type here..."
            />
          </label>

          <label>

            <h1>Mobile Number*</h1>
            <input
              type="tel"
              value={mobileno}
              onChange={mobile}
              placeholder="Type here..."
            />
          </label>

          <label>
            <h1>Message*</h1>
            <input
              type="text"
              value={ssage}
              onChange={essage}
              placeholder="Type here..."
            />
          </label>

          <button type="submit">Submit</button> 
          </form>
          <h3>Email. mastersolisinfotech@gmail.com</h3>
          <h3>Email. mastersolisinfotech@gmail.com</h3>
          <h3>Tel. 944-0965-396</h3>
          <h3>Hebbal, Bangalore, Karnataka, IN</h3>
        </div>
      );
}