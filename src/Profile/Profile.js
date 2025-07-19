import React, { useState } from 'react';
import './Profile.css';
import Navbar from '../navbar/Navbar';

const Profile = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    age: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(formData.email);


    const phoneRegex = /^\d{10}$/;
    const isPhoneValid = phoneRegex.test(formData.phone);

    if (formData.username && isEmailValid && isPhoneValid && formData.age) {
      setSubmittedData(formData);
      setFormData({
        username: '',
        email: '',
        phone: '',
        age: '',
      });
    } else {
      alert('Please fill out all required fields with valid data.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="center-container">
        <div className="card input-box">
          {submittedData ? (
            <div className="card">
              <h2>Submitted Data:</h2><br></br>
              <p>
                <strong>Username:</strong> {submittedData.username}
                <br /><br></br>
                <strong>Email:</strong> {submittedData.email}
                <br /><br></br>
                <strong>Phone:</strong> {submittedData.phone}
                <br /><br></br>
                <strong>Age:</strong> {submittedData.age}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label>
                <b>Username:</b>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <label>
                <b>Email:</b>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <label>
                <b>Phone:</b>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <label>
                <b>Age:</b>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <button type="submit">Submit</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
