import React, { useState } from 'react';
import { Home, MapPin, Star, Languages, Settings, LogOut, Bell, Search } from "lucide-react";
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Input } from "../components/ui/input"; 
import destinasiImg from '../img/destinasi4.png';
import profile from '../img/login.png';
import '../i18n';

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
  const navigate = useNavigate();
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
    const routes = {
      Home: "/",
      MapPin: "/destination",
      Star: "/rating",
      Languages: "/language",
      Settings: "/settings",
      LogOut: "/login"
    };
    navigate(routes[icon]);
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
              placeholder="Telusuri destinasi"
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
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-blue-600">User</p>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <h2 className="text-lg font-semibold mb-3">Our Recommendations</h2>
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
            <h2 className="text-2xl font-bold mb-6">Ke Mana Tujuanmu Hari Ini?</h2>
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
                      View details →
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
            <h3 className="text-lg font-semibold mb-4 text-teal-700">Apply Filter</h3>
            <div className="mb-3">
              <label className="text-sm">Price</label>
              <input
                type="text"
                className="w-full border px-3 py-2 rounded mt-1"
                placeholder="enter your nominal"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="text-sm">Location</label>
              <select
                className="w-full border px-3 py-2 rounded mt-1"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">Select location</option>
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
            <button onClick={clearFilters} className="text-sm text-blue-600 mt-2">Clear Filters</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Destination;
