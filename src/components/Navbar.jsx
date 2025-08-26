import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const { cartCount } = useCart();
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const linkCls = ({ isActive }) =>
    `px-3 py-2 rounded-xl hover:bg-black/5 ${
      isActive ? "text-braj-purple font-semibold" : "text-gray-700"
    }`;

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  // Click outside for dropdown close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-extrabold tracking-tight flex items-center gap-2"
        >
          <span className="w-8 h-8 rounded-xl bg-braj-purple text-white grid place-items-center">
            BB
          </span>
          <span>Braj Brahman</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={linkCls}>Home</NavLink>
          <NavLink to="/temples" className={linkCls}>Temples</NavLink>
          <NavLink to="/hotels" className={linkCls}>Hotels</NavLink>
          <NavLink to="/paths" className={linkCls}>Paths</NavLink>
          <NavLink to="/booking" className={linkCls}>Booking</NavLink>
          <NavLink to="/braj-ki-raj" className={linkCls}>Braj ki Raj</NavLink>
          <NavLink to="/transport" className={linkCls}>Transport</NavLink>
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Cart */}
          <NavLink
            to="/cart"
            className="px-3 py-2 rounded-xl bg-braj-purple text-white hover:opacity-90"
          >
            Cart ({cartCount})
          </NavLink>

          {/* User / Login */}
          {!user ? (
            <NavLink
              to="/login"
              className="hidden md:inline px-3 py-2 rounded-xl bg-orange-700 text-white hover:bg-orange-800"
            >
              Login
            </NavLink>
          ) : (
            <div className="relative hidden md:block" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="px-3 py-2 rounded-xl bg-orange-800 text-white"
              >
                {user.email.split("@")[0]}
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white/80 backdrop-blur-md shadow-lg rounded-lg border border-white/40">
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-red-500 hover:text-white rounded-lg transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t shadow-lg">
          <nav className="flex flex-col p-4 space-y-2">
            <NavLink to="/" className={linkCls} onClick={() => setMobileOpen(false)}>Home</NavLink>
            <NavLink to="/temples" className={linkCls} onClick={() => setMobileOpen(false)}>Temples</NavLink>
            <NavLink to="/hotels" className={linkCls} onClick={() => setMobileOpen(false)}>Hotels</NavLink>
            <NavLink to="/paths" className={linkCls} onClick={() => setMobileOpen(false)}>Paths</NavLink>
            <NavLink to="/booking" className={linkCls} onClick={() => setMobileOpen(false)}>Booking</NavLink>
            <NavLink to="/braj-ki-raj" className={linkCls} onClick={() => setMobileOpen(false)}>Braj ki Raj</NavLink>
            <NavLink to="/transport" className={linkCls} onClick={() => setMobileOpen(false)}>Transport</NavLink>

            {!user ? (
              <NavLink
                to="/login"
                className="px-3 py-2 rounded-xl bg-orange-700 text-white hover:bg-orange-800"
                onClick={() => setMobileOpen(false)}
              >
                Login
              </NavLink>
            ) : (
              <button
                onClick={() => {
                  handleLogout();
                  setMobileOpen(false);
                }}
                className="px-3 py-2 rounded-xl bg-red-600 text-white hover:bg-red-700"
              >
                Logout
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
