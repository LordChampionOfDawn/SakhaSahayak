import React, { useState } from 'react';
import { Bus, Train, Car, MapPin, Clock, DollarSign, Shield, AlertTriangle, Phone, CheckCircle, Wifi, Heart } from 'lucide-react';
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
          Safe Transportation
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find safe transportation options with real-time safety monitoring, verified drivers, and emergency support throughout your journey.
        </p>
      </div>

      {/* Road Conditions Banner */}
      <div className="mb-8 bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-6 border border-green-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-green-500 p-3 rounded-full">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-green-900">Current Road Conditions</h3>
              <p className="text-green-700">All major routes open • No weather advisories • Normal traffic flow</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-green-600 font-medium">Last Updated</div>
            <div className="text-xs text-green-500">2 minutes ago</div>
          </div>
        </div>
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
                  <div className="flex items-center mt-1">
                    <Shield className="h-3 w-3 text-green-500 mr-1" />
                    <span className="text-xs text-green-600">Safety Verified</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-green-600 font-semibold text-lg">{item.price}</div>
                <div className="text-xs text-gray-500">{item.priceUnit}</div>
                <div className="flex items-center mt-1">
                  {[...Array(4)].map((_, i) => (
                    <CheckCircle key={i} className="h-2 w-2 text-green-500 fill-current" />
                  ))}
                  <span className="text-xs text-green-600 ml-1">4.2</span>
                </div>
              </div>
            </div>

            {/* Safety Features */}
            <div className="mb-4 p-3 bg-blue-50 rounded-lg">
              <h4 className="text-sm font-medium text-blue-900 mb-2 flex items-center">
                <Shield className="h-4 w-4 mr-1" />
                Safety Features
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center text-blue-700">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  <span>GPS Tracking</span>
                </div>
                <div className="flex items-center text-blue-700">
                  <Phone className="h-3 w-3 mr-1" />
                  <span>Emergency Button</span>
                </div>
                <div className="flex items-center text-blue-700">
                  <Heart className="h-3 w-3 mr-1" />
                  <span>First Aid Kit</span>
                </div>
                <div className="flex items-center text-blue-700">
                  <Wifi className="h-3 w-3 mr-1" />
                  <span>Live Updates</span>
                </div>
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
                {activeTab === 'cabs' ? 'Safe Book Ride' : 'Safe Book Ticket'}
              </button>
              <button className="bg-gray-100 text-gray-600 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                Safety Details
              </button>
            </div>
            
            {/* Safety Guarantee */}
            <div className="mt-3 p-2 bg-green-50 rounded-lg">
              <p className="text-xs text-green-700 flex items-center">
                <Shield className="h-3 w-3 mr-1" />
                24/7 emergency support • Real-time tracking • Insurance included
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Tips */}
      <div className="mt-12 bg-blue-50 rounded-2xl p-6 border border-blue-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <AlertTriangle className="h-5 w-5 text-blue-600 mr-2" />
          Smart Route Planning & Safety Tips
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
              <Shield className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Safety First Booking</h4>
              <p className="text-sm text-gray-600">All vehicles safety-verified with emergency equipment</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
              <Phone className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Real-time Monitoring</h4>
              <p className="text-sm text-gray-600">Live tracking and emergency assistance throughout journey</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
              <Heart className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Health & Safety</h4>
              <p className="text-sm text-gray-600">Medical emergency protocols and insurance coverage</p>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Support Panel */}
      <div className="mt-8 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 border border-red-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Phone className="h-5 w-5 text-red-600 mr-2" />
          24/7 Emergency Support
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-2">During Your Journey</h4>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• Real-time vehicle tracking</li>
              <li>• Emergency button in all vehicles</li>
              <li>• Direct line to emergency services</li>
              <li>• Breakdown assistance available</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Emergency Contacts</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Emergency Helpline:</span>
                <span className="font-medium text-red-600">1800-XXX-XXXX</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Medical Emergency:</span>
                <span className="font-medium text-red-600">108</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Police:</span>
                <span className="font-medium text-red-600">100</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportationPage;