import { useState, useEffect, useRef } from "react";
import { CONTACT } from "../constants";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiTiktok } from "react-icons/si";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [popIcon, setPopIcon] = useState(null);

  // Navigation items
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

  // Social media data
  const socialLinks = [
    {
      id: "linkedin",
      label: "LinkedIn",
      icon: FaLinkedin,
      url: CONTACT.socialLinks.linkedin,
      color: "from-cyan-400 to-blue-500",
      wave: "social-icon-wave-1",
      delay: "0s",
    },
    {
      id: "github",
      label: "GitHub",
      icon: FaGithub,
      url: CONTACT.socialLinks.github,
      color: "from-purple-400 to-indigo-500",
      wave: "social-icon-wave-2",
      delay: "0.75s",
    },
    {
      id: "twitter",
      label: "Twitter",
      icon: FaXTwitter,
      url: CONTACT.socialLinks.twitter,
      color: "from-blue-400 to-cyan-500",
      wave: "social-icon-wave-3",
      delay: "1.5s",
    },
    {
      id: "instagram",
      label: "Instagram",
      icon: FaInstagram,
      url: CONTACT.socialLinks.instagram,
      color: "from-pink-500 to-rose-500",
      wave: "social-icon-wave-4",
      delay: "2.25s",
    },
    {
      id: "youtube",
      label: "YouTube",
      icon: FaYoutube,
      url: CONTACT.socialLinks.youtube || "#",
      color: "from-red-500 to-red-600",
      wave: "social-icon-wave-1",
      delay: "0.5s",
    },
    {
      id: "tiktok",
      label: "TikTok",
      icon: SiTiktok,
      url: CONTACT.socialLinks.tiktok || "#",
      color: "from-black to-neutral-800",
      wave: "social-icon-wave-2",
      delay: "1.25s",
    },
    {
      id: "discord",
      label: "Discord",
      icon: FaDiscord,
      url: CONTACT.socialLinks.discord || "#",
      color: "from-indigo-500 to-blue-600",
      wave: "social-icon-wave-3",
      delay: "1.75s",
    },
  ];

  // Primary socials for desktop
  const primarySocials = socialLinks.slice(0, 4);

  // Handle animation pop effect
  const handleIconHover = (id) => {
    setPopIcon(id);
    setTimeout(() => setPopIcon(null), 300);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      // Set is scrolled for navbar background
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      // Get all sections
      const sections = navItems
        .map((item) => ({
          id: item.id,
          element: document.getElementById(item.id),
        }))
        .filter((section) => section.element !== null);

      // Find the current section
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

    // Initial check to set active section
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Handle click on nav item
  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);

    // Smooth scroll to section
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Social icon component
  const SocialIcon = ({ social, className = "" }) => {
    const Icon = social.icon;
    const [isHovered, setIsHovered] = useState(false);

    return (
      <a
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={social.label}
        className={`relative flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 hover:scale-105 ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span
          className={`absolute inset-0 rounded-full bg-gradient-to-r ${
            social.color
          } ${
            isHovered ? "opacity-20" : "opacity-0"
          } transition-opacity duration-300`}
        ></span>

        <Icon
          className={`relative z-10 text-lg ${
            isHovered ? "text-white" : "text-neutral-400"
          } transition-colors duration-300`}
        />
      </a>
    );
  };

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-neutral-900/80 py-4 backdrop-blur-md"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <a
            href="#home"
            className="text-xl font-semibold"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("home");
            }}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              SG
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
              className={`text-sm transition-all ${
                activeSection === item.id
                  ? "font-medium text-white after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-gradient-to-r after:from-cyan-400 after:to-blue-500 relative"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Social Icons - Desktop */}
        <div className="hidden items-center social-icon-container md:flex">
          {primarySocials.map((social) => (
            <SocialIcon key={social.id} social={social} />
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex items-center md:hidden"
          onClick={toggleMobileMenu}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="absolute left-0 top-full w-full bg-neutral-900 shadow-lg md:hidden"
        >
          <div className="flex flex-col p-4">
            {navItems.map((item, index) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`${
                  index < navItems.length - 1
                    ? "border-b border-neutral-800"
                    : ""
                } py-3 text-sm ${
                  activeSection === item.id
                    ? "font-medium bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent pl-2 border-l-2 border-cyan-400"
                    : "text-neutral-400"
                }`}
              >
                {item.label}
              </a>
            ))}

            <div className="social-group">
              <h3 className="social-group-title">Connect With Me</h3>
              <div className="grid grid-cols-3 gap-3">
                {socialLinks.map((social) => (
                  <SocialIcon key={social.id} social={social} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
