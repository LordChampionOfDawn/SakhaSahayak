import React from 'react';
import { Download, Eye } from 'lucide-react';

const DigitalBrochuresPage: React.FC = () => {
  // Generate 16 placeholder brochures
  const brochures = Array.from({ length: 16 }, (_, index) => ({
    id: index + 1,
    title: `Uttarakhand Guide ${index + 1}`,
    description: `Explore the beauty of Uttarakhand - Brochure ${index + 1}`,
    image: `https://images.pexels.com/photos/${1366919 + index}/pexels-photo-${1366919 + index}.jpeg?auto=compress&cs=tinysrgb&w=1080&h=1920&fit=crop`,
    category: index % 4 === 0 ? 'Adventure' : index % 4 === 1 ? 'Spiritual' : index % 4 === 2 ? 'Nature' : 'Cultural'
  }));

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

      {/* Brochures Grid - 4x4 layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {brochures.map((brochure) => (
          <div
            key={brochure.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 group"
          >
            <div className="relative aspect-[9/16] overflow-hidden">
              <img 
                src={brochure.image} 
                alt={brochure.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                  {brochure.category}
                </span>
              </div>

              {/* Hover Actions */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex space-x-3">
                  <button className="bg-white/90 backdrop-blur-sm text-gray-800 p-3 rounded-full hover:bg-white transition-colors">
                    <Eye className="h-5 w-5" />
                  </button>
                  <button className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-colors">
                    <Download className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{brochure.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{brochure.description}</p>
              
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors flex items-center justify-center">
                  <Eye className="h-4 w-4 mr-1" />
                  Preview
                </button>
                <button className="flex-1 bg-green-600 text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex items-center justify-center">
                  <Download className="h-4 w-4 mr-1" />
                  Download
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Download All Section */}
      <div className="mt-12 text-center">
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Download Complete Collection</h2>
          <p className="text-gray-600 mb-6">
            Get all 16 digital brochures in one convenient package for offline viewing.
          </p>
          <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
            <Download className="h-5 w-5 mr-2" />
            Download All Brochures (ZIP)
          </button>
        </div>
      </div>
    </div>
  );
};

export default DigitalBrochuresPage;