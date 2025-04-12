import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Pantai from "../../assets/Diamond_Beach.jpeg";

const HeroSection = () => {
  return (
    <section
      className="w-full min-h-[100svh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${Pantai})`,
      }}
    >
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h1 className="text-white text-4xl md:text-6xl font-semibold mb-4 drop-shadow-lg">
          NusaExplore
        </h1>
        <p className="text-white text-lg md:text-xl mb-8 drop-shadow-md">
          Jelajahi keindahan Nusantara dengan rekomendasi cerdas dari
          NusaExplore. Temukan destinasi terbaik, dapatkan informasi akurat, dan
          nikmati perjalanan tanpa batas!
        </p>

        {/* Search bar */}
        <div className="bg-white rounded-xl md:rounded-full p-3 shadow-md max-w-xl mx-auto w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4">
          {/* Input & Search */}
          <div className="flex w-full items-center gap-2">
            <input
              type="text"
              placeholder="Masukkan Destinasi"
              className="flex-grow px-4 py-2 rounded-full bg-gray-200 border border-gray-300 focus:outline-none text-sm sm:text-base"
            />
            <button className="min-w-[42px] min-h-[42px] bg-teal-600 text-white rounded-full flex items-center justify-center hover:bg-teal-700 transition">
              <FaSearch />
            </button>
          </div>

          {/* Kategori Dropdown */}
          <button className="bg-white w-full sm:w-auto flex items-center justify-center gap-1 text-gray-600 hover:text-black px-4 py-2 border border-gray-300 rounded-full text-sm sm:text-base">
            Kategori <IoIosArrowDown />
          </button>
        </div>
      </div>

      {/* Wave bawah */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="w-full h-[100px]"
        >
          <path
            d="M0.00,49.98 C150.00,150.00 350.00,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: "none", fill: "#fff" }}
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
