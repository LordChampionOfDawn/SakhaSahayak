import React, { useState } from 'react';
import { X, Calendar, Users, Phone, Mail, User, FileText } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    id: number;
    name: string;
    type: 'hotel' | 'restaurant' | 'transport';
    price?: number;
  };
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, item }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    checkIn: '',
    nights: 1,
    guests: 1,
    notes: ''
  });
  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [bookingId, setBookingId] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'nights' || name === 'guests' ? parseInt(value) || 1 : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('http://localhost:3001/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: item.type,
          itemName: item.name,
          ...formData
        }),
      });

      const result = await response.json();

      if (result.success) {
        setBookingId(result.bookingId);
        setConfirmed(true);
      } else {
        alert('Booking failed. Please try again.');
      }
    } catch (error) {
      console.error('Booking error:', error);
      alert('Booking failed. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setConfirmed(false);
    setBookingId('');
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      checkIn: '',
      nights: 1,
      guests: 1,
      notes: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  const getFormTitle = () => {
    switch (item.type) {
      case 'hotel': return 'Book Hotel';
      case 'restaurant': return 'Reserve Table';
      case 'transport': return 'Book Ticket';
      default: return 'Book Now';
    }
  };

  const getDateLabel = () => {
    switch (item.type) {
      case 'hotel': return 'Check-in Date';
      case 'restaurant': return 'Reservation Date';
      case 'transport': return 'Travel Date';
      default: return 'Date';
    }
  };

  const getNightsLabel = () => {
    switch (item.type) {
      case 'hotel': return 'Nights';
      case 'restaurant': return 'Duration (hours)';
      case 'transport': return 'Tickets';
      default: return 'Quantity';
    }
  };

  const getGuestsLabel = () => {
    switch (item.type) {
      case 'hotel': return 'Guests';
      case 'restaurant': return 'People';
      case 'transport': return 'Passengers';
      default: return 'People';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">{getFormTitle()}</h2>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {!confirmed ? (
            <>
              <div className="mb-6 p-4 bg-blue-50 rounded-xl">
                <h3 className="font-semibold text-blue-900 mb-1">{item.name}</h3>
                {item.price && (
                  <p className="text-blue-700">₹{item.price} {item.type === 'hotel' ? '/night' : item.type === 'transport' ? '/ticket' : '/person'}</p>
                )}
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="h-4 w-4 inline mr-1" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="h-4 w-4 inline mr-1" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="h-4 w-4 inline mr-1" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="h-4 w-4 inline mr-1" />
                    {getDateLabel()} *
                  </label>
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {getNightsLabel()}
                    </label>
                    <select
                      name="nights"
                      value={formData.nights}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Users className="h-4 w-4 inline mr-1" />
                      {getGuestsLabel()}
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FileText className="h-4 w-4 inline mr-1" />
                    Special Notes
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    placeholder="Any special requests or notes..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                    loading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Processing...
                    </div>
                  ) : (
                    'Confirm Booking'
                  )}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
              <p className="text-gray-600 mb-4">
                Your booking is confirmed. We'll send you a notification with confirmation and payment link on your given number and mail.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600">Booking ID: <span className="font-mono font-medium">{bookingId}</span></p>
              </div>
              <button
                onClick={handleClose}
                className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;