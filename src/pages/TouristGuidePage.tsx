import React, { useState } from 'react';
import { MapPin, Star, Clock, Camera, X, IndianRupee, Calendar, Hotel, Utensils, Shield, AlertTriangle, Heart, Phone, CheckCircle, Users, Activity } from 'lucide-react';
import { touristPlaces } from '../data/touristPlaces';

const TouristGuidePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlace, setSelectedPlace] = useState<any>(null);

  const categories = [
    { id: 'all', name: 'All Places' },
    { id: 'spiritual', name: 'Spiritual' },
    { id: 'adventure', name: 'Adventure' },
    { id: 'nature', name: 'Nature' },
    { id: 'cultural', name: 'Cultural' },
    { id: 'safe-rated', name: 'High Safety Rating' },
    { id: 'emergency-ready', name: 'Emergency Ready' },
  ];

  const filteredPlaces = touristPlaces.filter(place => {
    const matchesCategory = selectedCategory === 'all' || place.category === selectedCategory;
    const matchesSearch = place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         place.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const PlaceModal = ({ place, onClose }: { place: any; onClose: () => void }) => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img 
            src={place.image} 
            alt={place.name}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{place.name}</h2>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="h-4 w-4 mr-1" />
                {place.location}
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span className="font-medium">{place.rating}</span>
              </div>
            </div>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium capitalize">
              {place.category}
            </span>
          </div>
          
          <p className="text-gray-600 mb-6">{place.description}</p>
          
          {/* Current Safety Status */}
          <div className="mb-6 p-4 bg-green-50 rounded-xl border border-green-200">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-green-900 flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Current Safety Status
              </h4>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Safe to Visit
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center text-green-700">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span>Weather: Clear</span>
              </div>
              <div className="flex items-center text-green-700">
                <Heart className="h-4 w-4 mr-2" />
                <span>Medical: 2km away</span>
              </div>
              <div className="flex items-center text-green-700">
                <Phone className="h-4 w-4 mr-2" />
                <span>Network: Full coverage</span>
              </div>
              <div className="flex items-center text-green-700">
                <Users className="h-4 w-4 mr-2" />
                <span>Crowd: Moderate</span>
              </div>
            </div>
          </div>

          {/* Risk Assessment */}
          <div className="mb-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2" />
              Risk Assessment & Precautions
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-blue-700">Difficulty Level:</span>
                <span className="font-medium text-blue-900">Moderate</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-blue-700">Fitness Required:</span>
                <span className="font-medium text-blue-900">Good</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-blue-700">Safety Equipment:</span>
                <span className="font-medium text-blue-900">Recommended</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-3">
              <div className="flex items-center">
                <IndianRupee className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm text-gray-600">Entry Fee: </span>
                <span className="font-medium">{place.entryFee}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 text-blue-600 mr-2" />
                <span className="text-sm text-gray-600">Best Time: </span>
                <span className="font-medium">{place.bestTime}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-purple-600 mr-2" />
                <span className="text-sm text-gray-600">Duration: </span>
                <span className="font-medium">{place.visitDuration}</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Highlights</h4>
              <div className="flex flex-wrap gap-2">
                {place.highlights.map((highlight: string, index: number) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Emergency Information */}
          <div className="mb-6 p-4 bg-red-50 rounded-xl border border-red-200">
            <h4 className="font-semibold text-red-900 mb-3 flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              Emergency Information
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-red-700 mb-1">Nearest Hospital:</p>
                <p className="font-medium text-red-900">District Hospital (5km)</p>
              </div>
              <div>
                <p className="text-red-700 mb-1">Emergency Contact:</p>
                <p className="font-medium text-red-900">+91-135-246-1111</p>
              </div>
              <div>
                <p className="text-red-700 mb-1">Rescue Services:</p>
                <p className="font-medium text-red-900">Available 24/7</p>
              </div>
              <div>
                <p className="text-red-700 mb-1">Evacuation Route:</p>
                <p className="font-medium text-red-900">Main highway access</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center mb-3">
                <Hotel className="h-5 w-5 text-green-600 mr-2" />
                <h4 className="font-semibold text-gray-900">Nearby Hotels</h4>
              </div>
              <ul className="space-y-1">
                {place.nearbyHotels.map((hotel: string, index: number) => (
                  <li key={index} className="text-sm text-gray-600">• {hotel}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <div className="flex items-center mb-3">
                <Utensils className="h-5 w-5 text-orange-600 mr-2" />
                <h4 className="font-semibold text-gray-900">Nearby Restaurants</h4>
              </div>
              <ul className="space-y-1">
                {place.nearbyRestaurants.map((restaurant: string, index: number) => (
                  <li key={index} className="text-sm text-gray-600">• {restaurant}</li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Safety Checklist */}
          <div className="mt-6 p-4 bg-yellow-50 rounded-xl border border-yellow-200">
            <h4 className="font-semibold text-yellow-900 mb-3 flex items-center">
              <Activity className="h-5 w-5 mr-2" />
              Pre-Visit Safety Checklist
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              {[
                'Check weather conditions',
                'Inform family about itinerary',
                'Carry emergency contacts',
                'Pack first aid kit',
                'Ensure phone is charged',
                'Carry sufficient water'
              ].map((item, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-yellow-300 text-yellow-600 focus:ring-yellow-500" />
                  <span className="text-yellow-800">{item}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Discover Uttarakhand Safely
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          From sacred temples to breathtaking peaks, explore Uttarakhand's captivating destinations with comprehensive safety information and real-time updates.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <input
          type="text"
          placeholder="Search places..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors"
        />
        
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-green-50 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Places Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlaces.map((place) => (
          <div
            key={place.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            <div className="relative h-48">
              <img 
                src={place.image} 
                alt={place.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute top-4 right-4">
                <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700 capitalize">
                  {place.category}
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white text-lg font-semibold mb-1">{place.name}</h3>
                <div className="flex items-center text-white/90 text-sm">
                  <MapPin className="h-4 w-4 mr-1" />
                  {place.location}
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-600 mb-4 line-clamp-3">{place.description}</p>
              
              {/* Safety Score */}
              <div className="flex items-center justify-between mb-4 p-2 bg-green-50 rounded-lg">
                <div className="flex items-center">
                  <Shield className="h-4 w-4 text-green-600 mr-1" />
                  <span className="text-sm font-medium text-green-800">Safety Score</span>
                </div>
                <div className="flex items-center">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 text-green-500 fill-current" />
                  ))}
                  <span className="text-xs text-green-600 ml-1">4.2/5</span>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="text-sm font-medium">{place.rating}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  {place.visitDuration}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Best time: {place.bestTime}
                </div>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => setSelectedPlace(place)}
                    className="bg-blue-600 text-white px-3 py-1 rounded-lg text-xs font-medium hover:bg-blue-700 transition-colors"
                  >
                    Learn More
                  </button>
                  <button 
                    onClick={() => setSelectedPlace(place)}
                    className="bg-red-600 text-white px-3 py-1 rounded-lg text-xs font-medium hover:bg-red-700 transition-colors"
                  >
                    Safety Info
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredPlaces.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 mb-4">
            <MapPin className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No places found matching your criteria.</p>
            <p className="text-sm">Try adjusting your search or category filter.</p>
          </div>
        </div>
      )}

      {/* Modal */}
      {selectedPlace && (
        <PlaceModal 
          place={selectedPlace} 
          onClose={() => setSelectedPlace(null)} 
        />
      )}
    </div>
  );
};

export default TouristGuidePage;