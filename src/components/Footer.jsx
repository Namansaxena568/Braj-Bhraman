import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  const socialLinks = [
    { icon: <FaFacebookF />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaTwitter />, href: "#" },
    { icon: <FaLinkedinIn />, href: "#" },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 border-t border-gray-700">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-start md:items-center">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-orange-400 mb-3">Braj Brahman</h2>
          <p className="text-sm sm:text-base">© {new Date().getFullYear()} All Rights Reserved.</p>
        </div>

        {/* Center Section */}
        <div className="text-center">
          <p className="mb-4 text-sm sm:text-base">
            Made with <span className="text-red-500">❤️</span> using React + Tailwind CSS
          </p>
          <div className="flex justify-center gap-5 flex-wrap">
            {socialLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                whileHover={{ scale: 1.2, color: "#F97316" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-gray-300 text-2xl"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-right mt-6 md:mt-0 break-words">
          <p className="font-semibold mb-2 text-sm sm:text-base">Contact</p>
          <a
            href="mailto:hello@brajbrahman.dev"
            className="hover:text-orange-400 transition-colors text-sm sm:text-base break-words"
          >
            hello@brajbrahman.dev
          </a>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-xs sm:text-sm text-gray-500 px-4">
        Designed & Developed with <span className="text-orange-400 font-semibold">passion</span> by Braj Brahman Team
      </div>
    </footer>
  );
}
