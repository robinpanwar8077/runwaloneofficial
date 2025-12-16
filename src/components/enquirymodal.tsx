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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 animate-in fade-in duration-300"
      onClick={closeModal}
    >
      <div
        className="relative flex flex-col md:flex-row w-full md:h-[550px] bg-white shadow-2xl overflow-hidden animate-in slide-in-from-top-10 duration-400 max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '1000px' }}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center text-gray-600 hover:text-black transition-all duration-200 border-2 border-gray-400 rounded bg-white/90"
          aria-label="Close modal"
        >
          <svg
            className="w-5 h-5"
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

        {/* Top - Image (mobile) / Left Side (desktop) */}
        <div className="w-full md:w-[48%] h-[200px] md:h-auto md:p-5">
          <div className="relative w-full h-full md:p-0">
            <Image
              src="/popimg.jpg"
              alt="Runwal Realty"
              fill
              className="object-fill md:object-contain"
              priority
            />
          </div>
        </div>

        {/* Bottom - Form (mobile) / Right Side (desktop) */}
        <div className="w-full md:w-[52%] px-6 py-8 md:px-10 md:py-10 flex flex-col justify-center overflow-y-auto bg-white">
          <div className="w-full text-center" style={{ maxWidth: '470px', margin: '0 auto' }}>
            <h2 className="text-[1.5rem] md:text-[2rem] font-serif font-normal mb-3 md:mb-4 text-gray-900 tracking-tight leading-tight">
              Enquire Now
            </h2>
            <p className="text-[13px] md:text-[14px] text-gray-800 mb-6 md:mb-7 leading-relaxed">
              Please enter the details below to get in touch with us!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 text-[14px] border-2 border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-600 transition-colors placeholder:text-gray-500"
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
                  className="w-full px-4 py-3 text-[14px] border-2 border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-600 transition-colors placeholder:text-gray-500"
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
                  className="w-full px-4 py-3 text-[14px] border-2 border-gray-400 focus:outline-none focus:ring-0 focus:border-gray-600 transition-colors placeholder:text-gray-500"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start md:items-center justify-center gap-2 pt-2">
                <input
                  type="checkbox"
                  name="consent"
                  id="consent"
                  required
                  checked={formData.consent}
                  onChange={handleInputChange}
                  className="w-4 h-4 mt-0.5 md:mt-0 cursor-pointer accent-blue-600 border-gray-300 flex-shrink-0"
                />
                <label
                  htmlFor="consent"
                  className="text-[12px] text-gray-900 leading-[1.4] cursor-pointer select-none text-left md:text-center"
                >
                  I agree to be contacted via calls and WhatsApp for information and promotional purposes.
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-3 flex justify-center">
                <button
                  type="submit"
                  className="bg-[#b8935e] hover:bg-[#a17f4d] text-white font-medium text-[14px] px-12 py-3 transition-all duration-300 inline-block w-full md:w-auto"
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