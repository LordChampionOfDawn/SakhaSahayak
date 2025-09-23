import React from 'react';
import { X } from 'lucide-react';
import { Brochure } from '../data/brochuresData';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
  brochure: Brochure | null;
}

const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose, brochure }) => {
  if (!isOpen || !brochure) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative max-w-2xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors z-10"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{brochure.title}</h2>
          <div className="flex justify-center">
            <img 
              src={brochure.image} 
              alt={brochure.title}
              className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrochureModal;