import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-base-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm mb-10">
          
          {/* Legal */}
          <div>            
            <img className='w-12' src="https://i.ibb.co.com/S4vdnWH6/pngtree-digital-media-play-button-gradient-color-hexagon-marketing-agency-mobile-app-png-image-64824.png" alt="" />
            <h3 className="text-lg font-semibold mb-4">Pngtree-Store</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="hover:text-blue-700">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-blue-700">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Developer Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Developers</h3>
            <ul className="space-y-2">
              <li><Link to="/docs" className="hover:text-blue-700">Documentation</Link></li>
              <li><Link to="/api" className="hover:text-blue-700">API Reference</Link></li>
              <li><Link to="/support" className="hover:text-blue-700">Support</Link></li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-blue-700">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-blue-700">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-blue-700">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link to="https://www.facebook.com/" target='_blank' className="hover:text-blue-700">
                <FaFacebookF className="text-xl" />
              </Link>
              <Link to="https://www.facebook.com/" target='_blank' className="hover:text-blue-700">
                <FaTwitter className="text-xl" />
              </Link>
              <Link to="https://github.com/" target='_blank' className="hover:text-blue-700">
                <FaGithub className="text-xl" />
              </Link>
              <Link to="https://www.linkedin.com/" target='_blank' className="hover:text-blue-700">
                <FaLinkedinIn className="text-xl" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-400">
          © {new Date().getFullYear()} MyCompany. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
