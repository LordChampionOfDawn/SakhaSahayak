import React, { useState } from 'react';
import { Calendar, MapPin, Clock, X, Users, Star, Shield, AlertTriangle, Heart, Phone, CheckCircle } from 'lucide-react';
import { eventsData } from '../data/eventsData';
import DetailsModal from '../components/DetailsModal';

const EventsPage: React.FC = () => {
  const [detailsModal, setDetailsModal] = useState<{ isOpen: boolean; item: any }>({ isOpen: false, item: null });
  const [categoryFilter, setCategoryFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'Religious', name: 'Religious' },
    { id: 'Cultural', name: 'Cultural' },
    { id: 'Literary', name: 'Literary' },
    { id: 'Spiritual', name: 'Spiritual' },
    { id: 'Traditional', name: 'Traditional' },
  ];

  const filteredEvents = eventsData.filter(event => 
    categoryFilter === 'all' || event.category === categoryFilter
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Cultural Events & Festivals
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Experience the rich cultural heritage of Uttarakhand through its vibrant festivals and cultural celebrations.
        </p>
      </div>

      {/* Category Filters */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setCategoryFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                categoryFilter === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-purple-50 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
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
                  <Clock className="h-4 w-4 mr-1" />
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
              
              <div>
                <button 
                  onClick={() => setDetailsModal({ isOpen: true, item: event })}
                  className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 mb-4">
            <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>No events found for this category.</p>
            <p className="text-sm">Try selecting a different category.</p>
          </div>
        </div>
      )}

      {/* Event Modal */}
      <DetailsModal
        isOpen={detailsModal.isOpen}
        onClose={() => setDetailsModal({ isOpen: false, item: null })}
        item={detailsModal.item}
        type="event"
      />
    </div>
  );
};

export default EventsPage;