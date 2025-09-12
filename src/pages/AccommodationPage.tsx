import React, { useState } from 'react';
import { Star, MapPin, Wifi, Car, Coffee, Utensils, User } from 'lucide-react';
import { accommodations } from '../data/accommodations';

const AccommodationPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hotels' | 'restaurants'>('hotels');
  const [priceFilter, setPriceFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | 'none'>('none');
  const [cuisineFilter, setCuisineFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const tabs = [
    { id: 'hotels' as const, name: 'Hotels & Homestays', icon: MapPin },
    { id: 'restaurants' as const, name: 'Restaurants', icon: Utensils },
  ];

  const priceFilters = [
    { id: 'all', name: 'All Prices' },
    { id: 'budget', name: 'Budget' },
    { id: 'mid-range', name: 'Mid-range' },
    { id: 'luxury', name: 'Luxury' },
  ];

  const cuisineFilters = [
    { id: 'all', name: 'All Cuisines' },
    { id: 'Indian', name: 'Indian' },
    { id: 'Chinese', name: 'Chinese' },
    { id: 'Italian', name: 'Italian' },
    { id: 'Continental', name: 'Continental' },
    { id: 'Multi-Cuisine', name: 'Multi-Cuisine' },
    { id: 'Local Cuisine', name: 'Local Cuisine' },
    { id: 'Cafe', name: 'Cafe' },
  ];

  const categoryFilters = [
    { id: 'all', name: 'All Categories' },
    { id: 'budget', name: 'Budget' },
    { id: 'mid-range', name: 'Mid-range' },
    { id: 'luxury', name: 'Luxury' },
  ];
  
  const filteredData = accommodations[activeTab]
    .filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    let matchesPrice = true;
    if (activeTab === 'hotels' && priceFilter !== 'all') {
      matchesPrice = (item as any).category === priceFilter;
    } else if (activeTab === 'restaurants' && priceFilter !== 'all') {
      const price = (item as any).price || 0;
      switch (priceFilter) {
        case 'budget':
          matchesPrice = price <= 400;
          break;
        case 'mid-range':
          matchesPrice = price > 400 && price <= 1000;
          break;
        case 'luxury':
          matchesPrice = price > 1000;
          break;
      }
    }
    
    const matchesCuisine = activeTab === 'hotels' || cuisineFilter === 'all' || (item as any).cuisine === cuisineFilter;
    const matchesCategory = activeTab === 'restaurants' || categoryFilter === 'all' || (item as any).category === categoryFilter;
    return matchesSearch && matchesPrice && matchesCuisine && matchesCategory;
  })
    .sort((a, b) => {
      if (sortOrder === 'none') return 0;
      
      const priceA = (a as any).price || 0;
      const priceB = (b as any).price || 0;
      
      if (sortOrder === 'asc') {
        return priceA - priceB;
      } else {
        return priceB - priceA;
      }
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

  const renderReviews = (reviews: any[]) => {
    if (!reviews || reviews.length === 0) return null;
    
    return (
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-900 mb-2">Recent Reviews</h4>
        <div className="space-y-2">
          {reviews.slice(0, 2).map((review, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-3">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center">
                  <User className="h-3 w-3 text-gray-400 mr-1" />
                  <span className="text-xs font-medium text-gray-700">{review.user}</span>
                </div>
                <div className="flex items-center">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
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
        
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium text-gray-700 px-2 py-1">Price:</span>
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
            <div className="ml-4 flex items-center space-x-2">
              <span className="text-sm font-medium text-gray-700">Sort:</span>
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : sortOrder === 'desc' ? 'none' : 'asc')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  sortOrder !== 'none'
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-green-50 border border-gray-200'
                }`}
              >
                Price {sortOrder === 'asc' ? '↑' : sortOrder === 'desc' ? '↓' : '↕'}
              </button>
            </div>
          </div>
          
          {activeTab === 'restaurants' && (
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-700 px-2 py-1">Cuisine:</span>
              {cuisineFilters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setCuisineFilter(filter.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    cuisineFilter === filter.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200'
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          )}
          
          {activeTab === 'hotels' && (
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-700 px-2 py-1">Category:</span>
              {categoryFilters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setCategoryFilter(filter.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    categoryFilter === filter.id
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-purple-50 border border-gray-200'
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="relative h-48">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-full object-cover"
              />
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
              
              {renderReviews(item.reviews)}
              
              <div className="flex items-center justify-between">
                <div className="text-green-600 font-semibold">
                  {activeTab === 'hotels' ? `₹${(item as any).price}` : `₹${(item as any).price}`}
                  {activeTab === 'hotels' && <span className="text-sm text-gray-500">/night</span>}
                </div>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                  {activeTab === 'hotels' ? 'Book Now' : 'Reserve Table'}
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