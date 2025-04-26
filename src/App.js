import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegisterForm from './components/RegisterForm';
import LocationFilter from './components/LocationFilter';
import webImage from './components/web.jpeg'; // ✅ Import your photo properly

function App() {
  const [activeTab, setActiveTab] = useState('home'); // default is home page

  return (
    <div>
      {/* Navbar */}
      <div className="navbar">
        <div className="nav-links">
          <button onClick={() => setActiveTab('home')} className="navButton">Home</button>
          <button onClick={() => setActiveTab('register')} className="navButton">Register</button>
          <button onClick={() => setActiveTab('location')} className="navButton">Find Location</button>
          <button onClick={() => setActiveTab('about')} className="navButton">About</button>
        </div>
      </div>

      {/* Main content */}
      <div className="overlay">
        {activeTab === 'home' && <HomePage />}
        {activeTab === 'register' && <RegisterForm />}
        {activeTab === 'location' && <LocationFilter />}
        {activeTab === 'about' && <AboutSection />}
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

function HomePage() {
  return (
    <div className="homeContainer">
      <img src={webImage} alt="Welcome" className="homeImage" />
    </div>
  );
}

function AboutSection() {
  const team = [
    { name: 'K. ARYA', roll: '23L31A05BO', phone: '6303776569', insta: 'Arya__15s' },
    { name: 'K. HARSHITH', roll: '23L31A05B6', phone: '6302625976', insta: 'Harshith._2' },
    { name: 'K. ANIL', roll: '23L31A05B4', phone: '9392948356', insta: 'Ani_l_19' },
    { name: 'G. PUNNETH', roll: '23L31A0586', phone: '9177152206', insta: 'Punneth_29' },
    { name: 'K. HARSHA', roll: '23L31A0599', phone: '8309766531', insta: 'harshavardhan_3_1' },
  ];

  return (
    <div className="aboutContainer">
      {team.map((member, index) => (
        <div key={index} className="card">
          <h2>{member.name}</h2>
          <p>Roll No: {member.roll}</p>
          <p>Phone: {member.phone}</p>
          <p>Instagram: {member.insta}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
