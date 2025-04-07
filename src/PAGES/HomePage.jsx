import React from 'react'
import { useState } from 'react'
import BookAppointment from './BookAppointment'
import { Link } from 'react-router-dom'

const Home = (prop) => {
    const [formToshow, setFormToshow] = useState(null)
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [enterPassword, setEnterPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")
   
    const handleAppointmentForm = (e) => {
        e.preventDefault()
        console.log(fullName, email, phone, enterPassword, confirmPassword)
        if (!fullName || !phone || !email || !enterPassword || !confirmPassword) {
            alert("Please fill out all fields")
        }
    }
    
    return (

        <div>
         
            <div className="login-signup">
                <h2 className='welcome' >{prop.loggedInUserName ?
                 <h3>Welcome, {prop.loggedInUserName}!</h3> :
                    <Link
                        to="/">
                        <button className='btn' type="submit">Login</button>
                    </Link>
                }
                </h2>
                <h2 className='welcome' >{prop.loggedInUserName ?  <Link
                        to="/">
                        <button className='btn' type="submit">Log Out</button>
                    </Link> :
                    <Link
                        to="/signup">
                        <button className='btn' type="submit">Sign Up</button>
                    </Link>
                }</h2>

                

            </div>

            <div className="header">

                <h1>Travel</h1>
                <div className="nav">
                    <nav>
                        <ul>

                            <Link to="/home">
                                <h3>Home</h3>
                            </Link>
                            <Link to="/about">
                                <h3>About</h3>
                            </Link>


                            <h3>
                                Services
                                <select name="" id="services">
                                    <option value="">Honeymoon Packages</option>
                                    <option value="">Tours Packages</option>
                                    <option value="">Musical events</option>
                                    <option value="">Build Package</option>
                                </select>
                            </h3>
                            <Link to="/services ">
                                <h3>Upcoming Packages</h3>
                            </Link>
                        </ul>
                    </nav>
                </div>

                <Link
                    to="/contact">
                    <button className='btn' type="submit">Get in touch</button>
                </Link>




            </div>

            <div className="matter">
                <h1>No matter where <br />you're going to, we'll <br />take you there.</h1>
            </div>

            <div className="sub3">
                <h4>Where to?</h4>
                <h4>Travel type  </h4>
                <h4>Duration</h4>

                <Link to="/form">
                    <button className='btn'
                        type="submit">Submit
                    </button></Link>


            </div>

            <div className="image">
              
            </div>

            {  
                formToshow == "contact" ?
                    <BookAppointment
                        fullName={fullName}
                        setFullName={setFullName}
                        email={email}
                        setEmail={setEmail}
                        phone={phone}
                        setPhone={setPhone}
                        enterPassword={enterPassword}
                        setEnterPassword={setEnterPassword}
                        confirmPassword={confirmPassword}
                        setconfirmPassword={setconfirmPassword}
                        handleAppointmentForm={handleAppointmentForm}


                    />
                    : null
            }





        </div>
    )
}

export default Home

