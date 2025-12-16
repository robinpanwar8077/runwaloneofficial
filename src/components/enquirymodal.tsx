// components/EnquiryModal.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  consent: boolean;
}

const EnquiryModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    consent: false,
  });

  // Open modal when page loads
  useEffect(() => {
    setIsOpen(true);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your enquiry! We will get in touch with you soon.');
    closeModal();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 sm:p-4 md:p-6 animate-in fade-in duration-300"
      onClick={closeModal}
    >
      <div
        className="relative flex flex-col lg:flex-row w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-[1000px] max-h-[95vh] sm:max-h-[90vh] bg-white shadow-2xl overflow-hidden animate-in slide-in-from-top-10 duration-400 rounded-none sm:rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-2  cursor-pointer right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 z-10 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center text-gray-600 hover:text-black transition-all duration-200 border-2 border-gray-400 rounded bg-white/90 hover:bg-white"
          aria-label="Close modal"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Image Section - Top on mobile, Left on desktop */}
        <div className="w-full lg:w-[48%] h-[180px] sm:h-[220px] md:h-[260px] lg:h-auto lg:min-h-[500px] xl:min-h-[550px] lg:p-5">
          <div className="relative w-full h-full">
            <Image
              src="/popimg.jpg"
              alt="Runwal Realty"
              fill
              className="object-fill sm:object-fill lg:object-contain"
              priority
            />
          </div>
        </div>

        {/* Form Section - Bottom on mobile, Right on desktop */}
        <div className="w-full lg:w-[52%] px-4 py-6 sm:px-6 sm:py-7 md:px-8 md:py-8 lg:px-10 lg:py-10 flex flex-col justify-center overflow-y-auto bg-white">
          <div className="w-full max-w-[470px] mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-[1.75rem] lg:text-[2rem] font-serif font-normal mb-2 sm:mb-3 md:mb-4 text-gray-900 tracking-tight leading-tight text-center">
              Enquire Now
            </h2>
            <p className="text-xs sm:text-[13px] md:text-[14px] text-gray-800 mb-4 sm:mb-5 md:mb-6 lg:mb-7 leading-relaxed text-center px-2 sm:px-0">
              Please enter the details below to get in touch with us!
            </p>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-5">
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-[13px] sm:text-[14px] border-2 border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-600 transition-colors placeholder:text-gray-500 rounded-sm"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-[13px] sm:text-[14px] border-2 border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-600 transition-colors placeholder:text-gray-500 rounded-sm"
                />
              </div>

              {/* Phone */}
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone*"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 text-[13px] sm:text-[14px] border-2 border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-600 transition-colors placeholder:text-gray-500 rounded-sm"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-2 pt-1 sm:pt-2">
                <input
                  type="checkbox"
                  name="consent"
                  id="consent"
                  required
                  checked={formData.consent}
                  onChange={handleInputChange}
                  className="w-4 h-4 mt-0.5 cursor-pointer accent-blue-600 border-gray-300 flex-shrink-0"
                />
                <label
                  htmlFor="consent"
                  className="text-[11px] sm:text-[12px] text-gray-900 leading-[1.4] cursor-pointer select-none text-left"
                >
                  I agree to be contacted via calls and WhatsApp for information and promotional purposes.
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2 sm:pt-3 flex justify-center">
                <button
                  type="submit"
                  className="bg-[#b8935e] cursor-pointer hover:bg-[#a17f4d] text-white font-medium text-[13px] sm:text-[14px] px-8 sm:px-10 md:px-12 py-2.5 sm:py-3 transition-all duration-300 w-full sm:w-auto rounded-sm active:scale-95"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryModal;