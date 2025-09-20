import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mountain, User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-green-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 p-2 rounded-lg">
              <Mountain className="h-6 w-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-gray-900">Uttarakhand Tourism</h1>
              <p className="text-xs text-gray-600">Your Mountain Companion</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/guide"
              className={`text-sm font-medium transition-colors ${
                isActive('/guide') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Tourist Guide
            </Link>
            <Link
              to="/accommodation"
              className={`text-sm font-medium transition-colors ${
                isActive('/accommodation') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Stay & Dine
            </Link>
            <Link
              to="/transportation"
              className={`text-sm font-medium transition-colors ${
                isActive('/transportation') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Transportation
            </Link>
            <Link
              to="/weather"
              className={`text-sm font-medium transition-colors ${
                isActive('/weather') ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
              }`}
            >
              Weather
            </Link>
            <Link
              to="/events"
              className={`text-sm font-medium transition-colors ${
                isActive('/events') ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              Events & Festivals
            </Link>
            <Link
              to="/disaster"
              className={`text-sm font-medium transition-colors ${
                isActive('/disaster') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'
              }`}
            >
              Emergency SOS
            </Link>
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link
                  to="/profile"
                  className="flex items-center space-x-2 text-gray-700 hover:text-green-600 transition-colors"
                >
                  <User className="h-5 w-5" />
                  <span className="hidden sm:block text-sm">{user.name}</span>
                </Link>
                <button
                  onClick={logout}
                  className="flex items-center space-x-1 text-gray-700 hover:text-red-600 transition-colors"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </>
            ) : (
              <Link
                to="/auth"
                className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;