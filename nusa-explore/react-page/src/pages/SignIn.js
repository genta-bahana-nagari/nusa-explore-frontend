import React from 'react';
import loginImg from '../img/login.png'; 

const SignIn = () => {
  return (
    <div className="flex min-h-screen font-['Lexend_Deca']">
      {/* Left Form Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8 bg-gradient-to-b from-blue-100 to-blue-200">
        <div className="max-w-sm w-full">
          <h2 className="text-3xl font-bold text-blue-900 mb-2 text-center">Create an Account</h2>
          <p className="text-sm text-gray-600 mb-6 text-center">Daftar untuk mendapatkan pengalaman berlibur terbaik</p>

          <form className="space-y-4">
            <div>
              <label className="block mb-1 text-sm">Username</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2 rounded-full bg-white/60 outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Email</label>
              <input
                type="email"
                placeholder="johndoe@gmail.com"
                className="w-full px-4 py-2 rounded-full bg-white/60 outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm">Password</label>
              <input
                type="password"
                placeholder="password"
                className="w-full px-4 py-2 rounded-full bg-white/60 outline-none"
              />
            </div>
            <button className="bg-white text-blue-700 font-semibold px-6 py-2 rounded-full block mx-auto hover:bg-blue-100">
              Daftar
            </button>
          </form>

          <p className="text-center text-sm mt-4 text-gray-600">
            Sudah punya akun? <span className="text-blue-800 font-medium cursor-pointer">Log In</span>
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
