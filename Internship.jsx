import React, { useState } from 'react'
import './internship.css'

export default function MyForm() {
    const [agreeToCode, setAgreeToCode] = useState(false);
  const [joinCommunity, setJoinCommunity] = useState(false);

  const handleCodeChange = (event) => {
    setAgreeToCode(event.target.checked);
  };

  const handleCommunityChange = (event) => {
    setJoinCommunity(event.target.checked);
  };
    return (
        <div className='outermost'>
            <img src="https://static.wixstatic.com/media/66b930_6accd6320b994be3a331e7911cd8f9cb~mv2.jpg/v1/fill/w_210,h_235,al_c,lg_1,q_80,enc_auto/sup.jpg" alt="internship" className='image' />
        
        <div className='form'>
        <form action="" method="POST">
            
            <label htmlFor="firstname">
                <h3>First Name</h3>
                <input type="text" id="firstname" name="firstname" required placeholder="Enter your first name" />
            </label>
            <br />

            
            <label htmlFor="lastname">
                <h3>Last Name</h3>
                <input type="text" id="lastname" name="lastname" required placeholder="Enter your last name" />
            </label>
            <br />

           
            <label htmlFor="email">
                <h3>Email</h3>
                <input type="email" id="email" name="email" required placeholder="Enter your email" />
            </label>
            <br />

           
            <label htmlFor="password">
                <h3>Password</h3>
                <input type="password" id="password" name="password" required placeholder="Enter your password" />
            </label>
            <br />

            
            <label htmlFor="mobileno">
                <h3>Mobile Number</h3>
                <input type="tel" id="mobileno" name="mobileno" required placeholder="Enter your mobile number" />
            </label>
            <br />

            <label htmlFor="code-of-conduct">
        <input
          type="checkbox"
          id="code-of-conduct"
          name="code-of-conduct"
          checked={agreeToCode}
          onChange={handleCodeChange}
        />
        <span>I agree to the Code of Conduct</span>
      </label>
      <br />

      {/* Checkbox for Join the Community */}
      <label htmlFor="join-community">
        <input
          type="checkbox"
          id="join-community"
          name="join-community"
          checked={joinCommunity}
          onChange={handleCommunityChange}
        />
        <span>I join the community</span>
      </label>
      <br />

            
            <button type="submit">Submit</button>
        </form>
        </div>

        </div>
    );
}
