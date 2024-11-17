import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-md z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold bg-gradient-to-r from-[#fe2c55] to-[#25f4ee] text-transparent bg-clip-text">
            BoughtOnTikTok
          </a>
          
          <div className="hidden md:flex space-x-8">
            <a href="#creators" className="text-gray-600 hover:text-gray-900 transition-colors">
              Content Creators
            </a>
            <a href="#sellers" className="text-gray-600 hover:text-gray-900 transition-colors">
              Sellers
            </a>
            <a href="#affiliates" className="text-gray-600 hover:text-gray-900 transition-colors">
              Affiliates
            </a>
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
              Pricing
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-lg z-40 transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
          <a href="#creators" onClick={() => setMobileMenuOpen(false)}>Content Creators</a>
          <a href="#sellers" onClick={() => setMobileMenuOpen(false)}>Sellers</a>
          <a href="#affiliates" onClick={() => setMobileMenuOpen(false)}>Affiliates</a>
          <a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;