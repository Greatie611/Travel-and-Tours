import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const BookAppointment = (prop) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  }

  return (
    <div className="form-cont">
      <div className="form">
        <h2>Build Your Own Package</h2>
        <form onSubmit={prop.handleAppointmentForm}>
          <input type="text" placeholder='Enter Full name'
            value={prop.fullName}
            onChange={(e) => prop.setFullName(e.target.value)}
          />
          <input type="email" placeholder='Enter Email'
            value={prop.email}
            onChange={(e) => prop.setEmail(e.target.value)}
          />
          <input type="number" placeholder='Enter Phone Number'
            value={prop.phone}
            onChange={(e) => prop.setPhone(e.target.value)}
          />
          <div className="password-input-container">
          <input type={isPasswordVisible ? 'text' : 'password'}
           placeholder='Enter Password'
            value={prop.enterPassword}
            onChange={(e) => prop.setEnterPassword(e.target.value)}
             className="password-input"
          />
           <span
              onClick={togglePasswordVisibility}
              className="password-toggle-icon" 
            >
              {isPasswordVisible ? '👁️' : '👁️‍🗨️'}
             
            </span>
          </div>
          <div className="password-input-container">
          <input type={isPasswordVisible ? 'text' : 'password'}
           placeholder='Confirm Password'
            value={prop.confirmPassword}
            onChange={(e) => prop.setconfirmPassword(e.target.value)}
             className="password-input"
          />
           <span
              onClick={togglePasswordVisibility}
              className="password-toggle-icon" 
            >
              {isPasswordVisible ? '👁️' : '👁️‍🗨️'}
             
            </span>
          </div>


          <button className='btn-1' type="submit">Submit</button>
       
        </form>
        <Link to="/home">
        <button className='btn-2' type="submit">Go Back</button>
        </Link>
      </div>
    

    </div>

  )
}

export default BookAppointment 
