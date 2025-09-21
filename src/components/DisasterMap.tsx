import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import { MapPin, Navigation, AlertTriangle, Clock, Phone } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in React-Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom icons for different alert types
const alertIcons = {
  traffic: new L.Icon({
    iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCA0MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTIgMjUiIHN0cm9rZT0iI0ZGNjUwMCIgc3Ryb2tlLXdpZHRoPSI0Ii8+CjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjgiIGZpbGw9IiNGRjY1MDAiLz4KPC9zdmc+',
    iconSize: [24, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  }),
  landslide: new L.Icon({
    iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCA0MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTIgMjUiIHN0cm9rZT0iI0RDMjYyNiIgc3Ryb2tlLXdpZHRoPSI0Ii8+CjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjgiIGZpbGw9IiNEQzI2MjYiLz4KPC9zdmc+',
    iconSize: [24, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  }),
  closure: new L.Icon({
    iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCA0MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTIgMjUiIHN0cm9rZT0iIzk5MTkxOSIgc3Ryb2tlLXdpZHRoPSI0Ii8+CjxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjgiIGZpbGw9IiM5OTE5MTkiLz4KPC9zdmc+',
    iconSize: [24, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  }),
};

interface Alert {
  id: number;
  type: 'traffic' | 'landslide' | 'closure';
  title: string;
  description: string;
  coordinates: [number, number];
  severity: 'low' | 'medium' | 'high';
  time: string;
}

const DisasterMap: React.FC = () => {
  const [origin, setOrigin] = useState<[number, number]>([29.8248, 77.8770]); // Quantum University
  const [destination, setDestination] = useState<[number, number] | null>(null);
  const [selectedDestination, setSelectedDestination] = useState('');
  const [useCurrentLocation, setUseCurrentLocation] = useState(false);
  const [distance, setDistance] = useState<number | null>(null);
  const [alerts, setAlerts] = useState<Alert[]>([]);

  const destinations = [
    { name: 'Rishikesh', coordinates: [30.0869, 78.2676] as [number, number] },
    { name: 'Nainital', coordinates: [29.3803, 79.4636] as [number, number] },
    { name: 'Mussoorie', coordinates: [30.4598, 78.0664] as [number, number] },
    { name: 'Haridwar', coordinates: [29.9457, 78.1642] as [number, number] },
    { name: 'Dehradun', coordinates: [30.3165, 78.0322] as [number, number] },
    { name: 'Auli', coordinates: [30.5358, 79.5660] as [number, number] },
    { name: 'Almora', coordinates: [29.5971, 79.6593] as [number, number] },
    { name: 'Jim Corbett', coordinates: [29.5316, 78.9463] as [number, number] },
    { name: 'Kedarnath', coordinates: [30.7346, 79.0669] as [number, number] },
    { name: 'Badrinath', coordinates: [30.7433, 79.4938] as [number, number] },
  ];

  // Dummy alerts data
  const dummyAlerts: Alert[] = [
    {
      id: 1,
      type: 'traffic',
      title: 'Heavy Traffic',
      description: 'Traffic congestion due to festival crowd',
      coordinates: [30.0500, 78.2000],
      severity: 'medium',
      time: '2 hours ago'
    },
    {
      id: 2,
      type: 'landslide',
      title: 'Landslide Warning',
      description: 'Risk of landslide due to heavy rainfall',
      coordinates: [30.4000, 78.8000],
      severity: 'high',
      time: '1 hour ago'
    },
    {
      id: 3,
      type: 'closure',
      title: 'Road Closure',
      description: 'Road closed for maintenance work',
      coordinates: [29.8000, 78.5000],
      severity: 'high',
      time: '30 minutes ago'
    },
    {
      id: 4,
      type: 'traffic',
      title: 'Slow Traffic',
      description: 'Slow moving traffic due to construction',
      coordinates: [30.2000, 78.0000],
      severity: 'low',
      time: '45 minutes ago'
    }
  ];

  useEffect(() => {
    setAlerts(dummyAlerts);
  }, []);

  const calculateDistance = (coord1: [number, number], coord2: [number, number]) => {
    const R = 6371; // Earth's radius in kilometers
    const dLat = (coord2[0] - coord1[0]) * Math.PI / 180;
    const dLon = (coord2[1] - coord1[1]) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(coord1[0] * Math.PI / 180) * Math.cos(coord2[0] * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  };

  const handleDestinationChange = (destinationName: string) => {
    setSelectedDestination(destinationName);
    const dest = destinations.find(d => d.name === destinationName);
    if (dest) {
      setDestination(dest.coordinates);
      const dist = calculateDistance(origin, dest.coordinates);
      setDistance(Math.round(dist));
    }
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords: [number, number] = [position.coords.latitude, position.coords.longitude];
          setOrigin(coords);
          setUseCurrentLocation(true);
          if (destination) {
            const dist = calculateDistance(coords, destination);
            setDistance(Math.round(dist));
          }
        },
        (error) => {
          console.error('Error getting location:', error);
          alert('Unable to get your current location. Using default location.');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-orange-600 bg-orange-100';
      case 'low': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'traffic': return '🚗';
      case 'landslide': return '⛰️';
      case 'closure': return '🚧';
      default: return '⚠️';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Route Planning & Safety Alerts</h3>
        
        {/* Controls */}
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-48">
              <label className="block text-sm font-medium text-gray-700 mb-2">Origin</label>
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    setOrigin([29.8248, 77.8770]);
                    setUseCurrentLocation(false);
                  }}
                  className={`px-3 py-2 text-sm rounded-lg border transition-colors ${
                    !useCurrentLocation 
                      ? 'bg-blue-600 text-white border-blue-600' 
                      : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  Quantum University
                </button>
                <button
                  onClick={getCurrentLocation}
                  className={`px-3 py-2 text-sm rounded-lg border transition-colors ${
                    useCurrentLocation 
                      ? 'bg-green-600 text-white border-green-600' 
                      : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <Navigation className="h-4 w-4 inline mr-1" />
                  Current Location
                </button>
              </div>
            </div>
            
            <div className="flex-1 min-w-48">
              <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
              <select
                value={selectedDestination}
                onChange={(e) => handleDestinationChange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              >
                <option value="">Select destination...</option>
                {destinations.map((dest) => (
                  <option key={dest.name} value={dest.name}>{dest.name}</option>
                ))}
              </select>
            </div>
          </div>

          {distance && (
            <div className="bg-blue-50 rounded-lg p-3">
              <div className="flex items-center justify-between">
                <span className="text-blue-800 font-medium">Estimated Distance:</span>
                <span className="text-blue-900 font-bold">{distance} km</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Map */}
      <div className="h-96">
        <MapContainer
          center={origin}
          zoom={8}
          style={{ height: '100%', width: '100%' }}
          className="z-0"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {/* Origin Marker */}
          <Marker position={origin}>
            <Popup>
              <div className="p-2">
                <h4 className="font-semibold text-gray-900">
                  {useCurrentLocation ? 'Your Location' : 'Quantum University'}
                </h4>
                <p className="text-sm text-gray-600">Starting point</p>
              </div>
            </Popup>
          </Marker>

          {/* Destination Marker */}
          {destination && (
            <Marker position={destination}>
              <Popup>
                <div className="p-2">
                  <h4 className="font-semibold text-gray-900">{selectedDestination}</h4>
                  <p className="text-sm text-gray-600">Destination</p>
                </div>
              </Popup>
            </Marker>
          )}

          {/* Route Line */}
          {destination && (
            <Polyline
              positions={[origin, destination]}
              color="blue"
              weight={3}
              opacity={0.7}
            />
          )}

          {/* Alert Markers */}
          {alerts.map((alert) => (
            <Marker
              key={alert.id}
              position={alert.coordinates}
              icon={alertIcons[alert.type]}
            >
              <Popup>
                <div className="p-2 min-w-48">
                  <div className="flex items-center mb-2">
                    <span className="text-lg mr-2">{getAlertIcon(alert.type)}</span>
                    <h4 className="font-semibold text-gray-900">{alert.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{alert.description}</p>
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(alert.severity)}`}>
                      {alert.severity.toUpperCase()}
                    </span>
                    <span className="text-xs text-gray-500">{alert.time}</span>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Alerts Sidebar */}
      <div className="p-6 border-t border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
          <AlertTriangle className="h-5 w-5 text-orange-600 mr-2" />
          Route Alerts ({alerts.length})
        </h4>
        <div className="space-y-3 max-h-48 overflow-y-auto">
          {alerts.map((alert) => (
            <div key={alert.id} className="border border-gray-200 rounded-lg p-3">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center">
                  <span className="text-lg mr-2">{getAlertIcon(alert.type)}</span>
                  <h5 className="font-medium text-gray-900">{alert.title}</h5>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(alert.severity)}`}>
                  {alert.severity.toUpperCase()}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{alert.description}</p>
              <div className="flex items-center text-xs text-gray-500">
                <Clock className="h-3 w-3 mr-1" />
                {alert.time}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
          <div className="flex items-center mb-2">
            <Phone className="h-4 w-4 text-yellow-600 mr-2" />
            <span className="text-sm font-medium text-yellow-800">Emergency Contact</span>
          </div>
          <p className="text-sm text-yellow-700">
            For road emergencies, call: <strong>1033</strong> (Highway Patrol)
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisasterMap;