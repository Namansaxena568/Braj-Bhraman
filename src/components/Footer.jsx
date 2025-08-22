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
      <div className="container mx-auto py-12 grid md:grid-cols-3 gap-6 items-start md:items-center">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-orange-400 mb-3">Braj Brahman</h2>
          <p className="text-sm md:text-base">© {new Date().getFullYear()} All Rights Reserved.</p>
        </div>

        {/* Center Section */}
        <div className="text-center">
          <p className="mb-4 md:mb-3 text-sm md:text-base">
            Made with <span className="text-red-500">❤️</span> using React + Tailwind CSS
          </p>
          <div className="flex justify-center gap-5">
            {socialLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                whileHover={{ scale: 1.2, color: "#F97316" }} // orange-500 hover
                transition={{ type: "spring", stiffness: 300 }}
                className="text-gray-300 text-xl md:text-2xl"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-right mt-6 md:mt-0">
          <p className="font-semibold mb-2 md:mb-1 text-sm md:text-base">Contact</p>
          <a
            href="mailto:hello@brajbrahman.dev"
            className="hover:text-orange-400 transition-colors text-sm md:text-base break-all"
          >
            hello@brajbrahman.dev
          </a>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-xs md:text-sm text-gray-500">
        Designed & Developed with <span className="text-orange-400 font-semibold">passion</span> by Braj Brahman Team
      </div>
    </footer>
  );
}
