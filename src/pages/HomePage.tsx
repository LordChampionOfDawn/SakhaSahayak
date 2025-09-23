import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bus, CloudRain, AlertTriangle, Calendar } from 'lucide-react';
import InteractiveMap from '../components/InteractiveMap';
import TypingAnimation from '../components/TypingAnimation';

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
      description: 'Hotels and restaurants',
      icon: Bed,
      path: '/accommodation',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'Transportation',
      description: 'Travel options',
      icon: Bus,
      path: '/transportation',
      color: 'from-orange-500 to-amber-600',
    },
    {
      title: 'Weather',
      description: 'Weather updates',
      icon: CloudRain,
      path: '/weather',
      color: 'from-purple-500 to-violet-600',
    },
    {
      title: 'Events & Festivals',
      description: 'Cultural experiences',
      icon: Calendar,
      path: '/events',
      color: 'from-purple-500 to-indigo-600',
    },
    {
      title: 'Digital Brochures',
      description: 'Download travel guides',
      icon: MapPin,
      path: '/brochures',
      color: 'from-teal-500 to-cyan-600',
    },
    {
      title: 'Emergency SOS',
      description: 'Emergency assistance',
      icon: AlertTriangle,
      path: '/disaster',
      color: 'from-red-500 to-pink-600',
    },
  ];


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <TypingAnimation />
            <p className="text-lg md:text-xl text-green-100 mb-4 max-w-2xl mx-auto">
              Your ultimate companion for exploring the "Land of Gods" - from majestic Himalayas to spiritual ghats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/guide"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Explore Destinations
              </Link>
              <Link
                to="/disaster"
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Emergency SOS
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 py-12 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          Explore Uttarakhand
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Link
                key={action.path}
                to={action.path}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-gray-100"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${action.color} text-white mb-4`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 transition-colors">
                  {action.title}
                </h3>
                <p className="text-gray-600">{action.description}</p>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Interactive Map Section */}
      <div className="px-4 py-12 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          Interactive Map
        </h2>
        <InteractiveMap />
      </div>

      {/* Tourist Gallery */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Popular Attractions
          </h2>
          <div className="relative overflow-hidden rounded-2xl">
            <div className="flex space-x-4 animate-scroll">
              {[
                { name: 'Kedarnath Temple', image: 'https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'Sacred Jyotirlinga at 3,583m altitude' },
                { name: 'Valley of Flowers', image: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'UNESCO World Heritage alpine valley' },
                { name: 'Nainital Lake', image: 'https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'Pristine hill station lake' },
                { name: 'Rishikesh Ganga', image: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'Yoga capital of the world' },
                { name: 'Auli Slopes', image: 'https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?auto=compress&cs=tinysrgb&w=800', caption: 'Premier skiing destination' }
              ].map((attraction, index) => (
                <div key={index} className="flex-shrink-0 w-80 relative">
                  <img 
                    src={attraction.image} 
                    alt={attraction.name}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-xl">
                    <h3 className="text-white font-semibold text-lg">{attraction.name}</h3>
                    <p className="text-white/90 text-sm">{attraction.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomePage;