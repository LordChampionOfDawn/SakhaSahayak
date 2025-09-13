import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, MapPin, Bed, Bus, CloudRain, AlertTriangle, Calendar } from 'lucide-react';

const MobileNavigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/guide', icon: MapPin, label: 'Guide' },
    { path: '/accommodation', icon: Bed, label: 'Stay' },
    { path: '/transportation', icon: Bus, label: 'Travel' },
    { path: '/weather', icon: CloudRain, label: 'Weather' },
    { path: '/disaster', icon: AlertTriangle, label: 'SOS' },
    { path: '/events', icon: Calendar, label: 'Events' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <div className="flex justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center py-2 px-3 ${
                isActive(item.path)
                  ? 'text-green-600 bg-green-50'
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              <Icon className="h-5 w-5 mb-1" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNavigation;