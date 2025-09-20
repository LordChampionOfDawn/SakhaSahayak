import React, { useState, useEffect } from 'react';
import { CloudRain, Sun, Cloud, Wind, Droplets, Eye, Thermometer, AlertTriangle, Shield, Calendar, MapPin, Phone } from 'lucide-react';

interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  description: string;
  humidity: number;
  windSpeed: number;
  visibility: number;
  feelsLike: number;
  icon: string;
}

const WeatherPage: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedCity, setSelectedCity] = useState('Dehradun');

  const cities = [
    'Dehradun',
    'Haridwar',
    'Rishikesh',
    'Nainital',
    'Mussoorie',
    'Almora',
    'Uttarkashi',
    'Chamoli'
  ];

  // Mock weather data (replace with actual OpenWeather API)
  const mockWeatherData: { [key: string]: WeatherData } = {
    Dehradun: {
      location: 'Dehradun, Uttarakhand',
      temperature: 25,
      condition: 'Partly Cloudy',
      description: 'Partly cloudy with pleasant weather',
      humidity: 65,
      windSpeed: 8,
      visibility: 10,
      feelsLike: 27,
      icon: 'partly-cloudy'
    },
    Haridwar: {
      location: 'Haridwar, Uttarakhand',
      temperature: 28,
      condition: 'Sunny',
      description: 'Clear sky with bright sunshine',
      humidity: 58,
      windSpeed: 6,
      visibility: 12,
      feelsLike: 30,
      icon: 'sunny'
    },
    Rishikesh: {
      location: 'Rishikesh, Uttarakhand',
      temperature: 26,
      condition: 'Cloudy',
      description: 'Overcast with mild weather',
      humidity: 70,
      windSpeed: 7,
      visibility: 8,
      feelsLike: 28,
      icon: 'cloudy'
    }
  };

  useEffect(() => {
    // Simulate API call
    const fetchWeather = async () => {
      setLoading(true);
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Use mock data for selected city, or default data
      const data = mockWeatherData[selectedCity] || mockWeatherData.Dehradun;
      data.location = `${selectedCity}, Uttarakhand`;
      setWeatherData(data);
      setLoading(false);
    };

    fetchWeather();
  }, [selectedCity]);

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
      case 'clear':
        return <Sun className="h-16 w-16 text-yellow-500" />;
      case 'cloudy':
      case 'overcast':
        return <Cloud className="h-16 w-16 text-gray-500" />;
      case 'partly cloudy':
        return <Cloud className="h-16 w-16 text-blue-500" />;
      case 'rainy':
      case 'rain':
        return <CloudRain className="h-16 w-16 text-blue-600" />;
      default:
        return <Sun className="h-16 w-16 text-yellow-500" />;
    }
  };

  const weatherTips = [
    {
      icon: Sun,
      title: 'Summer (Mar-Jun)',
      tip: 'Pack light, breathable clothes. Perfect for hill stations.',
      color: 'text-orange-600 bg-orange-100'
    },
    {
      icon: CloudRain,
      title: 'Monsoon (Jul-Sep)',
      tip: 'Carry rain gear. Some routes may be affected.',
      color: 'text-blue-600 bg-blue-100'
    },
    {
      icon: Wind,
      title: 'Winter (Oct-Feb)',
      tip: 'Pack warm clothes. Great for valley visits.',
      color: 'text-purple-600 bg-purple-100'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Weather & Travel Safety
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Stay updated with real-time weather conditions and travel impact forecasting to make informed booking decisions and ensure safe travel.
        </p>
      </div>

      {/* Travel Impact Alert */}
      <div className="mb-8 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-6 border border-yellow-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-yellow-500 p-3 rounded-full">
              <AlertTriangle className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-yellow-900">Travel Impact Forecast</h3>
              <p className="text-yellow-700">Light rain expected in Nainital region • Consider flexible booking options</p>
            </div>
          </div>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-yellow-600 transition-colors">
            View Alternatives
          </button>
        </div>
      </div>
      {/* City Selection */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Select City
        </label>
        <div className="flex flex-wrap gap-2">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCity === city
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-green-50 border border-gray-200'
              }`}
            >
              {city}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading weather data...</p>
        </div>
      ) : weatherData ? (
        <>
          {/* Current Weather Card */}
          <div className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-3xl p-8 text-white mb-8 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">{weatherData.location}</h2>
                <p className="text-blue-100">{weatherData.description}</p>
              </div>
              {getWeatherIcon(weatherData.condition)}
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-4xl font-bold mb-1">{weatherData.temperature}°C</div>
                <div className="text-blue-100 text-sm">Temperature</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">{weatherData.feelsLike}°C</div>
                <div className="text-blue-100 text-sm">Feels like</div>
              </div>
              <div className="md:col-span-2">
                <div className="text-xl font-bold mb-1">{weatherData.condition}</div>
                <div className="text-blue-100 text-sm">Current condition</div>
              </div>
            </div>
          </div>

          {/* Booking Impact Analysis */}
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Calendar className="h-5 w-5 text-blue-600 mr-2" />
              Booking Recommendations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center mb-2">
                  <Shield className="h-4 w-4 text-green-600 mr-2" />
                  <span className="font-medium text-green-900">Outdoor Activities</span>
                </div>
                <p className="text-sm text-green-700">Perfect conditions for trekking and sightseeing</p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-center mb-2">
                  <AlertTriangle className="h-4 w-4 text-yellow-600 mr-2" />
                  <span className="font-medium text-yellow-900">Hotel Bookings</span>
                </div>
                <p className="text-sm text-yellow-700">Consider flexible cancellation policies</p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="font-medium text-blue-900">Transportation</span>
                </div>
                <p className="text-sm text-blue-700">All routes clear, normal travel times expected</p>
              </div>
            </div>
          </div>
          {/* Weather Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Droplets className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Humidity</h3>
                  <p className="text-2xl font-bold text-blue-600">{weatherData.humidity}%</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">Comfortable humidity level</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Wind className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Wind Speed</h3>
                  <p className="text-2xl font-bold text-green-600">{weatherData.windSpeed} km/h</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">Light breeze</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Eye className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Visibility</h3>
                  <p className="text-2xl font-bold text-purple-600">{weatherData.visibility} km</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">Clear visibility</p>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600">Unable to load weather data</p>
        </div>
      )}

      {/* Weather Tips */}
      <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <Thermometer className="h-5 w-5 text-purple-600 mr-2" />
          Smart Travel Planning
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {weatherTips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <div key={index} className="text-center">
                <div className={`inline-flex p-3 rounded-full mb-4 ${tip.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{tip.title}</h4>
                <p className="text-sm text-gray-600">{tip.tip}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Emergency Weather Protocols */}
      <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8">
        <div className="flex items-start space-x-3">
          <div className="bg-red-100 p-2 rounded-lg flex-shrink-0">
            <Phone className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <h3 className="font-semibold text-red-800 mb-2">Emergency Weather Protocols</h3>
            <p className="text-sm text-red-700 mb-3">
              In case of severe weather during your trip, follow these emergency procedures and contact information.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium text-red-800 mb-1">Immediate Actions:</h4>
                <ul className="text-red-700 space-y-1">
                  <li>• Seek immediate shelter</li>
                  <li>• Contact your accommodation</li>
                  <li>• Inform family of your status</li>
                  <li>• Monitor official weather updates</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-red-800 mb-1">Emergency Contacts:</h4>
                <ul className="text-red-700 space-y-1">
                  <li>• Disaster Management: 1070</li>
                  <li>• Tourist Helpline: 1363</li>
                  <li>• Emergency Services: 112</li>
                  <li>• Weather Updates: 1588</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flexible Booking Options */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 border border-blue-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Shield className="h-5 w-5 text-blue-600 mr-2" />
          Weather-Safe Booking Options
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">Flexible Cancellation</h4>
            <p className="text-sm text-gray-600">Free cancellation up to 24 hours for weather-related issues</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">Alternative Suggestions</h4>
            <p className="text-sm text-gray-600">Automatic recommendations for indoor activities during bad weather</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">Weather Insurance</h4>
            <p className="text-sm text-gray-600">Optional coverage for weather-related trip disruptions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;