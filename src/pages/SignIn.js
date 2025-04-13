import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import loginImg from '../img/login.png'; 
import { useTranslation } from "react-i18next";
import '../i18n';
import axios from 'axios';

const SignIn = () => {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [validation, setValidation] = useState([]);

  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/home'); 
  };
  const goToLogin = () => {
    navigate('/login'); 
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/home'); 
    }
  }, [navigate]);

  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/register', {
        name: name,
        email: email,
        password: password,
      });
      localStorage.setItem('token', response.data.token);
      console.log(response.data);
      goToHome();
    } catch (error) {
      setValidation(error.response.data.errors);
    }
  };

  return (
    <div className="flex min-h-screen font-['Lexend_Deca']">
      {/* Left Form Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8 bg-gradient-to-b from-blue-100 to-blue-200">
        <div className="max-w-sm w-full">
          <h2 className="text-3xl font-bold text-blue-900 mb-2 text-center">{t('register:register_title')}</h2>
          <p className="text-sm text-gray-600 mb-6 text-center">{t('register:register_desc')}</p>

          <form className="space-y-4" onSubmit={registerHandler}>
            <div>
              <label className="block mb-1 text-sm capitalize">{t('register:register_name')}</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2 rounded-full bg-white/60 outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {validation.name && (
                <div className="text-red-500 text-xs mt-1">
                  {validation.name[0]}
                </div>
              )}
            </div>
            <div>
              <label className="block mb-1 text-sm">Email</label>
              <input
                type="email"
                placeholder="johndoe@gmail.com"
                className="w-full px-4 py-2 rounded-full bg-white/60 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {validation.email && (
                <div className="text-red-500 text-xs mt-1">
                  {validation.email[0]}
                </div>
              )}
            </div>
            <div>
              <label className="block mb-1 text-sm">{t('register:register_password')}</label>
              <input
                type="password"
                placeholder="password"
                className="w-full px-4 py-2 rounded-full bg-white/60 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {validation.password && (
                <div className="text-red-500 text-xs mt-1">
                  {validation.password[0]}
                </div>
              )}
            </div>
            <button className="bg-white text-blue-700 font-semibold px-6 py-2 rounded-full block mx-auto hover:bg-blue-100" type='submit'>
              {t('register:register_submit')}
            </button>
          </form>

          <p className="text-center text-sm mt-4 text-gray-600">
            {t('register:is_have_account')} <span className="text-blue-800 font-medium cursor-pointer" onClick={goToLogin}>{t('register:login_here')}</span>
          </p>
        </div>
      </div>

     {/* Layout Gambarnya */}
      <div className="hidden md:flex md:w-1/2 justify-center items-center bg-gradient-to-b from-blue-100 to-blue-200">
        <div className="rounded-2xl overflow-hidden shadow-lg mt-6 mb-6 mr-6">
          <img
            src={loginImg}
            alt="background"
            className="w-[150px] h-[150px] object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
