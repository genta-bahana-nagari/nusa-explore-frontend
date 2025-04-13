import React from "react";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
        <div className="text-center">
          <div className="text-6xl mb-4">🚫</div>
          <h1 className="text-2xl font-bold text-red-600 mb-4">Akses Ditolak</h1>
          <p className="text-gray-700">Kamu tidak memiliki izin untuk mengakses halaman ini.</p>
          <button 
            className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            onClick={() => navigate('/home')}
          >
            Kembali
          </button>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;