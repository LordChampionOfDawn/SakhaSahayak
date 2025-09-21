import React from 'react';
import { X, Shield, Phone, MapPin, AlertTriangle, Heart, Activity } from 'lucide-react';

interface SafetyModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: any;
  type: 'place' | 'hotel' | 'restaurant';
}

const SafetyModal: React.FC<SafetyModalProps> = ({ isOpen, onClose, item, type }) => {
  if (!isOpen || !item) return null;

  const getSafetyTips = () => {
    switch (type) {
      case 'place':
        return [
          'Check weather conditions before visiting',
          'Inform someone about your travel plans',
          'Carry sufficient water and snacks',
          'Wear appropriate clothing and footwear',
          'Stay on marked trails and paths',
          'Avoid traveling alone in remote areas'
        ];
      case 'hotel':
        return [
          'Verify hotel registration and licenses',
          'Check emergency exit locations upon arrival',
          'Keep emergency contact numbers handy',
          'Inform hotel staff about your local plans',
          'Use hotel safe for valuables',
          'Check room safety features (smoke detectors, locks)'
        ];
      case 'restaurant':
        return [
          'Check food hygiene and cleanliness',
          'Verify water source and quality',
          'Inform staff about food allergies',
          'Avoid street food if you have a sensitive stomach',
          'Check restaurant reviews and ratings',
          'Keep emergency contacts accessible'
        ];
      default:
        return [];
    }
  };

  const getNearestHospital = () => {
    const hospitals = {
      'Rishikesh': { name: 'AIIMS Rishikesh', distance: '2 km', contact: '+91-135-246-1111' },
      'Nainital': { name: 'Base Hospital Nainital', distance: '3 km', contact: '+91-5942-235-337' },
      'Mussoorie': { name: 'Landour Community Hospital', distance: '5 km', contact: '+91-135-263-2003' },
      'Haridwar': { name: 'Shri Guru Ram Rai Institute', distance: '4 km', contact: '+91-135-274-0000' },
      'Dehradun': { name: 'Max Super Speciality Hospital', distance: '6 km', contact: '+91-135-667-3000' },
      'Auli': { name: 'District Hospital Joshimath', distance: '15 km', contact: '+91-1389-222-053' },
      'Almora': { name: 'District Hospital Almora', distance: '2 km', contact: '+91-5962-230-424' },
      'Jim Corbett': { name: 'Base Hospital Haldwani', distance: '25 km', contact: '+91-5946-255-600' }
    };

    const locationKey = Object.keys(hospitals).find(key => 
      item.location?.includes(key) || item.name?.includes(key)
    );

    return hospitals[locationKey as keyof typeof hospitals] || hospitals['Dehradun'];
  };

  const getRiskLevel = () => {
    switch (type) {
      case 'place':
        if (item.category === 'adventure') return { level: 'High', color: 'text-red-600 bg-red-100' };
        if (item.category === 'spiritual') return { level: 'Low', color: 'text-green-600 bg-green-100' };
        return { level: 'Moderate', color: 'text-yellow-600 bg-yellow-100' };
      case 'hotel':
        return { level: 'Low', color: 'text-green-600 bg-green-100' };
      case 'restaurant':
        return { level: 'Low', color: 'text-green-600 bg-green-100' };
      default:
        return { level: 'Moderate', color: 'text-yellow-600 bg-yellow-100' };
    }
  };

  const hospital = getNearestHospital();
  const riskLevel = getRiskLevel();
  const safetyTips = getSafetyTips();

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <Shield className="h-6 w-6 text-red-600 mr-2" />
              Safety Information
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mb-6 p-4 bg-blue-50 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">{item.name}</h3>
            <div className="flex items-center text-blue-700">
              <MapPin className="h-4 w-4 mr-1" />
              {item.location}
            </div>
          </div>

          {/* Risk Assessment */}
          <div className="mb-6 p-4 bg-gray-50 rounded-xl">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
              <AlertTriangle className="h-5 w-5 text-orange-600 mr-2" />
              Risk Assessment
            </h4>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Current Risk Level:</span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${riskLevel.color}`}>
                {riskLevel.level}
              </span>
            </div>
          </div>

          {/* Safety Tips */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
              <Shield className="h-5 w-5 text-green-600 mr-2" />
              Safety Tips
            </h4>
            <div className="space-y-2">
              {safetyTips.map((tip, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Nearest Hospital */}
          <div className="mb-6 p-4 bg-red-50 rounded-xl border border-red-200">
            <h4 className="font-semibold text-red-900 mb-3 flex items-center">
              <Heart className="h-5 w-5 mr-2" />
              Nearest Medical Facility
            </h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-red-700">Hospital:</span>
                <span className="font-medium text-red-900">{hospital.name}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-red-700">Distance:</span>
                <span className="font-medium text-red-900">{hospital.distance}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-red-700">Emergency Contact:</span>
                <a 
                  href={`tel:${hospital.contact}`}
                  className="font-medium text-red-900 hover:underline"
                >
                  {hospital.contact}
                </a>
              </div>
            </div>
          </div>

          {/* Emergency Contacts */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
              <Phone className="h-5 w-5 text-blue-600 mr-2" />
              Emergency Contacts
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="font-medium text-gray-900">Emergency Services</div>
                <div className="text-blue-600 font-mono">112</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="font-medium text-gray-900">Ambulance</div>
                <div className="text-blue-600 font-mono">108</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="font-medium text-gray-900">Police</div>
                <div className="text-blue-600 font-mono">100</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="font-medium text-gray-900">Tourist Helpline</div>
                <div className="text-blue-600 font-mono">1363</div>
              </div>
            </div>
          </div>

          {/* Current Conditions */}
          <div className="p-4 bg-green-50 rounded-xl border border-green-200">
            <h4 className="font-semibold text-green-900 mb-3 flex items-center">
              <Activity className="h-5 w-5 mr-2" />
              Current Safety Status
            </h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center text-green-700">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span>Weather: Clear</span>
              </div>
              <div className="flex items-center text-green-700">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span>Road Access: Open</span>
              </div>
              <div className="flex items-center text-green-700">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span>Network: Available</span>
              </div>
              <div className="flex items-center text-green-700">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span>Emergency Services: Active</span>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={onClose}
              className="bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              Close Safety Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyModal;