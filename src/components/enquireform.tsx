"use client"
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type GalleryTab = 'renders' | 'showflat' | 'floorplan' | 'view360';

// EnquireForm Component
interface EnquireFormProps {
  isOpen: boolean;
  onClose: () => void;
  headerType?: 'enquire' | 'price' | 'Brochure' | 'floorplan' | 'view360';
}

function EnquireForm({ isOpen, onClose, headerType = 'enquire' }: EnquireFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    consent: true
  });

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  if (!isOpen) return null;

  const getHeaderText = () => {
    if (headerType === 'floorplan') return 'Floor Plan';
    if (headerType === 'view360') return '360 View';
    if (headerType === 'price') return 'Price';
    return 'Enquire Now';
  };

  const getDescriptionText = () => {
    if (headerType === 'floorplan') return 'Please enter your details to download the floor plan.';
    if (headerType === 'view360') return 'Please enter your details to access the 360 view.';
    if (headerType === 'price') return 'Please enter the details below to get the detailed pricing information.';
    return 'Please enter the details below to get in touch with us!';
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center p-5 z-50 bg-black/50">
      <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-5 right-5 text-gray-400 hover:text-gray-700 text-3xl leading-none transition-colors"
        >
          ×
        </button>

        <h1 className="text-center text-3xl font-normal text-gray-800 mb-4">
          {getHeaderText()}
        </h1>
        <p className="text-center text-sm text-gray-600 mb-6">
          {getDescriptionText()}
        </p>

        <div>
          <div className="mb-5">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-yellow-700 text-gray-800 placeholder-gray-400"
            />
          </div>

          <div className="mb-5">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-yellow-700 text-gray-800 placeholder-gray-400"
            />
          </div>

          <div className="mb-5">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone*"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-yellow-700 text-gray-800 placeholder-gray-400"
            />
          </div>

          <div className="flex items-start mb-6">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="w-5 h-5 mt-0.5 mr-3 accent-blue-600 cursor-pointer"
            />
            <label htmlFor="consent" className="text-sm text-gray-800 leading-relaxed">
              I agree to be contacted via calls and WhatsApp for information and promotional purposes.
            </label>
          </div>

          <div className="text-center">
            <button
              onClick={handleSubmit}
              className="bg-yellow-700 hover:bg-yellow-800 text-white px-12 py-3 rounded transition-colors active:scale-95 cursor-pointer"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EnquireForm