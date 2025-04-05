import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const BookAppointment = (prop) => {
  

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
          <input type="password" placeholder='Enter Password'
            value={prop.enterPassword}
            onChange={(e) => prop.setEnterPassword(e.target.value)}
          />
          <input type="password" placeholder='Confirm Password'
            value={prop.confirmPassword}
            onChange={(e) => prop.setconfirmPassword(e.target.value)}
          />


          <button className='btn-1' type="submit">Submit</button>
       
        </form>
        <Link to="/home">
        <button className='btn-2' type="submit">Go Back Home</button>
        </Link>
      </div>
    

    </div>

  )
}

export default BookAppointment 
