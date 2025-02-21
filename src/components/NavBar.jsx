import { signOut } from "firebase/auth";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../services/FirebaseConfig";

export const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/signin");
    });
  };

  const categories = [
    { name: "All", path: "/" },
    { name: "Clothes", path: "/clothes" },
    { name: "Electronics", path: "/electronics" },
    { name: "Furnitures", path: "/furnitures" },
    { name: "Toys", path: "/toys" },
  ];

  const userDetails = [{ name: "My Orders", path: "/my_orders" }];

  return (
    <div className="main py-4 px-7 shadow-sm flex justify-between">
      {/* Logo & Tabs */}
      <div className="logo-tabs flex items-center gap-4">
        <h1 className="text-2xl cursor-pointer font-bold">
          <Link to={"/"}>Shopi</Link>
        </h1>
        <div className="flex gap-4 items-center pt-2">
          {categories.map((category) => (
            <Link
              key={category.path}
              to={category.path}
              className={`relative pb-1 text-sm font-light cursor-pointer transition-all 
                ${
                  location.pathname === category.path
                    ? "font-bold text-black"
                    : "text-black"
                }`}
            >
              {category.name}
              {location.pathname === category.path && (
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-black"></span>
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* User Details & Cart */}
      <div className="userDetails-cart flex items-center gap-6">
        <p className="cursor-pointer hidden md:block text-sm text-gray-500 font-light">
          Mohamed Fazil
        </p>
        {userDetails.map((user) => (
          <Link
            key={user.path}
            to={user.path}
            className={`relative py-1 hidden md:block text-sm cursor-pointer transition-all 
                ${
                  location.pathname === user.path
                    ? "font-medium text-black"
                    : "text-black"
                }`}
          >
            {user.name}
            {location.pathname === user.path && (
              <span className="absolute left-0 bottom-0 w-full h-[1px] bg-black"></span>
            )}
          </Link>
        ))}
        <div
          id="profile-section"
          className="profile relative flex justify-center items-center gap-2 cursor-pointer"
          onClick={toggleDropdown}
        >
          <CgProfile size={30} />

          {showDropdown && (
            <div className=" absolute right-0 top-6 mt-2 w-[200px] bg-white border rounded-lg shadow-lg overflow-hidden z-50">
              <button
                onClick={handleSignOut}
                className="w-full select-none flex items-center justify-between text-left px-4 py-2 hover:bg-gray-100"
              >
                Sign Out <FiLogOut />
              </button>
            </div>
          )}
        </div>
        <button className="items-center gap-2 hidden md:flex cursor-pointer text-sm font-light">
          <FaCartShopping size={20} />
        </button>
      </div>
    </div>
  );
};
