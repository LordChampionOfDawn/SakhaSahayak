import React, { useState } from 'react';
import { MapPin, Star, Clock, Camera, X, IndianRupee, Calendar, Hotel, Utensils, Shield, AlertTriangle, Heart, Phone, CheckCircle, Users, Activity } from 'lucide-react';
import { touristPlaces } from '../data/touristPlaces';
import DetailsModal from '../components/DetailsModal';
import SafetyModal from '../components/SafetyModal';

const TouristGuidePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [detailsModal, setDetailsModal] = useState<{ isOpen: boolean; item: any }>({ isOpen: false, item: null });
  const [safetyModal, setSafetyModal] = useState<{ isOpen: boolean; item: any }>({ isOpen: false, item: null });

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
              </div>
              
              <div className="flex space-x-2 mt-4">
                <button 
                  onClick={() => setDetailsModal({ isOpen: true, item: place })}
                  className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </button>
                <button 
                  onClick={() => setSafetyModal({ isOpen: true, item: place })}
                  className="flex-1 bg-red-600 text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
                >
                  Safety Info
                </button>
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
      <DetailsModal
        isOpen={detailsModal.isOpen}
        onClose={() => setDetailsModal({ isOpen: false, item: null })}
        item={detailsModal.item}
        type="place"
      />
      
      <SafetyModal
        isOpen={safetyModal.isOpen}
        onClose={() => setSafetyModal({ isOpen: false, item: null })}
        item={safetyModal.item}
        type="place"
      />
    </div>
  );
};

export default TouristGuidePage;