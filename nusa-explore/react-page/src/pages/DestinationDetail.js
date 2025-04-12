import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import destinasiImg from '../img/destinasi4.png'; // pakai gambar default
import { ArrowLeft } from 'lucide-react';
import { FaStar } from 'react-icons/fa';

const DestinationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

 
  const data = {
    1: {
      name: "Air Terjun Lorem",
      description: "Air terjun indah di tengah hutan yang tenang dan asri.",
      rating: 4.5,
      price: "15.000 - 35.000 IDR",
      hours: "08.00 AM - 05.00 PM",
      address: "Dusun Lorem, Kecamatan Ipsum, Kota Dolor"
    },
    2: {
      name: "Pantai Ipsum",
      description: "Pantai berpasir putih dengan pemandangan matahari terbenam yang memukau.",
      rating: 4.7,
      price: "Gratis",
      hours: "06.00 AM - 06.00 PM",
      address: "Desa Ipsum, Kabupaten Sit Amet"
    }
    // Tambahkan data lainnya kalau mau
  };

  const destination = data[id] || {
    name: "Destinasi Tidak Ditemukan",
    description: "Data tidak tersedia.",
    rating: 0,
    price: "-",
    hours: "-",
    address: "-"
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <button 
        className="flex items-center gap-2 text-teal-600 hover:underline mb-6"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="w-4 h-4" />
        Kembali
      </button>

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={destinasiImg} alt="Destination" className="w-full h-64 object-cover" />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{destination.name}</h2>
          <p className="text-gray-600 mb-4">{destination.description}</p>

          <div className="flex items-center gap-4 mb-4">
            <span className="flex items-center gap-1 text-yellow-500">
              <FaStar /> {destination.rating}
            </span>
            <span className="text-gray-500">{destination.price}</span>
            <span className="text-gray-500">{destination.hours}</span>
          </div>

          <p className="text-sm text-gray-500">{destination.address}</p>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
