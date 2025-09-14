import React, { useState } from 'react';
import { MapPin, Hotel, Utensils, Phone, Eye, EyeOff } from 'lucide-react';
import MapView from './MapView';

interface MapLocation {
  id: number;
  name: string;
  type: 'tourist' | 'hotel' | 'restaurant' | 'emergency';
  lat: number;
  lng: number;
  description: string;
}

const InteractiveMap: React.FC = () => {
  const [visibleCategories, setVisibleCategories] = useState({
    tourist: true,
    hotel: true,
    restaurant: true,
    emergency: true,
  });

  // Mock locations data
  const locations: MapLocation[] = [
    { id: 1, name: 'Rishikesh', type: 'tourist', lat: 30.0869, lng: 78.2676, description: 'Yoga Capital of the World' },
    { id: 2, name: 'Nainital', type: 'tourist', lat: 29.3803, lng: 79.4636, description: 'Beautiful hill station with lake' },
    { id: 3, name: 'Kedarnath', type: 'tourist', lat: 30.7346, lng: 79.0669, description: 'Sacred Jyotirlinga temple' },
    { id: 4, name: 'The Himalayan Heritage Resort', type: 'hotel', lat: 30.0869, lng: 78.2676, description: 'Luxury resort in Rishikesh' },
    { id: 5, name: 'Hotel Snow View Palace', type: 'hotel', lat: 29.3803, lng: 79.4636, description: 'Lake view hotel in Nainital' },
    { id: 6, name: 'Ganga View Restaurant', type: 'restaurant', lat: 30.0869, lng: 78.2676, description: 'Multi-cuisine with river views' },
    { id: 7, name: 'Boat House Club Restaurant', type: 'restaurant', lat: 29.3803, lng: 79.4636, description: 'Continental cuisine by the lake' },
    { id: 8, name: 'Emergency Services', type: 'emergency', lat: 30.0869, lng: 78.2676, description: 'Police & Medical Services' },
  ];

  const categories = [
    { id: 'tourist' as const, name: 'Tourist Spots', icon: MapPin, color: 'text-green-600 bg-green-100' },
    { id: 'hotel' as const, name: 'Hotels', icon: Hotel, color: 'text-blue-600 bg-blue-100' },
    { id: 'restaurant' as const, name: 'Restaurants', icon: Utensils, color: 'text-orange-600 bg-orange-100' },
    { id: 'emergency' as const, name: 'Emergency', icon: Phone, color: 'text-red-600 bg-red-100' },
  ];

  const toggleCategory = (categoryId: keyof typeof visibleCategories) => {
    setVisibleCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const filteredLocations = locations.filter(location => visibleCategories[location.type]);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Interactive Map</h3>
        
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const Icon = category.icon;
            const isVisible = visibleCategories[category.id];
            return (
              <button
                key={category.id}
                onClick={() => toggleCategory(category.id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  isVisible 
                    ? `${category.color} border border-current` 
                    : 'bg-gray-100 text-gray-500 border border-gray-200'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{category.name}</span>
                {isVisible ? <Eye className="h-3 w-3" /> : <EyeOff className="h-3 w-3" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Map Container */}
      <MapView />

      {/* Location List */}
      <div className="p-6">
        <h4 className="font-semibold text-gray-900 mb-3">Visible Locations</h4>
        <div className="space-y-2 max-h-40 overflow-y-auto">
          {filteredLocations.map((location) => {
            const category = categories.find(cat => cat.id === location.type);
            if (!category) return null;
            
            const Icon = category.icon;
            
            return (
              <div key={location.id} className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg">
                <div className={`p-1 rounded ${category.color}`}>
                  <Icon className="h-3 w-3" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900">{location.name}</div>
                  <div className="text-xs text-gray-500">{location.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;