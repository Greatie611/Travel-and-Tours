
import './App.css';
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import BookAppointment from './PAGES/BookAppointment';
import Home from './PAGES/HomePage';
import { useState } from 'react';
import About from './PAGES/About';
import Contact from './PAGES/Contact';
import UpcomingPackages from './PAGES/UpcomingPackages';
import Login from './PAGES/Login';
import SignUp from './PAGES/SignUp';
import ForgotPassword from './PAGES/ForgotPassword';
import ResetPassword from './PAGES/ResetPassword';
function App() {
 
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [enterPassword, setEnterPassword] = useState("")
  const [confirmPassword, setconfirmPassword] = useState("")
  const [loggedInUserName, setLoggedInUserName] = useState('')
  const [loginSuccess, setLoginSuccess] = useState(false)


  const handleAppointmentForm = (e) => {
    e.preventDefault()
    console.log(fullName, email, phone, enterPassword, confirmPassword)
    if (!fullName || !phone || !email || !enterPassword || !confirmPassword) {
      alert("Please fill out all fields")
      return false;
    }
    setFullName("")
    setEmail("")
    setPhone("")
    setEnterPassword("")
    setconfirmPassword("")
    return true;
  }

  const handleLoginForm = (e, navigate) => {
    e.preventDefault()
    console.log(fullName, enterPassword)
    if (!fullName|| !enterPassword) {
      alert("Please enter both name and password")
      return false;
    }
    setLoggedInUserName(fullName)
    setFullName("")
    setEnterPassword("")
    setLoginSuccess(true)
    navigate('/home')
    return true;
  }
  const handleSignUpForm = (e, navigate) => {
    e.preventDefault()
    console.log(fullName, email, phone, enterPassword, confirmPassword)
    if (!fullName || !email || !phone || !enterPassword || !confirmPassword) {
      alert("Please fill out all fields")
      return false;
    }
    if (enterPassword !== confirmPassword) {
      alert('Passwords do not match.');
      return false;
    }
    setFullName("")
    setEmail("")
    setPhone("")
    setEnterPassword("")
    setconfirmPassword("")
    setLoggedInUserName(fullName)
    navigate('/home')
    return true;
  }
  const handleForgotPassword = (e, navigate) => {
    e.preventDefault()
    console.log( email)
    if ( !email) {
      alert("Please enter your email.")
      return false;
    }
    setEmail("")
    navigate('/reset password')
    return true;
  }
  const handleResetPassword = (e, navigate) => {
    e.preventDefault()
    console.log(enterPassword, confirmPassword)
    if (!enterPassword  || !confirmPassword) {
      alert("Please enter and confirm your new password.")
      return false;
    }
    if (enterPassword !== confirmPassword) {
      alert('Passwords do not match');
      return false;
    }
    setEnterPassword("")
    setconfirmPassword("")
    navigate('/home');
    return true;

  }


  return (

    <div>


      <Routes>
        <Route path='/' element={<Login
          fullName={fullName}
          setFullName={setFullName}
          enterPassword={enterPassword}
          setEnterPassword={setEnterPassword}
          handleLoginForm={handleLoginForm}
          loginSuccess={loginSuccess}
        />} />
        <Route path='/signup' element={<SignUp
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
       handleSignUpForm={handleSignUpForm}

        />} />
        <Route path='/forgot password' element={<ForgotPassword 
         email={email}
         setEmail={setEmail}
        handleForgotPassword={handleForgotPassword}
        />} />
        <Route path='/reset password' element={<ResetPassword
         enterPassword={enterPassword}
         setEnterPassword={setEnterPassword}
         confirmPassword={confirmPassword}
         setconfirmPassword={setconfirmPassword}
         handleResetPassword={handleResetPassword}
        />} />
        <Route path='/home' element={<Home
        loggedInUserName={loggedInUserName}
        />} />
        <Route path='/form' element={
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
        } />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<UpcomingPackages />} />






      </Routes>

    </div>

  );
}

export default App;
