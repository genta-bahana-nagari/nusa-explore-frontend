import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaMountain, FaTrash, FaCamera } from "react-icons/fa";
import { Home, MapPin, Star, Languages, Settings, LogOut, Search, Bell } from "lucide-react";
import { Input } from "../components/ui/input";
import profile from "../img/profile.png";

function SettingsPage() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("Profile");
  const [username, setUsername] = useState("johndoe24");
  const [email, setEmail] = useState("john24@gmail.com");
  const [editing, setEditing] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  
  const handleSidebarClick = (icon) => {
    const routes = {
      Home: "/",
      MapPin: "/destination",
      Star: "/rating",
      Languages: "/language",
      Settings: "/settings",
      LogOut: "/login",
    };
    navigate(routes[icon]);
  };

  const handleDeleteAccount = () => {
    setShowDeleteConfirm(false);
    alert("Akun berhasil dihapus.");
  };

  const handleChangePassword = () => {
    if (newPassword.length < 8) {
      setPasswordError("Password baru minimal 8 karakter.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordError("Konfirmasi password tidak cocok.");
      return;
    }
    setPasswordError("");
    alert("Password berhasil diubah.");
  };

  const handleSaveProfile = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Format email tidak valid.");
      return;
    }
    setEditing(false);
    alert("Profil berhasil disimpan.");
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
                  <div className="text-xl font-semibold text-blue-900">NusaExplore</div>
                  <div className="flex items-center gap-3 w-full max-w-xl relative">
                    <Input
                      type="text"
                      placeholder="Telusuri destinasi"
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
                      <p className="font-medium text-sm">John Doe</p>
                      <p className="text-xs text-blue-600 cursor-pointer">User</p>
                    </div>
                  </div>
                </div>



        <div className="flex h-full">
          <div className="w-64 bg-[#D6F0F7] p-6 flex flex-col justify-between rounded-xl shadow-lg">
            <div>
              <div className="flex items-center mb-10 text-xl font-bold text-blue-800">
                <span className="text-2xl font-extrabold">Menu</span>
              </div>
              <ul className="space-y-5">
                {["Profile", "Change password", "Become a Destination Manager", "Hapus Akun"].map((item) => (
                  <li
                    key={item}
                    className={`cursor-pointer flex items-center space-x-2 text-[#0B3E58] hover:font-semibold hover:bg-blue-100 rounded-xl ${activeMenu === item ? "font-bold" : ""}`}
                    onClick={() => setActiveMenu(item)}
                  >
                    <span>
                      {item === "Profile" && <FaUser />}
                      {item === "Change password" && <FaLock />}
                      {item === "Become a Destination Manager" && <FaMountain />}
                      {item === "Hapus Akun" && <FaTrash />}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex-1 p-10 overflow-y-auto">
          {activeMenu === "Profile" && (
  <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
    <div className="flex items-center space-x-6">
      <div className="relative">
        <img src={profile} className="w-28 h-28 rounded-xl object-cover" />
        <div className="absolute bottom-0 right-0 bg-white p-1 rounded-full cursor-pointer">
          <FaCamera className="text-gray-600" />
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold">John Doe</h2>
        <p className="text-sm text-gray-500">Destination manager of [nm_wisata]</p>
      </div>
      <button 
        className="ml-auto bg-blue-600 hover:bg-blue-800 text-white font-bold px-4 py-2 rounded-xl border"
        onClick={() => setEditing(true)}
    >
        Edit Profile
    </button>

    </div>

    <div className="space-y-4 max-w-xl">
      <div>
        <label className="block text-gray-700">User name</label>
        <input type="text" className="w-full px-4 py-2 rounded bg-gray-100" value={username} onChange={(e) => setUsername(e.target.value)} disabled={!editing} />
      </div>
      <div>
        <label className="block text-gray-700">Email</label>
        <input type="email" className="w-full px-4 py-2 rounded bg-gray-100" value={email} onChange={(e) => setEmail(e.target.value)} disabled={!editing} />
      </div>
      {editing && (
  <div className="flex justify-end">
    <button 
      className="bg-blue-600 hover:bg-blue-800 text-white font-bold px-4 py-2 rounded-xl border"
      onClick={() => setEditing(false)}>
      Save Changes
    </button>
  </div>
)}

    </div>
  </div>
            )}


            {activeMenu === "Change password" && (
              <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
    
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <img src={profile} className="w-28 h-28 rounded-xl object-cover" />
                  <div className="absolute bottom-0 right-0 bg-white p-1 rounded-full cursor-pointer">
                    <FaCamera className="text-gray-600" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">John Doe</h2>
                  <p className="text-sm text-gray-500">Destination manager of [nm_wisata]</p>
                </div>
                <button 
                  className="ml-auto bg-blue-600 hover:bg-blue-800 text-white font-bold px-4 py-2 rounded-xl border"
                  onClick={() => setEditing(true)}
                >
                Edit Password
                </button>
              </div>
            
              <div className="space-y-4 max-w-xl">
                <div>
                  <label className="block text-gray-700">Current Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 rounded bg-gray-100"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-gray-700">New Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 rounded bg-gray-100"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Confirm Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 rounded bg-gray-100"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                {passwordError && (
                  <p className="text-red-500 text-sm">{passwordError}</p>
                )}

{editing && (
  <div className="flex justify-end">
    <button 
      className="bg-blue-600 hover:bg-blue-800 text-white font-bold px-4 py-2 rounded-xl border"
      onClick={() => setEditing(false)}>
      Save Changes
    </button>
  </div>
)}
              </div>
            </div>
            
            )}

            {activeMenu === "Become a Destination Manager" && (
              <div className="text-gray-700 text-lg">
                <p>Formulir atau informasi untuk menjadi manajer destinasi akan ditampilkan di sini.</p>
              </div>
            )}

            {activeMenu === "Hapus Akun" && (
              <div>
                <button className="bg-red-500 hover:bg-red-700 text-white px-6 py-2 rounded" onClick={() => setShowDeleteConfirm(true)}>
                  Konfirmasi Hapus Akun
                </button>
              </div>
            )}

            {showDeleteConfirm && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm text-center space-y-4">
                  <p className="text-lg font-semibold">Apakah kamu yakin ingin menghapus akun?</p>
                  <div className="flex justify-center space-x-4">
                    <button onClick={() => setShowDeleteConfirm(false)} className="px-4 py-2 rounded bg-gray-300">
                      Batal
                    </button>
                    <button onClick={handleDeleteAccount} className="px-4 py-2 rounded bg-red-500 text-white">
                      Hapus
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
    </div>
    </div>
  );
}

export default SettingsPage;
