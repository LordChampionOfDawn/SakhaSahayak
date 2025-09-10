import React, { useState } from 'react';
import { Bus, Train, Car, MapPin, Clock, DollarSign } from 'lucide-react';
import { transportationData } from '../data/transportation';

const TransportationPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'buses' | 'trains' | 'cabs'>('buses');

  const tabs = [
    { id: 'buses' as const, name: 'Buses', icon: Bus },
    { id: 'trains' as const, name: 'Trains', icon: Train },
    { id: 'cabs' as const, name: 'Cabs', icon: Car },
  ];

  const currentData = transportationData[activeTab];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Transportation
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find the best transportation options to explore Uttarakhand - from buses and trains to private cabs and taxis.
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

      {/* Transportation Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {currentData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  {activeTab === 'buses' && <Bus className="h-6 w-6 text-green-600" />}
                  {activeTab === 'trains' && <Train className="h-6 w-6 text-green-600" />}
                  {activeTab === 'cabs' && <Car className="h-6 w-6 text-green-600" />}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.operator}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-green-600 font-semibold text-lg">{item.price}</div>
                <div className="text-xs text-gray-500">{item.priceUnit}</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="h-4 w-4" />
                <div>
                  <div className="text-sm font-medium">From</div>
                  <div className="text-xs">{item.from}</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="h-4 w-4" />
                <div>
                  <div className="text-sm font-medium">To</div>
                  <div className="text-xs">{item.to}</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="h-4 w-4" />
                <div>
                  <div className="text-sm font-medium">Duration</div>
                  <div className="text-xs">{item.duration}</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <div>
                  <div className="text-sm font-medium">Frequency</div>
                  <div className="text-xs">{item.frequency}</div>
                </div>
              </div>
            </div>

            {item.features && (
              <div className="mb-4">
                <div className="text-sm font-medium text-gray-900 mb-2">Features</div>
                <div className="flex flex-wrap gap-2">
                  {item.features.map((feature, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex space-x-3">
              <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors">
                {activeTab === 'cabs' ? 'Book Ride' : 'Book Ticket'}
              </button>
              <button className="bg-gray-100 text-gray-600 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Tips */}
      <div className="mt-12 bg-blue-50 rounded-2xl p-6 border border-blue-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Travel Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
              <Clock className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Book in Advance</h4>
              <p className="text-sm text-gray-600">Especially during peak season (Apr-Jun, Sep-Nov)</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
              <MapPin className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Check Route Conditions</h4>
              <p className="text-sm text-gray-600">Mountain roads may have weather-related delays</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
              <DollarSign className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Compare Prices</h4>
              <p className="text-sm text-gray-600">Prices may vary based on season and demand</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportationPage;