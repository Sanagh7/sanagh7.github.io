import { CONTACT } from "../constants";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaRegCopyright,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-12 bg-[#060921] py-16">
      {/* Decorative Elements */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#080325_1px,transparent_1px),linear-gradient(to_bottom,#080325_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="container mx-auto px-4">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4">
          {/* About Column */}
          <div className="md:col-span-1 lg:col-span-2">
            <div className="text-2xl font-medium">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Sanandan Ghimire
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-400">
              Full stack developer with expertise in creating robust and
              scalable web applications. Passionate about clean code, user
              experience, and modern technologies.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href={CONTACT.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800/80 text-neutral-400 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-neutral-700 hover:text-white hover:shadow-lg hover:shadow-cyan-500/20"
                aria-label="GitHub"
              >
                <FaGithub size={18} />
              </a>
              <a
                href={CONTACT.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800/80 text-neutral-400 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-neutral-700 hover:text-white hover:shadow-lg hover:shadow-cyan-500/20"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href={CONTACT.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800/80 text-neutral-400 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-neutral-700 hover:text-white hover:shadow-lg hover:shadow-cyan-500/20"
                aria-label="Twitter"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href={CONTACT.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800/80 text-neutral-400 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-neutral-700 hover:text-white hover:shadow-lg hover:shadow-cyan-500/20"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-medium text-white">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-neutral-400 transition-colors hover:text-cyan-400"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-400 transition-colors hover:text-cyan-400"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-400 transition-colors hover:text-cyan-400"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-400 transition-colors hover:text-cyan-400"
                >
                  Technologies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-400 transition-colors hover:text-cyan-400"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-6 text-lg font-medium text-white">
              Contact Info
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="mr-2 mt-1 inline-block text-cyan-400">📍</span>
                <span className="text-neutral-400">{CONTACT.address}</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 inline-block text-cyan-400">📞</span>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="text-neutral-400 transition-colors hover:text-cyan-400"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1 inline-block text-cyan-400">✉️</span>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-neutral-400 transition-colors hover:text-cyan-400"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative border-t border-neutral-800/50 pt-8">
          {/* Footer Bottom */}
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-neutral-500 md:flex-row md:text-left">
            <div className="flex items-center">
              <FaRegCopyright className="mr-1" /> {currentYear} Sanandan
              Ghimire. All rights reserved.
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:justify-end">
              <a href="#" className="transition-colors hover:text-neutral-300">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors hover:text-neutral-300">
                Terms of Service
              </a>
              <a href="#" className="transition-colors hover:text-neutral-300">
                Cookie Policy
              </a>
            </div>
          </div>

          {/* Made with love */}
          <div className="mt-6 text-center text-xs text-neutral-600">
            Made with{" "}
            <FaHeart className="mx-1 inline-block animate-pulse text-red-500" />{" "}
            and modern web technologies
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
