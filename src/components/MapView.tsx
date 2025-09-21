import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in React-Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Create custom icons for different marker types
const blueIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
  className: 'blue-marker'
});

const redIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iNDEiIHZpZXdCb3g9IjAgMCAyNSA0MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjUgMEMxOS40MDM2IDAgMjUgNS41OTY0NCAyNSAxMi41QzI1IDE5LjQwMzYgMTkuNDAzNiAyNSAxMi41IDI1QzUuNTk2NDQgMjUgMCAxOS40MDM2IDAgMTIuNUMwIDUuNTk2NDQgNS41OTY0NCAwIDEyLjUgMFoiIGZpbGw9IiNEQzI2MjYiLz4KPHBhdGggZD0iTTEyLjUgNDFMMTIuNSAyNSIgc3Ryb2tlPSIjREMyNjI2IiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+',
  iconRetinaUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iNDEiIHZpZXdCb3g9IjAgMCAyNSA0MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjUgMEMxOS40MDM2IDAgMjUgNS41OTY0NCAyNSAxMi41QzI1IDE5LjQwMzYgMTkuNDAzNiAyNSAxMi41IDI1QzUuNTk2NDQgMjUgMCAxOS40MDM2IDAgMTIuNUMwIDUuNTk2NDQgNS41OTY0NCAwIDEyLjUgMFoiIGZpbGw9IiNEQzI2MjYiLz4KPHBhdGggZD0iTTEyLjUgNDFMMTIuNSAyNSIgc3Ryb2tlPSIjREMyNjI2IiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
  className: 'red-marker'
});

const greenIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iNDEiIHZpZXdCb3g9IjAgMCAyNSA0MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjUgMEMxOS40MDM2IDAgMjUgNS41OTY0NCAyNSAxMi41QzI1IDE5LjQwMzYgMTkuNDAzNiAyNSAxMi41IDI1QzUuNTk2NDQgMjUgMCAxOS40MDM2IDAgMTIuNUMwIDUuNTk2NDQgNS41OTY0NCAwIDEyLjUgMFoiIGZpbGw9IiMxNkEzNEEiLz4KPHBhdGggZD0iTTEyLjUgNDFMMTIuNSAyNSIgc3Ryb2tlPSIjMTZBMzRBIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+',
  iconRetinaUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iNDEiIHZpZXdCb3g9IjAgMCAyNSA0MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjUgMEMxOS40MDM2IDAgMjUgNS41OTY0NCAyNSAxMi41QzI1IDE5LjQwMzYgMTkuNDAzNiAyNSAxMi41IDI1QzUuNTk2NDQgMjUgMCAxOS40MDM2IDAgMTIuNUMwIDUuNTk2NDQgNS41OTY0NCAwIDEyLjUgMFoiIGZpbGw9IiMxNkEzNEEiLz4KPHBhdGggZD0iTTEyLjUgNDFMMTIuNSAyNSIgc3Ryb2tlPSIjMTZBMzRBIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
  className: 'green-marker'
});

const MapView: React.FC = () => {
  // Map locations with coordinates
  const mapMarkers = [
    // Tourist Spots (Blue markers)
    { id: 1, name: 'Rishikesh', type: 'tourist', coordinates: [30.0869, 78.2676], description: 'Yoga Capital of the World' },
    { id: 2, name: 'Nainital', type: 'tourist', coordinates: [29.3803, 79.4636], description: 'Beautiful hill station with lake' },
    { id: 3, name: 'Mussoorie', type: 'tourist', coordinates: [30.4598, 78.0664], description: 'Queen of Hills' },
    { id: 4, name: 'Haridwar', type: 'tourist', coordinates: [29.9457, 78.1642], description: 'Holy city on Ganges' },
    { id: 5, name: 'Dehradun', type: 'tourist', coordinates: [30.3165, 78.0322], description: 'Capital city of Uttarakhand' },
    { id: 6, name: 'Auli', type: 'tourist', coordinates: [30.5358, 79.5660], description: 'Skiing destination' },
    { id: 7, name: 'Almora', type: 'tourist', coordinates: [29.5971, 79.6593], description: 'Cultural town in Kumaon' },
    { id: 8, name: 'Jim Corbett', type: 'tourist', coordinates: [29.5316, 78.9463], description: 'National Park' },
    { id: 9, name: 'Kedarnath', type: 'tourist', coordinates: [30.7346, 79.0669], description: 'Sacred Jyotirlinga temple' },
    { id: 10, name: 'Badrinath', type: 'tourist', coordinates: [30.7433, 79.4938], description: 'Char Dham temple' },
    { id: 11, name: 'Gangotri', type: 'tourist', coordinates: [30.9993, 78.9411], description: 'Source of Ganges' },
    { id: 12, name: 'Yamunotri', type: 'tourist', coordinates: [31.0117, 78.4509], description: 'Source of Yamuna' },
    { id: 11, name: 'Gangotri', type: 'tourist', coordinates: [30.9993, 78.9411], description: 'Source of Ganges' },
    { id: 12, name: 'Yamunotri', type: 'tourist', coordinates: [31.0117, 78.4509], description: 'Source of Yamuna' },
    
    // Emergency Centers (Red markers)
    { id: 13, name: 'AIIMS Rishikesh', type: 'emergency', coordinates: [30.0869, 78.2676], description: 'Major hospital and emergency center' },
    { id: 14, name: 'Max Hospital Dehradun', type: 'emergency', coordinates: [30.3165, 78.0322], description: 'Emergency medical services' },
    { id: 15, name: 'Base Hospital Haldwani', type: 'emergency', coordinates: [29.2183, 79.5130], description: 'Emergency services' },
    
    // Quantum University (Green marker)
    { id: 16, name: 'Quantum University', type: 'university', coordinates: [29.8248, 77.8770], description: 'Roorkee-Dehradun Highway' },
  ];

  const getMarkerIcon = (type: string) => {
    switch (type) {
      case 'tourist':
        return blueIcon;
      case 'emergency':
        return redIcon;
      case 'university':
        return greenIcon;
      default:
        return blueIcon;
    }
  };

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
            position={marker.coordinates as [number, number]}
            icon={getMarkerIcon(marker.type)}
          >
            <Popup className="custom-popup">
              <div className="p-2 min-w-[200px]">
                <div className="flex items-center mb-2">
                  <div className={`w-3 h-3 rounded-full mr-2 ${
                    marker.type === 'tourist' ? 'bg-blue-500' : 
                    marker.type === 'emergency' ? 'bg-red-500' : 'bg-green-500'
                  }`}></div>
                  <span className="text-xs font-medium text-gray-600 capitalize">
                    {marker.type}
                  </span>
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-1">{marker.name}</h3>
                
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                  {marker.description}
                </p>
                
                <div className="mt-2 text-xs text-gray-500 flex items-center">
                  <span className="mr-1">📍</span>
                  <span>{marker.name}</span>
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