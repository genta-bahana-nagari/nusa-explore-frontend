import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import loginImg from '../img/login.png'; 
import { useTranslation } from "react-i18next";
import '../i18n';
import axios from 'axios';

const LoginPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate('/signin'); 
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [validation, setValidation] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/home');
    }
  }, [navigate]);

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        email: email,
        password: password,
      });
      localStorage.setItem("roles", JSON.stringify(response.data.role));
      localStorage.setItem('token', response.data.token);
      console.log(response.data);
      navigate('/home');
    } catch (error) {
      setValidation(error.response.data.errors);
    }
  };
  
  return (
    <div
      className="flex min-h-screen font-['Lexend_Deca']"
      style={{
        background: 'linear-gradient(to bottom, #FEFFEB, #91927D)',
      }}
    >
      {/* Gambar di Kiri */}
      <div className="hidden md:flex md:w-1/2 justify-center items-center">
        <div className="w-[90%] rounded-2xl overflow-hidden shadow-lg mt-6 mb-6 ml-6">
          <img
            src={loginImg}
            alt={t('login:image_alt')}
            className="w-[150px] h-[150px] object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* Form di Kanan */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8">
        <div className="max-w-sm w-full">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
            {t('login:title')}
          </h2>
          <p className="text-sm text-gray-700 mb-6 text-center">
            {t('login:description')}
          </p>

          <form className="space-y-4" onSubmit={loginHandler}>
            <div>
              <label className="block mb-1 text-sm text-gray-700">
                {t('login:email_label')}
              </label>
              <input
                type="email"
                placeholder={t('login:email_placeholder')}
                className="w-full px-4 py-2 rounded-full bg-white/80 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {validation.email && (
                <p className="text-red-500 text-xs mt-1">{validation.email[0]}</p>
              )}
            </div>
            <div>
              <label className="block mb-1 text-sm text-gray-700">
                {t('login:password_label')}
              </label>
              <input
                type="password"
                placeholder={t('login:password_placeholder')}
                className="w-full px-4 py-2 rounded-full bg-white/80 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {validation.password && (
                <p className="text-red-500 text-xs mt-1">{validation.password[0]}</p>
              )}
            </div>
            <button className="bg-white text-gray-800 font-semibold px-6 py-2 rounded-full block mx-auto hover:bg-gray-100" type="submit">
              {t('login:submit')}
            </button>
          </form>

          <p className="text-center text-sm mt-4 text-gray-700">
            {t('login:no_account')}{' '}
            <span className="text-gray-900 font-medium cursor-pointer hover:underline" onClick={goToRegister}>
              {t('login:register_here')}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
