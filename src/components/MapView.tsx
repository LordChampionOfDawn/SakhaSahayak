import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { accommodations } from '../data/accommodations';

// Fix for default markers in React-Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Create custom icons for different types
const hotelIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
  className: 'hotel-marker'
});

const restaurantIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
  className: 'restaurant-marker'
});

// Placeholder coordinates for different locations in Uttarakhand
const locationCoords: { [key: string]: [number, number] } = {
  'Mussoorie': [30.4598, 78.0664],
  'Nainital': [29.3803, 79.4636],
  'Rishikesh': [30.0869, 78.2676],
  'Haridwar': [29.9457, 78.1642],
  'Almora': [29.5971, 79.6593],
  'Dehradun': [30.3165, 78.0322],
  'Auli': [30.5358, 79.5660],
  'Jim Corbett': [29.5316, 78.9463],
  'Pauri': [30.1534, 78.7822],
  'Chamoli': [30.4086, 79.3206]
};

const MapView: React.FC = () => {
  // Combine hotels and restaurants with coordinates
  const mapMarkers = [
    ...accommodations.hotels.map(hotel => ({
      ...hotel,
      type: 'hotel' as const,
      coordinates: locationCoords[hotel.location] || [30.0668, 79.0193]
    })),
    ...accommodations.restaurants.map(restaurant => ({
      ...restaurant,
      type: 'restaurant' as const,
      coordinates: locationCoords[restaurant.location] || [30.0668, 79.0193]
    }))
  ];

  return (
    <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg">
      <MapContainer
        center={[30.0668, 79.0193]}
        zoom={8}
        style={{ height: '100%', width: '100%' }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {mapMarkers.map((marker) => (
          <Marker
            key={`${marker.type}-${marker.id}`}
            position={marker.coordinates}
            icon={marker.type === 'hotel' ? hotelIcon : restaurantIcon}
          >
            <Popup className="custom-popup">
              <div className="p-2 min-w-[200px]">
                <div className="flex items-center mb-2">
                  <div className={`w-3 h-3 rounded-full mr-2 ${
                    marker.type === 'hotel' ? 'bg-blue-500' : 'bg-orange-500'
                  }`}></div>
                  <span className="text-xs font-medium text-gray-600 capitalize">
                    {marker.type}
                  </span>
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-1">{marker.name}</h3>
                
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                  {marker.description}
                </p>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span className="font-medium">{marker.rating}</span>
                  </div>
                  <div className="text-green-600 font-semibold">
                    {marker.type === 'hotel' 
                      ? `₹${(marker as any).price}/night`
                      : (marker as any).priceRange
                    }
                  </div>
                </div>
                
                <div className="mt-2 text-xs text-gray-500">
                  📍 {marker.location}
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;