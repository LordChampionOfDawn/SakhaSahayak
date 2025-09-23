import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users } from 'lucide-react';

const LocalGuideButton: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/local-guide');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 left-6 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 z-40 flex items-center space-x-2"
    >
      <Users className="h-5 w-5" />
      <span className="font-medium">Local Guide</span>
    </button>
  );
};

export default LocalGuideButton;