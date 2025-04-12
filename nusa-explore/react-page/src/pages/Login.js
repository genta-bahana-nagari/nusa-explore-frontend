import React from 'react';
import loginImg from '../img/login.png'; 

const LoginPage = () => {
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
            alt="background"
            className="w-[150px] h-[150px] object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* Form di Kanan */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8">
        <div className="max-w-sm w-full">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Login</h2>
          <p className="text-sm text-gray-700 mb-6 text-center">
            Masuk ke akun untuk menggunakan aplikasi
          </p>

          <form className="space-y-4">
            <div>
              <label className="block mb-1 text-sm text-gray-700">Email</label>
              <input
                type="email"
                placeholder="johndoe@gmail.com"
                className="w-full px-4 py-2 rounded-full bg-white/80 outline-none"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-gray-700">Password</label>
              <input
                type="password"
                placeholder="password"
                className="w-full px-4 py-2 rounded-full bg-white/80 outline-none"
              />
            </div>
            <button className="bg-white text-gray-800 font-semibold px-6 py-2 rounded-full block mx-auto hover:bg-gray-100">
              Masuk
            </button>
          </form>

          <p className="text-center text-sm mt-4 text-gray-700">
            Belum punya akun?{' '}
            <span className="text-gray-900 font-medium cursor-pointer hover:underline">
              Daftar disini
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
