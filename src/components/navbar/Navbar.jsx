import React, { use, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AuthContext } from "../../authContext/AuthContext";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const { user, userLogout } = use(AuthContext);

  const handleLogOut = () => {
    userLogout()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Welcome! You have been registered successfully.",
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Logout failed!");
      });
  };

  const linkClass = "text-gray-700 hover:text-blue-600 font-medium px-3 py-2";
  const activeClass =
    "text-blue-600 font-semibold underline underline-offset-4";

  return (
    <div className="w-full bg-base-300 sticky top-0  z-50 shadow-md">
      <nav className="container mx-auto">
        <div className="px-4 py-3 flex items-center justify-between md:justify-between ">
          <div className="md:hidden ">
            <button onClick={toggleMenu}>
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
          {/* Left section: Logo */}
          <div className="flex items-center ">
            <NavLink to="/" className="text-xl font-bold text-blue-600">
              <img
                className="w-14 h-14 rounded"
                src={
                  "https://i.ibb.co.com/S4vdnWH6/pngtree-digital-media-play-button-gradient-color-hexagon-marketing-agency-mobile-app-png-image-64824.png"
                }
                alt=""
              />
            </NavLink>
          </div>

          {/* Center nav items (hidden on mobile) */}
          <div className="hidden md:flex gap-6">
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                isActive ? `${linkClass} ${activeClass}` : linkClass
              }
            >
              Apps
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? `${linkClass} ${activeClass}` : linkClass
              }
            >
              Profile
            </NavLink>
          </div>

          {/* Right side: Mobile menu & Login */}
          <div className="flex items-center ">
            {/* Login link (hidden on mobile) */}
            {user ? (
              <div className="flex gap-2">
                <NavLink to={"/profile"}>
                  {" "}
                  <img
                    className="w-10 h-10 rounded-full shadow hover:bg-blue-600 p-1"
                    src={user.photoURL}
                    alt=""
                  />{" "}
                </NavLink>
                <button
                  className="btn hover:text-blue-700"
                  onClick={handleLogOut}
                >
                  {" "}
                  Log Out{" "}
                </button>
              </div>
            ) : (
              <div className="hidden md:flex ml-4">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? `${linkClass} ${activeClass}` : linkClass
                  }
                >
                  Login
                </NavLink>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-3 space-y-2 bg-white shadow-inner">
            <NavLink
              to="/apps"
              className={({ isActive }) =>
                isActive
                  ? `${linkClass} ${activeClass} block`
                  : `${linkClass} block`
              }
              onClick={toggleMenu}
            >
              Apps
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive
                  ? `${linkClass} ${activeClass} block`
                  : `${linkClass} block`
              }
              onClick={toggleMenu}
            >
              Profile
            </NavLink>
            {/*  */}

            {user ? (
              <button
                className="btn hover:text-blue-700"
                onClick={handleLogOut}
              >
                {" "}
                Log Out{" "}
              </button>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? `${linkClass} ${activeClass}` : linkClass
                }
              >
                Login
              </NavLink>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
