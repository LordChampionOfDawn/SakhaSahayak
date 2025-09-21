import React, { useState } from 'react';
import { MapPin, Hotel, Utensils, Phone, Eye, EyeOff, Building } from 'lucide-react';
import MapView from './MapView';

interface MapLocation {
  id: number;
  name: string;
  type: 'tourist' | 'hotel' | 'restaurant' | 'emergency' | 'university';
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
    university: true,
  });

  // Mock locations data
  const locations: MapLocation[] = [
    // Tourist Spots (Blue markers)
    { id: 1, name: 'Rishikesh', type: 'tourist', lat: 30.0869, lng: 78.2676, description: 'Yoga Capital of the World' },
    { id: 2, name: 'Nainital', type: 'tourist', lat: 29.3803, lng: 79.4636, description: 'Beautiful hill station with lake' },
    { id: 3, name: 'Mussoorie', type: 'tourist', lat: 30.4598, lng: 78.0664, description: 'Queen of Hills' },
    { id: 4, name: 'Haridwar', type: 'tourist', lat: 29.9457, lng: 78.1642, description: 'Holy city on Ganges' },
    { id: 5, name: 'Dehradun', type: 'tourist', lat: 30.3165, lng: 78.0322, description: 'Capital city of Uttarakhand' },
    { id: 6, name: 'Auli', type: 'tourist', lat: 30.5358, lng: 79.5660, description: 'Skiing destination' },
    { id: 7, name: 'Almora', type: 'tourist', lat: 29.5971, lng: 79.6593, description: 'Cultural town in Kumaon' },
    { id: 8, name: 'Jim Corbett', type: 'tourist', lat: 29.5316, lng: 78.9463, description: 'National Park' },
    { id: 9, name: 'Kedarnath', type: 'tourist', lat: 30.7346, lng: 79.0669, description: 'Sacred Jyotirlinga temple' },
    { id: 10, name: 'Badrinath', type: 'tourist', lat: 30.7433, lng: 79.4938, description: 'Char Dham temple' },
    { id: 11, name: 'Gangotri', type: 'tourist', lat: 30.9993, lng: 78.9411, description: 'Source of Ganges' },
    { id: 12, name: 'Yamunotri', type: 'tourist', lat: 31.0117, lng: 78.4509, description: 'Source of Yamuna' },
    
    // Emergency Centers (Red markers)
    { id: 13, name: 'AIIMS Rishikesh', type: 'emergency', lat: 30.0869, lng: 78.2676, description: 'Major hospital and emergency center' },
    { id: 14, name: 'Max Hospital Dehradun', type: 'emergency', lat: 30.3165, lng: 78.0322, description: 'Emergency medical services' },
    { id: 15, name: 'Base Hospital Haldwani', type: 'emergency', lat: 29.2183, lng: 79.5130, description: 'Emergency services' },
    
    // Quantum University (Green marker)
    { id: 16, name: 'Quantum University', type: 'university', lat: 29.8265, lng: 77.8940, description: 'Roorkee-Dehradun Highway' },
  ];

  const categories = [
    { id: 'tourist' as const, name: 'Tourist Spots', icon: MapPin, color: 'text-green-600 bg-green-100' },
    { id: 'emergency' as const, name: 'Emergency', icon: Phone, color: 'text-red-600 bg-red-100' },
    { id: 'university' as const, name: 'University', icon: Building, color: 'text-green-600 bg-green-100' },
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