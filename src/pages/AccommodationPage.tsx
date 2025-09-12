import React, { useState } from 'react';
import { Star, MapPin, Wifi, Car, Coffee, Utensils } from 'lucide-react';
import { accommodations } from '../data/accommodations';

const AccommodationPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hotels' | 'restaurants'>('hotels');
  const [priceFilter, setPriceFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const tabs = [
    { id: 'hotels' as const, name: 'Hotels & Homestays', icon: MapPin },
    { id: 'restaurants' as const, name: 'Restaurants', icon: Utensils },
  ];

  const priceFilters = [
    { id: 'all', name: 'All Prices' },
    { id: 'budget', name: 'Budget (₹0-2000)' },
    { id: 'mid', name: 'Mid-range (₹2000-5000)' },
    { id: 'luxury', name: 'Luxury (₹5000+)' },
  ];

  const filteredData = accommodations[activeTab].filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = priceFilter === 'all' || item.priceRange === priceFilter;
    return matchesSearch && matchesPrice;
  });

  const renderAmenities = (amenities: string[]) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      'Free WiFi': Wifi,
      'Parking': Car,
      'Restaurant': Utensils,
      'Room Service': Coffee,
    };

    return (
      <div className="flex flex-wrap gap-2">
        {amenities.slice(0, 3).map((amenity) => {
          const Icon = iconMap[amenity];
          return (
            <div key={amenity} className="flex items-center bg-gray-100 rounded-full px-2 py-1">
              {Icon && <Icon className="h-3 w-3 mr-1" />}
              <span className="text-xs text-gray-600">{amenity}</span>
            </div>
          );
        })}
        {amenities.length > 3 && (
          <span className="text-xs text-gray-500">+{amenities.length - 3} more</span>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Stay & Dine
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find the perfect accommodation and dining experiences in Uttarakhand, from cozy homestays to fine dining restaurants.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-green-50 border border-gray-200'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{tab.name}</span>
            </button>
          );
        })}
      </div>

      {/* Filters */}
      <div className="mb-8 space-y-4">
        <input
          type="text"
          placeholder={`Search ${activeTab}...`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-colors"
        />
        
        <div className="flex flex-wrap gap-2">
          {priceFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setPriceFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                priceFilter === filter.id
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-green-50 border border-gray-200'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="relative h-48 bg-gradient-to-br from-green-400 to-blue-500">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute top-4 right-4">
                <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700 capitalize">
                  {item.type}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="text-sm font-medium">{item.rating}</span>
                </div>
              </div>
              
              <div className="flex items-center text-gray-600 text-sm mb-3">
                <MapPin className="h-4 w-4 mr-1" />
                {item.location}
              </div>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
              
              {activeTab === 'hotels' && (
                <div className="mb-4">
                  {renderAmenities(item.amenities || [])}
                </div>
              )}
              
              <div className="flex items-center justify-between">
                <div className="text-green-600 font-semibold">
                  {item.price}
                  {activeTab === 'hotels' && <span className="text-sm text-gray-500">/night</span>}
                </div>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                  {activeTab === 'hotels' ? 'Book Now' : 'View Menu'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredData.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 mb-4">
            <div className="h-12 w-12 mx-auto mb-4 opacity-50 bg-gray-200 rounded-full flex items-center justify-center">
              {activeTab === 'hotels' ? <MapPin className="h-6 w-6" /> : <Utensils className="h-6 w-6" />}
            </div>
            <p>No {activeTab} found matching your criteria.</p>
            <p className="text-sm">Try adjusting your search or price filter.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccommodationPage;