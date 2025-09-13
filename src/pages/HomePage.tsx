import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bus, CloudRain, AlertTriangle, Camera, Star, Users, Phone, Calendar } from 'lucide-react';
import InteractiveMap from '../components/InteractiveMap';
import TypingAnimation from '../components/TypingAnimation';
import { eventsData } from '../data/eventsData';

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
    {
      title: 'Events & Festivals',
      description: 'Cultural events & celebrations',
      icon: Calendar,
      path: '/events',
      color: 'from-purple-500 to-indigo-600',
    },
  ];


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-800 via-green-700 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <TypingAnimation />
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

      {/* Interactive Map Section */}
      <div className="px-4 py-12 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          Explore Locations
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

      {/* Events & Festivals Section */}
      <div className="px-4 py-12 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          Events & Festivals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventsData.slice(0, 6).map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-48">
                <img 
                  src={event.image} 
                  alt={event.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                    {event.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-lg font-semibold mb-1">{event.name}</h3>
                  <div className="flex items-center text-white/90 text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    {event.location}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4 line-clamp-3">{event.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {event.timing}
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {event.highlights.slice(0, 2).map((highlight, index) => (
                      <span
                        key={index}
                        className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs"
                      >
                        {highlight}
                      </span>
                    ))}
                    {event.highlights.length > 2 && (
                      <span className="text-xs text-gray-500">+{event.highlights.length - 2} more</span>
                    )}
                  </div>
                </div>
                
                <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Section */}
      <div className="px-4 py-8 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Emergency Contacts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {[
            { title: 'Emergency Services', number: '112', type: 'All emergencies' },
            { title: 'Tourist Helpline', number: '1363', type: 'Tourist assistance' },
            { title: 'Disaster Management', number: '1070', type: 'Disaster response' }
          ].map((contact, index) => (
            <div key={index} className="bg-white border border-red-200 rounded-xl p-4">
              <div className="flex items-center space-x-3">
                <div className="bg-red-100 p-2 rounded-full">
                  <Phone className="h-5 w-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">{contact.title}</h3>
                  <p className="text-xs text-gray-600">{contact.type}</p>
                  <p className="text-red-600 font-bold">{contact.number}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-red-100 p-3 rounded-full">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Emergency SOS</h3>
                <p className="text-sm text-gray-600">Quick access to emergency assistance</p>
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