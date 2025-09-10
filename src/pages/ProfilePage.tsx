import React from 'react';
import { User, MapPin, Calendar, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const ProfilePage: React.FC = () => {
  const { user, logout } = useAuth();

  const userStats = [
    { label: 'Places Visited', value: '12', icon: MapPin },
    { label: 'Days Traveled', value: '25', icon: Calendar },
    { label: 'Reviews Written', value: '8', icon: User },
  ];

  const recentActivity = [
    {
      id: 1,
      action: 'Visited Rishikesh',
      date: '2 days ago',
      type: 'visit'
    },
    {
      id: 2,
      action: 'Reviewed Hotel Mountain View',
      date: '1 week ago',
      type: 'review'
    },
    {
      id: 3,
      action: 'Added Kedarnath to wishlist',
      date: '2 weeks ago',
      type: 'wishlist'
    }
  ];

  if (!user) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <p className="text-gray-600">Please sign in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Profile Header */}
      <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-3xl p-8 text-white mb-8">
        <div className="flex items-center space-x-6">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
            <User className="h-10 w-10 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
            <p className="text-green-100 mb-4">{user.email}</p>
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                Explorer
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                Member since 2024
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Stats */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Your Stats</h2>
            <div className="space-y-4">
              {userStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-green-100 p-2 rounded-lg">
                        <Icon className="h-5 w-5 text-green-600" />
                      </div>
                      <span className="text-gray-600">{stat.label}</span>
                    </div>
                    <span className="text-xl font-bold text-gray-900">{stat.value}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-gray-50 rounded-xl transition-colors">
                <Settings className="h-5 w-5 text-gray-400" />
                <span className="text-gray-700">Account Settings</span>
              </button>
              <button 
                onClick={logout}
                className="w-full flex items-center space-x-3 p-3 text-left hover:bg-red-50 rounded-xl transition-colors text-red-600"
              >
                <LogOut className="h-5 w-5" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{activity.action}</p>
                    <p className="text-sm text-gray-600">{activity.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Preferences */}
          <div className="bg-white rounded-2xl p-6 shadow-lg mt-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Travel Preferences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Activities
                </label>
                <div className="space-y-2">
                  {['Adventure Sports', 'Spiritual Tours', 'Nature Photography', 'Cultural Events'].map((activity) => (
                    <label key={activity} className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                      <span className="text-sm text-gray-700">{activity}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Range
                </label>
                <select className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200">
                  <option>Budget (₹0-5000)</option>
                  <option>Mid-range (₹5000-15000)</option>
                  <option>Luxury (₹15000+)</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;