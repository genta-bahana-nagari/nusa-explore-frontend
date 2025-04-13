import React from 'react';
import homeImg from '../img/home.png'; 
import destinasi1 from '../img/destinasi1.png';
import destinasi2 from '../img/destinasi2.png';
import destinasi3 from '../img/destinasi3.png';
import rekomendasiImg from '../img/rekomendasi.png';
import user from '../img/user.png';

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen font-['Lexend_Deca']">

{/* HERO SECTION */}
<section
  className="relative h-[80vh] bg-cover bg-center"
  style={{ backgroundImage: `url(${homeImg})` }}
>
  {/* Overlay Hitam Transparan */}
  <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-4">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">NusaExplore</h1>
    <p className="text-lg md:text-xl max-w-xl mb-6">
      Jelajahi keindahan Nusantara dengan rekomendasi cerdas dari
      NusaExplore. Temukan destinasi terbaik, dapatkan informasi akurat,
      dan nikmati perjalanan tanpa batas.
    </p>

    {/* FORM PENCARIAN */}
    <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md max-w-xl">
      <input
        type="text"
        placeholder="Masukkan Destinasi"
        className="flex-1 px-4 py-2 rounded-full outline-none text-black bg-transparent"
      />
      <button className="px-3 text-white bg-blue-600 hover:bg-blue-700 rounded-full">
        🔍
      </button>
      <select className="ml-4 px-4 py-2 rounded-full outline-none text-black bg-white">
        <option>Kategori</option>
        <option>Pantai</option>
        <option>Gunung</option>
        <option>Kota</option>
      </select>
    </div>
  </div>

  {/* WAVE di bawah Hero Section */}
  <svg
    className="absolute bottom-0 left-0 w-full"
    viewBox="0 0 1440 320"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#fff"
      fillOpacity="1"
      d="M0,160L60,160C120,160,240,160,360,154.7C480,149,600,139,720,144C840,149,960,171,1080,165.3C1200,160,1320,128,1380,112L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
    ></path>
  </svg>
</section>


      {/* Fitur */}
      <section className="py-10 px-6 md:px-20 grid gap-4 md:grid-cols-3 bg-white shadow-md">
        <FeatureCard title="Informasi Akurat & Terverifikasi" desc="Dapatkan informasi terpercaya dari sumber terpercaya untuk liburanmu." />
        <FeatureCard title="Rekomendasi AI Cerdas" desc="Temukan tempat terbaik berdasarkan preferensimu." />
        <FeatureCard title="Custom Rencana Perjalanan" desc="Rancang perjalananmu sesuai keinginan dan waktu." />
      </section>

      {/* Destinasi Unggulan */}
      <section className="py-12 px-6 md:px-20 bg-gray-50">
        <h2 className="text-2xl font-bold mb-6 text-center">Destinasi Unggulan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 shadow-md hover:shadow-lg transition duration-300">
          <DestinasiCard image={destinasi1} title="Pantai Lorem Ipsum" />
          <DestinasiCard image={destinasi2} title="Pura Lorem Ipsum" />
          <DestinasiCard image={destinasi3} title="Puncak Lorem Ipsum" />
        </div>
      </section>

      {/* Langkah Mudah */}
      <section className="py-12 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between bg-gray-50 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Jelajahi Keindahan Nusantara dengan NusaExplore</h2>
          <p className="mb-4">Hanya dengan 3 langkah cepat</p>
          <ul className="list-disc ml-5 space-y-2">
            <li>Daftar Akun</li>
            <li>Login</li>
            <li>Explore sepuasnya</li>
          </ul>
          <button className="mt-6 px-6 py-2 bg-white text-blue-700 border border-blue-700 rounded-full hover:bg-blue-100">
            Daftar
          </button>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-blue-50 px-6 py-4 rounded-xl text-center shadow-md">
            <h3 className="text-2xl font-bold text-blue-700">4.9</h3>
            <p className="text-sm text-gray-600">Rekomendasi AI</p>
          </div>
          <img src={rekomendasiImg} alt="rekomendasi" className="w-40 mt-4 rounded-xl shadow-lg" />
        </div>
      </section>

{/* Testimoni */}
<section className="bg-gradient-to-b from-[#FEFFEB] to-[#91927D] py-12 px-6 md:px-20 bg-blue-50">
  <div className="bg-white rounded-xl p-6 shadow-md max-w-md mx-auto mb-10">
    <div className="flex items-center mb-4">
      <img src={user} alt="User" className="w-12 h-12 rounded-full mr-4" />
      <div>
        <h4 className="font-semibold">John Doe</h4>
        <p className="text-sm text-gray-500">Traveller Enthusiast</p>
      </div>
    </div>
    <p className="text-gray-700 text-sm">NusaExplore sangat membantu merencanakan liburan saya. UI-nya keren dan tempat-tempat yang disarankan luar biasa!</p>
  </div>

  {/* Form Tambah Testimoni */}
  <div className="bg-white rounded-xl p-6 shadow-md max-w-md mx-auto">
    <h3 className="text-lg font-semibold mb-4 text-center">Bagikan Pengalamanmu!</h3>
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Nama"
        className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-300"
      />
      <input
        type="text"
        placeholder="Profesi"
        className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-300"
      />
      <textarea
        placeholder="Tuliskan testimoni kamu..."
        rows="4"
        className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none resize-none focus:ring-2 focus:ring-blue-300"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
      >
        Kirim Testimoni
      </button>
    </form>
  </div>
</section>


    </div>
  );
};

// Komponen Kecil
const FeatureCard = ({ title, desc }) => (
  <div className="bg-white p-4 rounded-xl shadow-md">
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{desc}</p>
  </div>
);

const DestinasiCard = ({ image, title }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden">
    <img src={image} alt={title} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-gray-500">Lihat semua tempat serupa →</p>
    </div>
  </div>
);

export default LandingPage;
