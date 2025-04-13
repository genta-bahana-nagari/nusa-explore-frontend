import React, { useState, useEffect } from "react";
import {
  Home,
  MapPin,
  Star,
  Languages,
  Settings,
  LogOut,
  Bell,
  Search,
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useNavigate } from "react-router-dom";
import homeImg from "../img/home.png";
import profile from "../img/profile.png";
import trendingImg from "../img/login.png";
import placeImg from "../img/login.png";
import { useTranslation } from "react-i18next";
import '../i18n';
import axios from "axios";

const reviews = [
  {
    id: 1,
    location: "Place Location",
    date: "2/02/2022",
    text: "Lorem ipsum dolor sit amet...",
    user: "John Doe",
    avatar: placeImg,
  },
  {
    id: 2,
    location: "Place Location",
    date: "2/02/2022",
    text: "Lorem ipsum dolor sit amet...",
    user: "John Doe",
    avatar: placeImg,
  },
];

const trending = [
  { id: 1, title: "Pantai Lorem Ipsum", location: "Lokasi Lorem Ipsum" },
  { id: 2, title: "Pantai Lorem Ipsum", location: "Lokasi Lorem Ipsum" },
  { id: 3, title: "Pantai Lorem Ipsum", location: "Lokasi Lorem Ipsum" },
  { id: 4, title: "Pantai Lorem Ipsum", location: "Lokasi Lorem Ipsum" },
  { id: 5, title: "Pantai Lorem Ipsum", location: "Lokasi Lorem Ipsum" },
];


function HomePage() {
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('lang', lng);
    setShowLanguageModal(false);
  };
  
  console.log("Current lang:", i18n.language);

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
        // console.log(response.data);
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
      localStorage.removeItem("roles");
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  }

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

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-16 bg-teal-700 flex flex-col items-center justify-between py-6 text-black fixed h-full">
        <div className="space-y-6 cursor-pointer">
          <Home className="w-5 h-5" onClick={() => handleSidebarClick("Home")} />
          <MapPin className="w-5 h-5" onClick={() => handleSidebarClick("MapPin")} />
          <Star className="w-5 h-5" onClick={() => handleSidebarClick("Star")} />
          <Languages className="w-5 h-5" onClick={() => handleSidebarClick("Languages")} />
          <Settings className="w-5 h-5" onClick={() => handleSidebarClick("Settings")} />
        </div>
        <LogOut
          className="w-5 h-5 cursor-pointer"
          onClick={() => handleSidebarClick("LogOut")}
        />
      </div>

      {/* Main */}
      <div className="flex-1 bg-gray-100 overflow-auto ml-16">
        {/* Topbar */}
        <div className="flex justify-between items-center p-4 bg-white shadow">
          <div className="text-xl font-semibold text-teal-700">NusaExplore</div>
          <div className="flex items-center gap-3 w-full max-w-xl relative">
            <Input
              type="text"
              placeholder={t("search")}
              className="w-full pr-10"
            />
            <div className="absolute right-4 top-3 cursor-pointer">
              <Search className="w-5 h-5 text-gray-500" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Bell className="w-5 h-5 text-gray-500" />
            <img src={profile} alt="User" className="w-8 h-8 rounded-full" />
            <div>
              <p className="font-medium text-sm">{user.name || "User"}</p>
              <p className="text-xs text-blue-600 cursor-pointer">{roles || "user"}</p>
            </div>
          </div>
        </div>

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

        <div className="h-72 overflow-hidden">
          <img src={homeImg} alt="Hero" className="w-full h-full object-cover" />
        </div>

        {/* Main Content */}
        <div className="p-6 grid grid-cols-3 gap-4">
          {/* Recent Reviews */}
          <div className="col-span-2">
            <h2 className="text-xl font-semibold">{t("home:your_recent_reviews")}</h2>
            <p className="text-sm text-gray-500 mb-4">{t("home:your_recent_reviews_desc")}</p>
            <div className="grid grid-cols-2 gap-4">
              {reviews.map((review) => (
                <Card key={review.id} className="flex items-start gap-3 p-4">
                  <img
                    src={review.avatar}
                    alt="Avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <CardContent className="p-0">
                    <p className="font-semibold">{review.location}</p>
                    <p className="text-sm text-gray-600">{review.text}</p>
                    <p className="text-xs text-gray-400 mt-1">{review.date}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-end mt-4">
              <Button className="bg-teal-700 hover:bg-teal-800 text-white cursor-pointer"
              onClick={() => navigate("/reviews")}>
                {t("see_all")}
              </Button>
            </div>
          </div>

          {/* Trending */}
          <Card className="p-4">
            <h2 className="text-lg font-semibold text-teal-800 mb-2">{t("home:trending")}</h2>
            <ul className="space-y-3">
              {trending.map((item, idx) => (
                <li key={item.id} className="flex items-center space-x-3">
                  <span className="font-bold text-sm">{idx + 1}</span>
                  <img
                    src={trendingImg}
                    alt="Trending"
                    className="w-10 h-10 rounded object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.location}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="text-right mt-2">
              <Button variant="link" className="text-sm text-blue-600 cursor-pointer"
              onClick={() => navigate("/trending")}>
                {t("see_all")}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
