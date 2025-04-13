import React, { useState, useEffect } from 'react';
import { Home, MapPin, Star, Languages, Settings, LogOut, Bell, Search } from "lucide-react";
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Input } from "../components/ui/input"; 
import destinasiImg from '../img/destinasi4.png';
import profile from '../img/profile.png';
import { useTranslation } from "react-i18next";
import '../i18n';
import axios from "axios";

const destinations = Array.from({ length: 12 }).map((_, index) => ({
  id: index,
  name: "Air Terjun Lorem",
  price: "15.000 - 35.000 IDR",
  rating: 4.5,
  location: "Yogyakarta",
  image: destinasiImg,
  time: "08.00 AM - 05.00 PM",
  description: "Alamat Lorem Ipsum dolor sit amet, consectetur adipiscing elit."
}));

const Destination = () => {

  const { i18n, t } = useTranslation();
  const navigate = useNavigate();

  const [showLanguageModal, setShowLanguageModal] = useState(false);
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('lang', lng);
    setShowLanguageModal(false);
  };

  const [user, setUser] = useState({});
  const token = localStorage.getItem("token");
  const roles = JSON.parse(localStorage.getItem("roles"));
  console.log("role:", roles);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error(error);
        if (error.response && error.response.status === 401) {
          localStorage.removeItem("token");
          navigate("/login");
        }
      }
    };
  
    if(!token) {
      navigate("/login");
    } else {
      fetchUser();
    }
  }, [navigate, token]);

  const logoutHandler = async () => {
    try {
      await axios.post("http://localhost:8000/api/logout", {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.removeItem("token");
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [selectedRating, setSelectedRating] = useState(null);

  const itemsPerPage = 4;
  const totalPages = Math.ceil(destinations.length / itemsPerPage);

  const filteredDestinations = destinations.filter(dest => {
    const matchPrice = price ? dest.price.includes(price) : true;
    const matchLocation = location ? dest.location.includes(location) : true;
    const matchRating = selectedRating ? dest.rating >= selectedRating : true;
    return matchPrice && matchLocation && matchRating;
  });

  const currentDestinations = filteredDestinations.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSidebarClick = (icon) => {
    switch (icon) {
      case "Home":
        navigate("/");
        break;
      case "MapPin":
        navigate("/destination");
        break;
      case "Star":
        navigate("/rating");
        break;
      case "Languages":
        setShowLanguageModal(true);
        break;
      case "Settings":
        navigate("/settings");
        break;
      case "LogOut":
        logoutHandler();
        break;
      default:
        console.log(`${icon} clicked`);
    }
  };

  const handleViewDetails = (id) => {
    navigate(`/destination/${id}`);
  };

  const clearFilters = () => {
    setPrice('');
    setLocation('');
    setSelectedRating(null);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-16 bg-teal-700 flex flex-col items-center justify-between py-6 fixed h-full text-black">
        <div className="space-y-6">
          <Home onClick={() => handleSidebarClick("Home")} className="w-5 h-5 cursor-pointer" />
          <MapPin onClick={() => handleSidebarClick("MapPin")} className="w-5 h-5 cursor-pointer" />
          <Star onClick={() => handleSidebarClick("Star")} className="w-5 h-5 cursor-pointer" />
          <Languages onClick={() => handleSidebarClick("Languages")} className="w-5 h-5 cursor-pointer" />
          <Settings onClick={() => handleSidebarClick("Settings")} className="w-5 h-5 cursor-pointer" />
        </div>
        <LogOut onClick={() => handleSidebarClick("LogOut")} className="w-5 h-5 cursor-pointer" />
      </div>

      {/* Main Content */}
      <main className="ml-16 p-6 w-full bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="flex justify-between items-center w-full mb-6">
          <div className="relative flex-1 max-w-xl">
            <Input
              type="text"
              placeholder={t('search')}
              className="w-full pr-10"
            />
            <div className="absolute right-4 top-3 cursor-pointer">
              <Search className="w-5 h-5 text-gray-500" />
            </div>
          </div>
          <div
            className="flex items-center gap-3 cursor-pointer ml-6"
            onClick={() => navigate('/profile')}
          >
            <Bell className="w-5 h-5 text-gray-600" />
            <img src={profile} alt="User" className="w-8 h-8 rounded-full" />
            <div>
              <p className="text-sm font-medium">{user.name}</p>
              <p className="text-xs text-blue-600">{roles || "user"}</p>
            </div>
          </div>
        </div>

        {/* Language Modal */}
        {showLanguageModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 w-80">
              <h2 className="text-lg font-semibold mb-4">{t("choose_language")}</h2>
              <div className="space-y-2">
                <button onClick={() => changeLanguage("id")} className="w-full text-left p-2 hover:bg-teal-100 rounded">
                  {t("indonesian")}
                </button>
                <button onClick={() => changeLanguage("en")} className="w-full text-left p-2 hover:bg-teal-100 rounded">
                  {t("english")}
                </button>
              </div>
              <div className="text-right mt-4">
                <button onClick={() => setShowLanguageModal(false)} className="text-sm text-red-500 hover:underline">
                  {t("close")}
                </button>
              </div>
            </div>`
          </div>
        )}

        {/* Recommendations */}
        <h2 className="text-lg font-semibold mb-3">{t("destination:recommendations")}</h2>
        <div className="flex gap-4 overflow-x-auto mb-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="min-w-[200px] bg-white rounded-lg shadow">
              <img src={destinasiImg} alt="Trending" className="h-32 w-full object-cover" />
              <div className="p-2 text-sm">Pantai Kapuk</div>
            </div>
          ))}
        </div>

        {/* Section Heading & Filter */}
        <div className="flex justify-between items-start gap-6">
          <div className="w-full">
            <h2 className="text-2xl font-bold mb-6">{t("destination:destinations")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentDestinations.map((dest) => (
                <div key={dest.id} className="bg-white rounded-lg shadow overflow-hidden">
                  <img src={dest.image} alt="Destinasi" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h4 className="font-semibold text-lg">{dest.name}</h4>
                    <p className="text-sm text-gray-500 flex items-center gap-1 mb-2">
                      <FaStar className="text-yellow-500" /> {dest.rating} • {dest.price}
                    </p>
                    <p className="text-sm text-gray-600 mb-2">{dest.description}</p>
                    <p className="text-sm text-gray-500 mb-2">{dest.time}</p>
                    <button 
                      onClick={() => handleViewDetails(dest.id)} 
                      className="text-teal-600 text-sm font-medium hover:underline"
                    >
                      {t("view_details")} →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-6 flex gap-2 justify-center">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  className={`px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-gray-200 text-blue' : 'bg-gray-200 text-black'}`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Filter Section */}
          <div className="bg-white rounded-lg shadow p-4 w-72">
            <h3 className="text-lg font-semibold mb-4 text-teal-700">{t("destination:apply_filter")}</h3>
            <div className="mb-3">
              <label className="text-sm">{t("price")}</label>
              <input
                type="text"
                className="w-full border px-3 py-2 rounded mt-1 lowercase"
                placeholder={t("destination:enter_nominal_price")}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="text-sm">{t("location")}</label>
              <select
                className="w-full border px-3 py-2 rounded mt-1"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">{t("destination:select_locations")}</option>
                <option value="Yogyakarta">Yogyakarta</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="text-sm">Rating</label>
              <div className="flex gap-2 mt-1">
                {[5, 4, 3, 2, 1].map((r) => (
                  <button
                    key={r}
                    onClick={() => setSelectedRating(r)}
                    className={`px-3 py-1 border rounded-full text-sm ${selectedRating === r ? 'bg-yellow-400 text-white' : 'bg-gray-100 text-gray-800'}`}
                  >
                    {r}★
                  </button>
                ))}
              </div>
            </div>
            <button onClick={clearFilters} className="capitalize text-sm text-blue-600 mt-2">{t("clear_filters")}</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Destination;
