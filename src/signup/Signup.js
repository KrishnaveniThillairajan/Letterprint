import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Perform signup logic
    // Once signup is successful, navigate to the "/Text" route
    navigate('/Text');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login action here
    // Once login is successful, navigate to the login route
    navigate('/Login');
  };

  return (
    <div>
      <main>
        <section className="section-login">
          <div className="section-main">
            <div className="section-login-1">
              <div className="section-login-1-main">
                <h1 className="section-login-1-title">Gradie</h1>
                <p className="section-login-1-text">Experience the beautiful simple note-taking app on the web today.</p>
                <div className="section-login-1-img">
                  <img src="https://img.freepik.com/premium-vector/young-woman-enjoy-sitting-reading-book-hygge-concept-vector-illustration_194708-2078.jpg" alt=""/>
                </div>
              </div>
            </div>
            <div className="section-login-2">
              <div className="section-login-2-main">
                <h1 className="section-login-2-title">Signup</h1>
                <form className="section-login-2-form" onSubmit={handleSignup}>
                  <div className="login-form-1">
                    <label htmlFor="input-email">Email</label>
                    <input type="text" id="input-email" placeholder="john@example.com" required/>
                  </div>
                  <div className="login-form-2">
                    <label htmlFor="input-name">Full Name</label>
                    <input type="text" id="input-name" placeholder="John Doe" required/>
                  </div>
                  <div className="login-form-3">
                    <label htmlFor="input-password">Password</label>
                    <input type="password" id="input-password" placeholder="At least 8 characters" required/>
                  </div>
                  <div className="login-form-4">
                    <input type="checkbox" id="input-checkbox"/>
                    <p>By creating an account, you agree to the <a href="#">Terms & Conditions.</a></p>
                  </div>
                  <div className="login-form-submit-btn">
                    <button type='submit'>Create an Account</button>
                  </div>
                  <div className="login-form-5">
                    <p>Already have an account? <button onClick={handleLogin}>Login</button></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Signup;
