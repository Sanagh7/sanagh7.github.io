import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const mobileMenuRef = useRef(null);

  // Navigation items with icons for mobile view
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "achievements", label: "Achievements" },
    { id: "projects", label: "Projects" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const scrollPosition = window.scrollY + window.innerHeight / 4;
      const sections = navItems
        .map((item) => ({
          id: item.id,
          element: document.getElementById(item.id),
        }))
        .filter((section) => section.element !== null);

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const offsetTop = section.element.offsetTop;
          if (scrollPosition >= offsetTop) {
            if (activeSection !== section.id) {
              setActiveSection(section.id);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on window resize (if viewport becomes desktop size)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Handle click on nav item
  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? "bg-neutral-900/95 py-3 backdrop-blur-md shadow-lg shadow-neutral-900/20"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo and Mobile Menu Button */}
        <div className="flex w-full md:w-auto items-center justify-between">
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center text-xl sm:text-2xl font-bold relative"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("home");
            }}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Sanandan
            </span>
            <span className="text-white ml-1 hidden xs:inline">Ghimire</span>
            {/* Underline accent */}
            <motion.span 
              className="absolute -bottom-1 left-0 h-[3px] w-0 bg-gradient-to-r from-cyan-500 to-blue-500"
              initial={{ width: 0 }}
              animate={{ width: isScrolled ? "100%" : "30%" }}
              transition={{ duration: 0.5 }}
            />
          </motion.a>

          {/* Mobile Menu Button with animation */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 rounded-lg hover:bg-neutral-800/70 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <motion.span 
                animate={{ 
                  rotate: mobileMenuOpen ? 45 : 0,
                  translateY: mobileMenuOpen ? 8 : 0,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="w-full h-0.5 bg-white origin-left"
              />
              <motion.span 
                animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
                transition={{ duration: 0.2 }}
                className="w-full h-0.5 bg-white"
              />
              <motion.span 
                animate={{ 
                  rotate: mobileMenuOpen ? -45 : 0,
                  translateY: mobileMenuOpen ? -8 : 0,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="w-full h-0.5 bg-white origin-left"
              />
            </div>
          </motion.button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center items-center gap-5 lg:gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
              className="relative group"
            >
              <span className={`text-sm transition-all ${
                activeSection === item.id
                  ? "font-medium text-white"
                  : "text-neutral-400 group-hover:text-white"
              }`}>
                {item.label}
              </span>
              
              {/* Animated underline */}
              {activeSection === item.id ? (
                <motion.span 
                  layoutId="navIndicator" 
                  className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-cyan-400 to-blue-500"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              ) : (
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 group-hover:w-full bg-neutral-500/30 transition-all duration-300" />
              )}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Mobile Menu with AnimatePresence */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-neutral-900/95 backdrop-blur-lg border-t border-neutral-800/50 overflow-hidden shadow-lg shadow-neutral-900/40"
          >
            <div className="container mx-auto px-4 py-3">
              <div className="flex flex-col">
                {navItems.map((item, idx) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                    className={`px-4 py-3 rounded-lg text-sm transition-all ${
                      activeSection === item.id
                        ? "bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-white font-medium border-l-3 border-cyan-400"
                        : "text-neutral-400 hover:bg-neutral-800/50 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;
