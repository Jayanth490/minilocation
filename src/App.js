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
     
        </div>
      </div>

      {/* Main content */}
      <div className="overlay">
        {activeTab === 'home' && <HomePage />}
        {activeTab === 'register' && <RegisterForm />}
        {activeTab === 'location' && <LocationFilter />}
       
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



export default App;
