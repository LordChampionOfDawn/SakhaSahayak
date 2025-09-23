import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { brochuresData, Brochure } from '../data/brochuresData';
import BrochureModal from '../components/BrochureModal';

const DigitalBrochuresPage: React.FC = () => {
  const [selectedBrochure, setSelectedBrochure] = useState<Brochure | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleExpandBrochure = (brochure: Brochure) => {
    setSelectedBrochure(brochure);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBrochure(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Digital Brochures
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Download comprehensive travel guides and brochures for exploring Uttarakhand's magnificent destinations.
        </p>
      </div>

      {/* Brochures Grid - Responsive 4 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {brochuresData.map((brochure) => (
          <div
            key={brochure.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 group"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img 
                src={brochure.image} 
                alt={brochure.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              
              {/* Hover Expand Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button 
                  onClick={() => handleExpandBrochure(brochure)}
                  className="bg-white/90 backdrop-blur-sm text-gray-800 p-3 rounded-full hover:bg-white transition-colors"
                >
                  <Eye className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">{brochure.title}</h3>
              
              <button 
                onClick={() => handleExpandBrochure(brochure)}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Eye className="h-4 w-4 mr-2" />
                Expand
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Brochure Modal */}
      <BrochureModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        brochure={selectedBrochure}
      />
    </div>
  );
};

export default DigitalBrochuresPage;