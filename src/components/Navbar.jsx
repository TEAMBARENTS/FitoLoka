import { useState, useEffect, useRef } from "react";
import { Outlet, Link } from "react-router-dom";
import Logo from "../assets/img/logo.webp";
import '@fontsource/poppins';

const generateWhatsappURL = (phoneNumber, message) => {
  const formattedPhoneNumber = phoneNumber.replace(/\D/g, ""); // Menghapus karakter non-digit
  const whatsappURL = `https://api.whatsapp.com/send?phone=${formattedPhoneNumber}&text=${encodeURIComponent(
    message
  )}`;

  return whatsappURL;
};

function Navbar() {
  const [openToggle, setOpenToggle] = useState(false);
  const toggleRef = useRef(null);
  const panelRef = useRef(null);

  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef(null);

  const handleClick = () => {
    const phoneNumber = "622335894637";
    const message = "Hello, I am interested in using Fitoloka services to help optimize my agriculture. Could I get more information about the services offered and how to get started? Thank you!"; // Default message
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    window.location.href = generateWhatsappURL(phoneNumber, message);
  };

  const handleToggle = () => {
    setOpenToggle(!openToggle);
  };

  const handleClickOutside = (event) => {
    if (
      toggleRef.current &&
      panelRef.current &&
      !toggleRef.current.contains(event.target) &&
      !panelRef.current.contains(event.target)
    ) {
      setOpenToggle(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [shouldScroll, setShouldScroll] = useState(true);

  useEffect(() => {
      if (shouldScroll) {
          window.scrollTo(0, 0);
      }
  }, [shouldScroll]);

  const handleLinkClick = () => {
      setShouldScroll(true);
  };

  const handleEnter = (e) => {
  const el = e.currentTarget;
  const navRect = navRef.current.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();
  setIndicator({
    left: elRect.left - navRect.left,
    width: elRect.width,
    opacity: 1,
  });
  };

  const handleLeave = () => {
    setIndicator((prev) => ({ ...prev, opacity: 0 }));
  };

  const menuItems = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/portofolio", label: "Portfolio" },
    { to: "/about", label: "About" },
  ];

  return (
    <>
    <style>{`
      @keyframes slideDown {
        from { transform: translateY(-100%); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
    `}</style>
    <nav className="fixed z-50 w-full top-0 h-18 flex items-center lg:px-20 p-4 font-poppins bg-[#0A6847]/10 bg-gradient-to-t from-black/10 via-black/15 to-black/10" style={{ animation: "slideDown 0.6s ease-out forwards" }}>
      <img src={Logo} alt="/" width="135px" height="135px"/>
      <button
        ref={toggleRef}
        className="block lg:hidden absolute right-4 px-4 top-[15px] py-3"
        onClick={handleToggle}
      >
        <span
          className={`rounded-full w-9 h-1 mb-2 bg-white block transition-transform duration-300 ease-in-out transform ${
            openToggle ? "rotate-[45deg]  translate-y-2" : ""
          }`}
        ></span>

        <span
          className={`rounded-full w-9 h-1 mb-2 bg-white block transition-opacity duration-300 ease-in-out ${
            openToggle ? "opacity-0 mb-[1.2px]" : ""
          }`}
        ></span>

        <span
          className={`rounded-full w-9 h-1 mb-2  bg-white block transition-transform duration-300 ease-in-out transform ${
            openToggle ? "-rotate-[45deg]   -translate-y-2" : ""
          }`}
        ></span>
      </button>

      <div className="tracking-wider w-screen flex justify-end px-6">
        <nav
          id="nav-menu"
          className={`absolute bg-white/20 backdrop-blur-sm lg:backdrop-blur-none shadow-lg rounded-lg max-w-[250px] right-4 top-20 
            lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none 
            ${openToggle ? "block" : "hidden"}`}
        >
          <div ref={panelRef} className="lg:mr-[-7vh]">
          <ul
            ref={navRef}
            onMouseLeave={handleLeave}
            className="relative lg:flex"
          >
            <div
              className="absolute top-0 h-full rounded-full bg-[#2A835F] transition-all duration-300 ease-out pointer-events-none hidden lg:block"
              style={{
                left: `${indicator.left}px`,
                width: `${indicator.width}px`,
                opacity: indicator.opacity,
              }}
            />
            {menuItems.map((item) => (
              <li key={item.to} className="px-2 relative z-10">
                <Link
                  to={item.to}
                  onClick={handleLinkClick}
                  onMouseEnter={handleEnter}
                  className="w-[15vh] lg:w-[18vh] justify-center text-[13px] text-dark font-semibold tracking-widest lg:text-white p-4 lg:p-2 flex lg:rounded-full rounded-md hover:text-white transition-colors duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          </div>
        </nav>
      </div>
    <div className="lg:ml-[35vh]">
      <button
        onClick={handleClick}
        className="relative overflow-hidden lg:mx-auto border font-bold rounded-full w-[20vh] py-3 text-[13px] text-white shadow-lg lg:block hidden group hover:border-[#2A835F] transition-colors duration-300"
      >
        <span
          className="absolute inset-0 rounded-full bg-[#2A835F] scale-x-0 origin-center transition-transform duration-300 ease-out group-hover:scale-x-100"
        />
        <span className="absolute inset-0 rounded-full border border-transparent transition-colors duration-300 group-hover:border-transparent" />
        <span className="relative z-10 transition-colors duration-300">
          Contact Us
        </span>
      </button>
    </div>
    </nav>

    <Outlet />
    </>
  );
}

export default Navbar;
