import React, { useState } from 'react'
import SignUpForm from '../../components/signup_form'
import Login from '../../components/login_form'
import './index.css';

const Auth = (props) => {
  let { setUser } = props;
  // let setUser = props.setUser;
  const [isSignup, setIsSignup] = useState(true);

  const handleButtonClick = () => {
    setIsSignup(isSignup ? false : true);
  }

  return (
    <section className="auth-page">
      <div className="logo-container">
        <div>Logo</div>
        <div className="login-button" onClick={handleButtonClick}>{isSignup ? "Login" : "Sign up"}</div>
      </div>

      {isSignup ?
      <SignUpForm />
      :
      <Login setUser={setUser}/>
      }
      
    </section>
  )
}

export default Auth