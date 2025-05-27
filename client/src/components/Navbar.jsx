import { Link, useNavigate, useLocation } from "react-router-dom";
import { links } from "../constants/constants";
import logo from "../assets/icon.png";
import { useEffect, useRef, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { useAuth } from "../context/AuthContext";
import { TiArrowSortedDown } from "react-icons/ti";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import customFetch from "../utilits/customFetch";
import { toast } from "react-toastify";
import { LiaUserSecretSolid, LiaTrophySolid } from "react-icons/lia";
import { IoGameControllerOutline } from "react-icons/io5";
import ProtectedRoute from "../routes/ProtectedRoute";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scroll styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable body scroll on mobile menu
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [sidebarOpen]);

  // Auto-close sidebar on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setSidebarOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Click outside to close menu
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      window.addEventListener("mousedown", handleOutsideClick);
    }
    return () => window.removeEventListener("mousedown", handleOutsideClick);
  }, [menuOpen]);

  // Scroll to section handler
  const handleLinkClick = (e, link) => {
    e.preventDefault();
    const targetId = link.replace("#", "");

    const scrollToSection = () => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollToSection, 200); // delay for routing transition
    } else {
      scrollToSection();
    }

    setSidebarOpen(false);
  };

  const handleLogout = async () => {
    try {
      await customFetch.post("/auth/logout");
      setTimeout(() => {
        toast.success("Logged out successfully", {
          className: "toast-success",
        });
        window.location.reload();
        navigate("/");
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner flex justify-between items-center px-4 py-2">
        {/* Logo */}
        <a href="#hero" onClick={(e) => handleLinkClick(e, "#hero")}>
          <img className="w-[60px]" src={logo} alt="Logo" />
        </a>

        {/* Navigation Links */}
        <nav
          className={`nav-link ${
            sidebarOpen ? "translate-x-0" : "translate-x-full"
          } md:translate-x-0 md:flex`}
        >
          <ul>
            {links.map((nav, index) => (
              <li key={index} className="group">
                <a
                  href={nav.link}
                  className="flex items-center space-x-2"
                  onClick={(e) => handleLinkClick(e, nav.link)}
                >
                  <span>{nav.icon}</span>
                  <span>{nav.text}</span>
                </a>
                <div className="underline" />
              </li>
            ))}

            {/* Logout for mobile */}
            {user && (
              <div
                onClick={handleLogout}
                className={`md:hidden absolute bottom-16 right-23 flex gap-2 text-lg bg-slate-200 px-3 py-1 text-black rounded-lg cursor-pointer`}
              >
                <TbLogout className="mt-1.5" />
                <button>Logout</button>
              </div>
            )}
          </ul>
        </nav>
        <ProtectedRoute>
          {location.pathname.startsWith("/dashboard") && (
            <section
              className={`dashboard ${
                sidebarOpen ? "translate-x-0" : "translate-x-[200%]"
              } md:translate-x-0 transition-transform duration-300`}
            >
              <h1 className="">Dashboard</h1>
              <ul className="">
                <li>
                  <span>
                    <LiaUserSecretSolid />
                  </span>
                  <Link to="/dashboard">Profile</Link>
                </li>
                <li>
                  <span>
                    <IoGameControllerOutline />
                  </span>
                  <Link to="/dashboard/status">Statustics</Link>
                </li>
                <li>
                  <span>
                    <LiaTrophySolid />
                  </span>
                  <Link to="/dashboard/trophys">Trophy</Link>
                </li>
              </ul>
            </section>
          )}
        </ProtectedRoute>

        {/* User Dropdown */}
        {user ? (
          <div
            onClick={() => setMenuOpen((prev) => !prev)}
            className={`btn-login md:translate-x-0 ${
              sidebarOpen ? "translate-x-0" : "translate-x-[200%]"
            } cursor-pointer flex items-center gap-1`}
          >
            {user ? (
              <img
                width="30px"
                className="rounded-full"
                src={user?.avatar}
                alt="profile"
              />
            ) : (
              <LiaUserSecretSolid size="22px" />
            )}

            <span>{user.name}</span>
            <TiArrowSortedDown
              className={`transition-transform duration-300 ${
                menuOpen ? "rotate-180" : "rotate-0"
              }`}
              size="20px"
            />
          </div>
        ) : (
          <Link
            to="/login"
            className={`btn-login items-center space-x-2 md:translate-x-0 ${
              sidebarOpen ? "translate-x-0" : "translate-x-[200%]"
            }`}
          >
            Login
          </Link>
        )}

        {/* Dropdown Menu */}
        {menuOpen && user && (
          <div
            ref={menuRef}
            className="absolute hidden md:block top-16 right-10 w-[160px] transition-all transform duration-300"
          >
            <ul className="flex flex-col text-black font-semibold bg-white/90 rounded-lg shadow-md">
              <li className="hover:bg-neutral-100 rounded-t-lg px-4 py-2">
                <Link to="/dashboard" className="flex items-center gap-2">
                  <RiDashboardHorizontalLine />
                  Dashboard
                </Link>
              </li>
              <li className="hover:bg-neutral-100 rounded-b-lg px-4 py-2">
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 w-full"
                >
                  <TbLogout />
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}

        {/* Mobile Menu Icon */}
        <div className="menu md:hidden z-[101]">
          {sidebarOpen ? (
            <IoClose size="35px" onClick={() => setSidebarOpen(false)} />
          ) : (
            <IoMenu size="35px" onClick={() => setSidebarOpen(true)} />
          )}
        </div>
      </div>

      {/* Backdrop for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[99] md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;
