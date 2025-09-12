import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bus, CloudRain, AlertTriangle, Camera, Star, Users } from 'lucide-react';

const HomePage: React.FC = () => {
  const quickActions = [
    {
      title: 'Tourist Guide',
      description: 'Discover amazing places',
      icon: MapPin,
      path: '/guide',
      color: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Stay & Dine',
      description: 'Find accommodation & food',
      icon: Bed,
      path: '/accommodation',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'Transportation',
      description: 'Plan your journey',
      icon: Bus,
      path: '/transportation',
      color: 'from-orange-500 to-amber-600',
    },
    {
      title: 'Weather',
      description: 'Real-time weather updates',
      icon: CloudRain,
      path: '/weather',
      color: 'from-purple-500 to-violet-600',
    },
    {
      title: 'Emergency SOS',
      description: 'Safety & disaster alerts',
      icon: AlertTriangle,
      path: '/disaster',
      color: 'from-red-500 to-pink-600',
    },
  ];

  const highlights = [
    {
      title: '50+ Destinations',
      description: 'Explore breathtaking locations',
      icon: Camera,
    },
    {
      title: '4.8★ Rating',
      description: 'Trusted by thousands',
      icon: Star,
    },
    {
      title: '24/7 Support',
      description: 'Always here to help',
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-800 via-green-700 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to
              <span className="block text-green-300">Uttarakhand</span>
            </h1>
            <p className="text-lg md:text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Your ultimate companion for exploring the "Land of Gods" - from majestic Himalayas to spiritual ghats, 
              we've got everything covered for your perfect journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/guide"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Explore Destinations
              </Link>
              <Link
                to="/weather"
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Check Weather
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 py-12 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          Quick Access
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Link
                key={action.path}
                to={action.path}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${action.color} text-white mb-4`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                  {action.title}
                </h3>
                <p className="text-gray-600">{action.description}</p>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Highlights */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex p-4 bg-white rounded-full shadow-lg mb-4">
                    <Icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Emergency Quick Access */}
      <div className="px-4 py-8 max-w-7xl mx-auto">
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-red-100 p-3 rounded-full">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Emergency Assistance</h3>
                <p className="text-sm text-gray-600">Quick access to help and safety information</p>
              </div>
            </div>
            <Link
              to="/disaster"
              className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              SOS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;