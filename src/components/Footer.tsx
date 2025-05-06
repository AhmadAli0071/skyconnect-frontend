import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-sky/10 mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-white">
                Sky<span className="text-sky glow-text">Connect</span>
              </span>
            </Link>
            <p className="text-white/60 max-w-xs">
              Providing high-speed internet and premium TV services across the United States.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/60 hover:text-sky">Home</Link></li>
              <li><a href="/#services" className="text-white/60 hover:text-sky">Services</a></li>
              <li><a href="/#packages" className="text-white/60 hover:text-sky">Packages</a></li>
              <li><Link to="/all-packages" className="text-white/60 hover:text-sky">All Packages</Link></li>
              <li><Link to="/buy-form" className="text-white/60 hover:text-sky">Buy Internet & TV</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/60">
                <MapPin size={18} className="text-sky" />
                <span>9528 Miramar Rd, San Diego, CA 92126</span>
              </li>
              <li className="flex items-center gap-2 text-white/60">
                <Phone size={18} className="text-sky" />
                <a href="tel:+18669476817" className="hover:text-sky">+1 (818) 660-0126</a>
              </li>

              <li className="flex items-center gap-2 text-white/60">
                <Phone size={18} className="text-sky" />
                <a href="tel:+18669476817" className="hover:text-sky">+1 (952S) 592-0128</a>
              </li>


              <li className="flex items-center gap-2 text-white/60">
                <Mail size={18} className="text-sky" />
                <a href="mailto:info@skyconnect.com" className="hover:text-sky">info@skyconnect.com</a>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Connect With Us</h3>
            <div className="flex gap-4">
              {/* Facebook Icon */}
              <a href="https://www.facebook.com/profile.php?id=61575582134993" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full bg-muted hover:bg-sky flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-white" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
              </a>

              {/* WhatsApp Icon */}
              <a href="https://wa.me/15632020835" target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full bg-muted hover:bg-sky flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 448 512" className="text-white">
                  <path d="M380.9 97.1C339-5.8 219.4-34 130.6 16.6 58.2 57.3 21.2 138.3 40 217.5L7.1 364.9c-4.4 20.3 13.3 38 33.6 33.6l147.4-33c79.2 18.8 160.2-18.2 200.9-90.6 50.6-88.8 21.8-208.4-48.1-258.8zM224 349.9c-33.1 0-65.3-9.8-92.6-28.5l-6.5-4.3-89.5 20.1 20.1-89.5-4.3-6.5c-31-47-34.1-107.1-8-157.6 29.7-57.6 91.6-93.2 158-93.2 47.3 0 91.6 18.5 124.7 51.7 33.1 33.1 51.7 77.4 51.7 124.7 0 66.4-35.6 128.3-93.2 158-24.2 12.4-50.7 18.1-77.5 18.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="border-t border-sky/10 mt-8 pt-8 text-center text-white/40">
          <p>&copy; {currentYear} Sky Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
