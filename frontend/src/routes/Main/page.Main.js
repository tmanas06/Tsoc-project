import React from 'react';
import { useNavigate } from 'react-router-dom';
import './app.css';

const Main = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };

  const navigateToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Deep Revenue Sharing System</h1>
        <p className="text-lg text-gray-700">Automate your multi-level marketing revenue sharing seamlessly.</p>
      </div>
      <div>
        <button onClick={navigateToLogin} className="bg-blue-500 text-white px-6 py-2 rounded-full mr-4">
          Login
        </button>
        <button onClick={navigateToRegister} className="bg-green-500 text-white px-6 py-2 rounded-full">
          Register
        </button>
      </div>
    </div>
  );
};

export default Main;
