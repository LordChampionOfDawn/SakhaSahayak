import React from 'react';
import { X, MapPin, Clock, Star, Phone, Mail, Calendar, Users } from 'lucide-react';

interface DetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: any;
  type: 'place' | 'hotel' | 'restaurant' | 'event';
}

const DetailsModal: React.FC<DetailsModalProps> = ({ isOpen, onClose, item, type }) => {
  if (!isOpen || !item) return null;

  const renderPlaceDetails = () => (
    <>
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{item.name}</h2>
            <div className="flex items-center text-gray-600 mb-2">
              <MapPin className="h-4 w-4 mr-1" />
              {item.location}
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 mr-1" />
              <span className="font-medium">{item.rating}</span>
            </div>
          </div>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium capitalize">
            {item.category}
          </span>
        </div>
        
        <p className="text-gray-600 mb-6">{item.description}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-3">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-sm text-gray-600">Best Time: </span>
              <span className="font-medium">{item.bestTime}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 text-purple-600 mr-2" />
              <span className="text-sm text-gray-600">Duration: </span>
              <span className="font-medium">{item.visitDuration}</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-gray-600">Entry Fee: </span>
              <span className="font-medium">{item.entryFee}</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Highlights</h4>
            <div className="flex flex-wrap gap-2">
              {item.highlights?.map((highlight: string, index: number) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
              <MapPin className="h-5 w-5 text-green-600 mr-2" />
              Nearby Hotels
            </h4>
            <ul className="space-y-1">
              {item.nearbyHotels?.map((hotel: string, index: number) => (
                <li key={index} className="text-sm text-gray-600">• {hotel}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
              <Phone className="h-5 w-5 text-orange-600 mr-2" />
              Nearby Restaurants
            </h4>
            <ul className="space-y-1">
              {item.nearbyRestaurants?.map((restaurant: string, index: number) => (
                <li key={index} className="text-sm text-gray-600">• {restaurant}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );

  const renderHotelDetails = () => (
    <>
      <div className="mb-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{item.name}</h2>
            <div className="flex items-center text-gray-600 mb-2">
              <MapPin className="h-4 w-4 mr-1" />
              {item.location}
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 mr-1" />
              <span className="font-medium">{item.rating}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-green-600">₹{item.price}</div>
            <div className="text-sm text-gray-500">per night</div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-6">{item.description}</p>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Amenities</h4>
          <div className="grid grid-cols-2 gap-2">
            {item.amenities?.map((amenity: string, index: number) => (
              <div key={index} className="flex items-center text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                {amenity}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Contact Information</h4>
          <div className="space-y-2">
            <div className="flex items-center text-sm text-gray-600">
              <Phone className="h-4 w-4 mr-2" />
              +91-135-246-{1000 + item.id}
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Mail className="h-4 w-4 mr-2" />
              info@{item.name.toLowerCase().replace(/\s+/g, '')}.com
            </div>
          </div>
        </div>

        {item.reviews && item.reviews.length > 0 && (
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Recent Reviews</h4>
            <div className="space-y-3">
              {item.reviews.slice(0, 2).map((review: any, index: number) => (
                <div key={index} className="bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{review.user}</span>
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
        )}
      </div>
    </>
  );

  const renderRestaurantDetails = () => (
    <>
      <div className="mb-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{item.name}</h2>
            <div className="flex items-center text-gray-600 mb-2">
              <MapPin className="h-4 w-4 mr-1" />
              {item.location}
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 mr-1" />
              <span className="font-medium">{item.rating}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-green-600">{item.priceRange}</div>
            <div className="text-sm text-gray-500">{item.cuisine}</div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-6">{item.description}</p>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Specialties</h4>
          <div className="flex flex-wrap gap-2">
            {item.specialties?.map((specialty: string, index: number) => (
              <span key={index} className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">
                {specialty}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Restaurant Information</h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-sm text-gray-600">Cuisine Type:</span>
              <p className="font-medium">{item.cuisine}</p>
            </div>
            <div>
              <span className="text-sm text-gray-600">Price Range:</span>
              <p className="font-medium">{item.priceRange}</p>
            </div>
            <div>
              <span className="text-sm text-gray-600">Opening Hours:</span>
              <p className="font-medium">10:00 AM - 10:00 PM</p>
            </div>
            <div>
              <span className="text-sm text-gray-600">Contact:</span>
              <p className="font-medium">+91-135-247-{2000 + item.id}</p>
            </div>
          </div>
        </div>

        {item.reviews && item.reviews.length > 0 && (
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Recent Reviews</h4>
            <div className="space-y-3">
              {item.reviews.slice(0, 2).map((review: any, index: number) => (
                <div key={index} className="bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{review.user}</span>
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
        )}
      </div>
    </>
  );

  const renderEventDetails = () => (
    <>
      <div className="mb-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{item.name}</h2>
            <div className="flex items-center text-gray-600 mb-2">
              <MapPin className="h-4 w-4 mr-1" />
              {item.location}
            </div>
            <div className="flex items-center text-gray-600 mb-2">
              <Calendar className="h-4 w-4 mr-1" />
              {item.timing}
            </div>
          </div>
          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
            {item.category}
          </span>
        </div>
        
        <p className="text-gray-600 mb-6">{item.description}</p>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Event Details</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <span className="text-sm text-gray-600">Duration:</span>
              <p className="font-medium">3-5 days</p>
            </div>
            <div>
              <span className="text-sm text-gray-600">Expected Attendees:</span>
              <p className="font-medium">5,000 - 10,000 people</p>
            </div>
            <div>
              <span className="text-sm text-gray-600">Entry Fee:</span>
              <p className="font-medium">Free Entry</p>
            </div>
            <div>
              <span className="text-sm text-gray-600">Contact:</span>
              <p className="font-medium">+91-135-248-{3000 + item.id}</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Event Highlights</h4>
          <div className="grid grid-cols-2 gap-3">
            {item.highlights?.map((highlight: string, index: number) => (
              <div key={index} className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-purple-600" />
                <span className="text-sm text-gray-700">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">How to Reach</h4>
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              The event location is easily accessible by road from major cities. 
              Nearest railway station: {item.location} Railway Station (5 km). 
              Nearest airport: Jolly Grant Airport, Dehradun (45 km).
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Accommodation Nearby</h4>
          <div className="space-y-2">
            <p className="text-sm text-gray-600">• Government Guest Houses</p>
            <p className="text-sm text-gray-600">• Local Homestays</p>
            <p className="text-sm text-gray-600">• Budget Hotels</p>
            <p className="text-sm text-gray-600">• Dharamshalas</p>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img 
            src={item.image} 
            alt={item.name}
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
          {type === 'place' && renderPlaceDetails()}
          {type === 'hotel' && renderHotelDetails()}
          {type === 'restaurant' && renderRestaurantDetails()}
          {type === 'event' && renderEventDetails()}
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;