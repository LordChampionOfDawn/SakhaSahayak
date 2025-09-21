import React, { useState } from 'react';
import { AlertTriangle, Phone, MapPin, Shield, Info, Users, Clock, Guitar as Hospital, Activity } from 'lucide-react';
import { hospitals, emergencyServices } from '../data/emergencyData';
import DisasterMap from '../components/DisasterMap';

const DisasterPage: React.FC = () => {
  const [sosClicked, setSosClicked] = useState(false);
  const [activeTab, setActiveTab] = useState<'emergency' | 'hospitals'>('emergency');

  const tabs = [
    { id: 'emergency' as const, name: 'Emergency Contacts', icon: Phone },
    { id: 'hospitals' as const, name: 'Hospitals', icon: Hospital },
  ];

  const currentAlerts = [
    {
      id: 1,
      type: 'Weather Warning',
      severity: 'moderate',
      title: 'Heavy Rain Expected',
      description: 'Heavy rainfall expected in Chamoli and Uttarkashi districts. Travelers advised to check road conditions.',
      location: 'Chamoli, Uttarkashi',
      time: '2 hours ago',
      status: 'active'
    },
    {
      id: 2,
      type: 'Road Advisory',
      severity: 'low',
      title: 'Road Maintenance',
      description: 'Temporary road closure on Rishikesh-Badrinath highway for maintenance work.',
      location: 'Rishikesh-Badrinath Highway',
      time: '6 hours ago',
      status: 'active'
    }
  ];

  const safetyTips = [
    {
      icon: MapPin,
      title: 'Know Your Location',
      tip: 'Always share your location with family/friends when traveling to remote areas.'
    },
    {
      icon: Phone,
      title: 'Keep Contacts Handy',
      tip: 'Save emergency numbers in your phone and keep a physical copy.'
    },
    {
      icon: Shield,
      title: 'Travel Insurance',
      tip: 'Get comprehensive travel insurance that covers mountain activities.'
    },
    {
      icon: Users,
      title: 'Travel in Groups',
      tip: 'Avoid traveling alone, especially to remote or high-altitude areas.'
    }
  ];

  const handleSOS = () => {
    setSosClicked(true);
    // In a real app, this would send location and user info to emergency services
    setTimeout(() => setSosClicked(false), 3000);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'moderate': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'low': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Emergency & Safety
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Stay safe with emergency contacts, real-time alerts, and quick access to help when you need it most.
        </p>
      </div>

      {/* SOS Button */}
      <div className="mb-8">
        <div className="bg-red-50 border border-red-200 rounded-3xl p-8 text-center">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Emergency SOS</h2>
            <p className="text-gray-600">Press and hold for emergency assistance</p>
          </div>
          <button
            onMouseDown={handleSOS}
            className={`relative bg-red-600 hover:bg-red-700 text-white rounded-full w-32 h-32 flex items-center justify-center text-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg animate-pulse ${
              sosClicked ? 'bg-red-700 scale-110' : ''
            }`}
            style={{
              boxShadow: sosClicked ? '0 0 30px rgba(239, 68, 68, 0.6)' : '0 0 20px rgba(239, 68, 68, 0.4)',
              animation: sosClicked ? 'pulse 1s infinite' : 'pulse 2s infinite'
            }}
          >
            {sosClicked ? (
              <div className="text-center">
                <div className="text-sm">SENDING</div>
                <div className="text-xs">HELP</div>
              </div>
            ) : (
              'SOS'
            )}
          </button>
          {sosClicked && (
            <div className="mt-4 text-red-600 font-medium animate-pulse">
              Emergency alert sent! Help is on the way.
            </div>
          )}
        </div>
      </div>

      {/* Current Alerts */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Current Alerts</h2>
        <div className="space-y-4">
          {currentAlerts.map((alert) => (
            <div
              key={alert.id}
              className={`rounded-2xl border p-6 ${getSeverityColor(alert.severity)}`}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-white/50 p-2 rounded-lg">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{alert.title}</h3>
                    <div className="flex items-center space-x-2 text-sm">
                      <Clock className="h-4 w-4" />
                      <span>{alert.time}</span>
                    </div>
                  </div>
                  <p className="mb-3">{alert.description}</p>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {alert.location}
                    </div>
                    <div className="bg-white/30 px-2 py-1 rounded-full text-xs font-medium">
                      {alert.type}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Contacts */}
      {/* Disaster & Safety Map */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Route Planning & Safety</h2>
        <DisasterMap />
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
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-red-50 border border-gray-200'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{tab.name}</span>
            </button>
          );
        })}
      </div>

      {/* Emergency Contacts Tab */}
      {activeTab === 'emergency' && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Emergency Contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyServices.map((contact, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{contact.title}</h3>
                  <p className="text-sm text-gray-600">{contact.description}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-red-600">{contact.number}</div>
                <a
                  href={`tel:${contact.number}`}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>
          ))}
          </div>
        </div>
      )}

      {/* Hospitals Tab */}
      {activeTab === 'hospitals' && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Hospitals & Medical Centers</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {hospitals.map((hospital) => (
              <div
                key={hospital.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`p-3 rounded-full ${
                    hospital.type === 'government' ? 'bg-blue-100' : 
                    hospital.type === 'private' ? 'bg-green-100' : 'bg-purple-100'
                  }`}>
                    <Hospital className={`h-6 w-6 ${
                      hospital.type === 'government' ? 'text-blue-600' : 
                      hospital.type === 'private' ? 'text-green-600' : 'text-purple-600'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg mb-1">{hospital.name}</h3>
                    <div className="flex items-center text-gray-600 text-sm mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      {hospital.location}
                    </div>
                    <div className="flex items-center space-x-4 mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${
                        hospital.type === 'government' ? 'bg-blue-100 text-blue-800' : 
                        hospital.type === 'private' ? 'bg-green-100 text-green-800' : 'bg-purple-100 text-purple-800'
                      }`}>
                        {hospital.type}
                      </span>
                      {hospital.emergency24x7 && (
                        <div className="flex items-center">
                          <Activity className="h-3 w-3 text-red-500 mr-1" />
                          <span className="text-xs text-red-600 font-medium">24x7 Emergency</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Services</h4>
                  <div className="flex flex-wrap gap-1">
                    {hospital.services.slice(0, 4).map((service, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs"
                      >
                        {service}
                      </span>
                    ))}
                    {hospital.services.length > 4 && (
                      <span className="text-xs text-gray-500">+{hospital.services.length - 4} more</span>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-gray-900">{hospital.contact}</div>
                  <a
                    href={`tel:${hospital.contact}`}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Safety Tips */}
      <div className="bg-blue-50 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Safety Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {safetyTips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
                  <p className="text-sm text-gray-600">{tip.tip}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Important Note */}
      <div className="mt-8 bg-gray-50 rounded-2xl p-6 border border-gray-200">
        <div className="flex items-start space-x-3">
          <div className="bg-gray-200 p-2 rounded-lg flex-shrink-0">
            <Info className="h-6 w-6 text-gray-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Important Note</h3>
            <p className="text-sm text-gray-600">
              This is a demonstration app. In a real emergency, always call the appropriate emergency services directly. 
              The SOS feature here is simulated and does not actually contact emergency services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisasterPage;