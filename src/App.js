import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegisterForm from './components/RegisterForm';
import LocationFilter from './components/LocationFilter';

function App() {
  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />
      <RegisterForm />
      <LocationFilter />
    </div>
  );
}

export default App;
