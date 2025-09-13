import React, { useState } from 'react';
import { Calendar, MapPin, Clock, X, Users, Star } from 'lucide-react';
import { eventsData } from '../data/eventsData';

const EventsPage: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
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

  const EventModal = ({ event, onClose }: { event: any; onClose: () => void }) => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img 
            src={event.image} 
            alt={event.name}
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
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{event.name}</h2>
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="h-4 w-4 mr-1" />
                {event.location}
              </div>
              <div className="flex items-center text-gray-600 mb-2">
                <Clock className="h-4 w-4 mr-1" />
                {event.timing}
              </div>
            </div>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
              {event.category}
            </span>
          </div>
          
          <p className="text-gray-600 mb-6">{event.description}</p>
          
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Event Highlights</h4>
            <div className="grid grid-cols-2 gap-3">
              {event.highlights.map((highlight: string, index: number) => (
                <div key={index} className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-purple-600" />
                  <span className="text-sm text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-4">
            <h4 className="font-semibold text-purple-900 mb-2">Planning to Attend?</h4>
            <p className="text-sm text-purple-700 mb-3">
              Make sure to plan your visit during the event timing and book accommodation in advance.
            </p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors">
              Get Directions
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Events & Festivals
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Experience the rich cultural heritage of Uttarakhand through its vibrant festivals, spiritual gatherings, and traditional celebrations.
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
              
              <button 
                onClick={() => setSelectedEvent(event)}
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors"
              >
                Learn More
              </button>
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
      {selectedEvent && (
        <EventModal 
          event={selectedEvent} 
          onClose={() => setSelectedEvent(null)} 
        />
      )}
    </div>
  );
};

export default EventsPage;