import React from "react";
import { FaUser } from "react-icons/fa";
import { WiStars } from "react-icons/wi";
import test from "../../assets/pexels-deeonederer-1697494.jpg";

const Step = () => {
  return (
    <section className="py-16 px-6 md:px-18 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
        {/* Kiri: Text & Langkah */}
        <div className="max-w-lg w-full text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold text-sky-900 mb-3 leading-snug">
            Jelajahi keindahan Nusantara dengan <br />
            <span className="text-sky-800">NusaExplore</span>
          </h2>
          <p className="text-gray-600 text-lg mb-6">
            Hanya dengan 3 langkah cepat
          </p>

          <ul className="space-y-4 mb-6 sm:justify-center">
            {["Daftar Akun", "Login", "Eksplore sepuasnya"].map(
              (item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-baseline gap-3"
                >
                  <div className="w-7 h-7 bg-teal-600 text-white rounded-full flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                  <span className="text-gray-800 text-lg">{item}</span>
                </li>
              )
            )}
          </ul>

          <button className="px-6 py-2 w-40 border border-teal-600 text-teal-600 rounded-full hover:bg-teal-100 transition">
            Daftar
          </button>
        </div>

        {/* Kanan: Rating, AI & Testimoni */}
        <div className="w-full flex flex-col-reverse md:flex-row gap-8 items-start justify-between">
          {/* Rating + AI */}
          <div className="flex flex-col gap-6 w-full md:w-1/2">
            {/* Rating Card */}
            <div className="bg-white shadow-lg rounded-xl p-4 md:ml-12">
              <p className="text-3xl font-bold text-sky-800 mb-2 text-center">
                4.9
              </p>
              <div className="space-y-1 text-sm text-gray-500">
                {[5, 4, 3, 2, 1].map((num) => (
                  <div key={num} className="flex items-center gap-2">
                    <span>{num}</span>
                    <div className="h-2 w-full bg-gray-200 rounded">
                      {num === 5 && (
                        <div className="h-2 w-3/4 bg-teal-600 rounded" />
                      )}
                      {num === 4 && (
                        <div className="h-2 w-2/3 bg-teal-600 rounded" />
                      )}
                      {num === 3 && (
                        <div className="h-2 w-2/6 bg-teal-600 rounded" />
                      )}
                      {num === 2 && (
                        <div className="h-2 w-1/15 bg-teal-600 rounded" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Card */}
            <div className="bg-white shadow-lg rounded-lg px-6 py-4 w-full h-32 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-teal-600 font-semibold">
                <WiStars className="text-2xl text-teal-500" />
                <span>Rekomendasi AI</span>
              </div>
              <p className="text-sm text-gray-600 mt-2 leading-snug">
                Destinasi ini rekomen loh karena bla bla bla bla bla bla dan
                lainnya...
              </p>
            </div>
          </div>
          {/* Testimoni */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="rounded-xl overflow-hidden shadow-md w-full max-w-xs h-80 relative">
              <img
                src={test}
                alt="Testimoni"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 flex items-center gap-2 text-white bg-black/40 px-3 py-1 rounded-full text-sm">
                <FaUser />
                John Doe
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Step;
