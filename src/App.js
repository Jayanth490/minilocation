import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegisterForm from './components/RegisterForm';
import LocationFilter from './components/LocationFilter';
import webImage from './components/web.jpeg'; // ✅ Import your photo properly

function App() {
  const [activeTab, setActiveTab] = useState('home'); // default is home page
  const [isMenuOpen, setIsMenuOpen] = useState(false); // state for sliding menu

  return (
    <div>
      {/* Navbar */}
      <div className="navbar" style={styles.navbar}>
        <div className="nav-links" style={styles.navLinks}>
          <button onClick={() => setActiveTab('home')} style={styles.navButton}>Home</button>
          <button onClick={() => setActiveTab('register')} style={styles.navButton}>Register</button>
          <button onClick={() => setActiveTab('location')} style={styles.navButton}>Find Location</button>
          <button onClick={() => setActiveTab('about')} style={styles.navButton}>About</button>
        </div>
        {/* Hamburger Menu for mobile */}
        <button className="hamburger-btn" onClick={() => setIsMenuOpen(!isMenuOpen)} style={styles.hamburgerButton}>
          ☰
        </button>
      </div>

      {/* Side Navigation Menu (Slides in when isMenuOpen is true) */}
      <div style={{ ...styles.sideNav, width: isMenuOpen ? '250px' : '0' }}>
        <button onClick={() => setActiveTab('home')} style={styles.sideButton}>Home</button>
        <button onClick={() => setActiveTab('register')} style={styles.sideButton}>Register</button>
        <button onClick={() => setActiveTab('location')} style={styles.sideButton}>Find Location</button>
        <button onClick={() => setActiveTab('about')} style={styles.sideButton}>About</button>
      </div>

      {/* Main content */}
      <div className="overlay" style={{ ...styles.overlay, marginLeft: isMenuOpen ? '250px' : '0' }}>
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
    <div style={styles.homeContainer}>
      <img src={webImage} alt="Welcome" style={styles.homeImage} />
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
    <div style={styles.aboutContainer}>
      {team.map((member, index) => (
        <div key={index} style={styles.card}>
          <h2>{member.name}</h2>
          <p>Roll No: {member.roll}</p>
          <p>Phone: {member.phone}</p>
          <p>Instagram: {member.insta}</p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    background: '#4CAF50',
    margin: '0 auto',
    maxWidth: '800px',
    borderRadius: '10px',
    marginTop: '10px',
    position: 'relative',
  },
  navLinks: {
    display: 'flex',
    gap: '20px',
  },
  navButton: {
    padding: '10px 20px',
    color: 'white',
    background: '#4CAF50',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  hamburgerButton: {
    fontSize: '30px',
    color: 'white',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'none', // Hidden by default
  },
  sideNav: {
    position: 'fixed',
    top: '0',
    left: '0',
    height: '100%',
    backgroundColor: '#4CAF50',
    overflowX: 'hidden',
    transition: '0.5s',
    paddingTop: '60px',
    zIndex: '9999',
  },
  sideButton: {
    padding: '10px 20px',
    color: 'white',
    background: '#4CAF50',
    border: 'none',
    textAlign: 'center',
    fontSize: '18px',
    width: '100%',
    borderBottom: '1px solid #ddd',
    cursor: 'pointer',
  },
  overlay: {
    padding: '0',
    minHeight: 'calc(100vh - 80px)',
    backgroundColor: '#f0f2f5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: '0.5s',
  },
  homeContainer: {
    width: '100%',
    height: 'calc(100vh - 80px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginTop: '38px',
  },
  homeImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  aboutContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
  },
  card: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    width: '250px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
};

export default App;
