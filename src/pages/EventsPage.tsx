import React, { useState } from 'react';
import { Calendar, MapPin, Clock, X, Users, Star, Shield, AlertTriangle, Heart, Phone, CheckCircle } from 'lucide-react';
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
          
          {/* Safety Information */}
          <div className="mb-6 p-4 bg-green-50 rounded-xl border border-green-200">
            <h4 className="font-semibold text-green-900 mb-3 flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Event Safety Information
            </h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center text-green-700">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span>Medical facilities on-site</span>
              </div>
              <div className="flex items-center text-green-700">
                <Users className="h-4 w-4 mr-2" />
                <span>Crowd management active</span>
              </div>
              <div className="flex items-center text-green-700">
                <Phone className="h-4 w-4 mr-2" />
                <span>Emergency services nearby</span>
              </div>
              <div className="flex items-center text-green-700">
                <AlertTriangle className="h-4 w-4 mr-2" />
                <span>Weather contingency plans</span>
              </div>
            </div>
          </div>

          {/* Crowd Safety */}
          <div className="mb-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
            <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Crowd Safety & Capacity
            </h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-blue-700">Expected Attendance:</span>
                <span className="font-medium text-blue-900">5,000 - 8,000 people</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-blue-700">Current Capacity:</span>
                <span className="font-medium text-green-600">Safe levels</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-blue-700">Emergency Exits:</span>
                <span className="font-medium text-blue-900">Multiple routes available</span>
              </div>
            </div>
          </div>

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
          
          {/* Emergency Procedures */}
          <div className="mb-6 p-4 bg-red-50 rounded-xl border border-red-200">
            <h4 className="font-semibold text-red-900 mb-3 flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              Emergency Procedures
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-red-700 mb-1">Medical Emergency:</p>
                <p className="font-medium text-red-900">On-site medical team available</p>
              </div>
              <div>
                <p className="text-red-700 mb-1">Emergency Contact:</p>
                <p className="font-medium text-red-900">+91-135-246-1111</p>
              </div>
              <div>
                <p className="text-red-700 mb-1">Evacuation Routes:</p>
                <p className="font-medium text-red-900">Clearly marked exits</p>
              </div>
              <div>
                <p className="text-red-700 mb-1">Weather Backup:</p>
                <p className="font-medium text-red-900">Indoor venue available</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 rounded-xl p-4">
            <h4 className="font-semibold text-purple-900 mb-2 flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Safe Attendance Planning
            </h4>
            <p className="text-sm text-purple-700 mb-3">
              Plan your safe visit with advance booking, emergency contacts, and safety briefing included.
            </p>
            <div className="flex space-x-3">
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                Safe Directions
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center">
                <Heart className="h-4 w-4 mr-1" />
                Safety Briefing
              </button>
            </div>
          </div>

          {/* Group Safety Planning */}
          <div className="mt-6 p-4 bg-yellow-50 rounded-xl border border-yellow-200">
            <h4 className="font-semibold text-yellow-900 mb-3 flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Group Safety Coordination
            </h4>
            <p className="text-sm text-yellow-700 mb-3">
              Organize safe group attendance with coordinated entry, emergency contacts, and group safety protocols.
            </p>
            <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-yellow-700 transition-colors text-sm">
              Plan Group Safety
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
          Safe Cultural Events & Festivals
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Experience the rich cultural heritage of Uttarakhand through its vibrant festivals with comprehensive safety management, crowd control, and emergency protocols.
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
              
              {/* Safety Capacity Indicator */}
              <div className="flex items-center justify-between mb-4 p-2 bg-green-50 rounded-lg">
                <div className="flex items-center">
                  <Shield className="h-4 w-4 text-green-600 mr-1" />
                  <span className="text-sm font-medium text-green-800">Safety Status</span>
                </div>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                  Safe Capacity
                </span>
              </div>

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
                  onClick={() => setSelectedEvent(event)}
                  className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-center"
                >
                  <Shield className="h-4 w-4 mr-1" />
                  Safety Info
                </button>
                
                {/* Quick Safety Status */}
                <div className="mt-2 flex items-center justify-between text-xs">
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    <span>Medical On-site</span>
                  </div>
                  <div className="flex items-center text-blue-600">
                    <Users className="h-3 w-3 mr-1" />
                    <span>Crowd Managed</span>
                  </div>
                </div>
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
      {selectedEvent && (
        <EventModal 
          event={selectedEvent} 
          onClose={() => setSelectedEvent(null)} 
        />
      )}

      {/* Event Safety Management Panel */}
      <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border border-green-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Heart className="h-5 w-5 text-green-600 mr-2" />
          Comprehensive Event Safety Management
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="bg-green-100 p-3 rounded-full inline-flex mb-3">
              <Shield className="h-6 w-6 text-green-600" />
            </div>
            <h4 className="font-medium text-gray-900 mb-2">Safety Protocols</h4>
            <p className="text-sm text-gray-600">Comprehensive safety measures for all events</p>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="bg-blue-100 p-3 rounded-full inline-flex mb-3">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <h4 className="font-medium text-gray-900 mb-2">Crowd Control</h4>
            <p className="text-sm text-gray-600">Real-time crowd monitoring and management</p>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="bg-red-100 p-3 rounded-full inline-flex mb-3">
              <Heart className="h-6 w-6 text-red-600" />
            </div>
            <h4 className="font-medium text-gray-900 mb-2">Medical Support</h4>
            <p className="text-sm text-gray-600">On-site medical facilities and emergency response</p>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <div className="bg-purple-100 p-3 rounded-full inline-flex mb-3">
              <Phone className="h-6 w-6 text-purple-600" />
            </div>
            <h4 className="font-medium text-gray-900 mb-2">Emergency Access</h4>
            <p className="text-sm text-gray-600">Quick access to emergency services and contacts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;