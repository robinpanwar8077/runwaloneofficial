"use client"
import { useState } from 'react';
import { Phone } from 'lucide-react';

export default function ContactFooterSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    agree: false
  });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div>
      {/* Contact Section */}
      <section id="contact-us" className="bg-white">
        {/* Mobile Layout - Form First, Then Map */}
        <div className="lg:hidden">
          {/* Form Section */}
          <div 
            className="p-8 bg-cover bg-center bg-no-repeat flex flex-col justify-center min-h-[600px]"
            style={{ backgroundImage: 'url(/formbg.webp)' }}
          >
            <div className="max-w-2xl mx-auto w-full">
              <h2 className="text-2xl md:text-3xl font-normal text-black mb-6 text-center">Get In Touch</h2>
              
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-2 bg-white/90 border-2 border-black rounded-none focus:outline-none focus:border-black text-gray-800 text-base placeholder-gray-500"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-2 bg-white/90 border-2 border-black rounded-none focus:outline-none focus:border-black text-gray-800 text-base placeholder-gray-500"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="number"
                    placeholder="Number*"
                    value={formData.number}
                    onChange={handleChange}
                    className="w-full px-6 py-2 bg-white/90 border-2 border-black rounded-none focus:outline-none focus:border-black text-gray-800 text-base placeholder-gray-500"
                  />
                </div>

                <div className="flex items-start gap-3 py-2">
                  <input
                    type="checkbox"
                    name="agree"
                    id="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 accent-blue-600 cursor-pointer"
                  />
                  <label htmlFor="agree" className="text-sm text-gray-800 leading-relaxed cursor-pointer">
                    I agree to be contacted via calls and WhatsApp for information and promotional purposes.
                  </label>
                </div>

                <div className="flex justify-center pt-4">
                  <button
                    onClick={handleSubmit}
                    className="bg-[#aa8a4b] text-white px-10 py-3 cursor-pointer rounded-none hover:bg-[#9A7F5C] transition-colors text-lg font-normal"
                  >
                    Submit
                  </button>
                </div>
              </div>

              <div className="mt-8 text-center">
                <h3 className="text-xl font-normal text-black mb-3">Site Address</h3>
                <div className="h-px w-12 bg-[#B5986C] mx-auto mb-4"></div>
                <p className="text-gray-800 text-sm leading-relaxed">
                  Runwal One at Manpada, Next to R Mall, Ghodbunder Road, Thane (W).
                </p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="relative h-[400px]">
            <div className="overflow-hidden h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4434.197513772623!2d72.976773!3d19.234218!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bb549a66609f%3A0x9f9f801f152c09e6!2s25%20Hour%20Life%20by%20Runwal!5e1!3m2!1sen!2sin!4v1738064256755!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Side by Side */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-0">
          {/* Left - Map */}
          <div className="relative h-[800px]">
            <div className="overflow-hidden h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4434.197513772623!2d72.976773!3d19.234218!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bb549a66609f%3A0x9f9f801f152c09e6!2s25%20Hour%20Life%20by%20Runwal!5e1!3m2!1sen!2sin!4v1738064256755!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div 
            className="p-8 md:p-12 lg:p-16 xl:p-20 bg-cover bg-center bg-no-repeat flex flex-col justify-center h-[800px]"
            style={{ backgroundImage: 'url(/formbg.webp)' }}
          >
            <div className="max-w-2xl w-full">
              <h2 className="text-3xl md:text-3xl lg:text-4xl font-normal text-black mb-8 text-center">Get In Touch</h2>
              
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-2 bg-white/90 border-2 border-black rounded-none focus:outline-none focus:border-black text-gray-800 text-lg placeholder-gray-500"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-2 bg-white/90 border-2 border-black rounded-none focus:outline-none focus:border-black text-gray-800 text-lg placeholder-gray-500"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="number"
                    placeholder="Number*"
                    value={formData.number}
                    onChange={handleChange}
                    className="w-full px-6 py-2 bg-white/90 border-2 border-black rounded-none focus:outline-none focus:border-black text-gray-800 text-lg placeholder-gray-500"
                  />
                </div>

                <div className="flex items-start gap-3 py-2">
                  <input
                    type="checkbox"
                    name="agree"
                    id="agree-desktop"
                    checked={formData.agree}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 accent-blue-600 cursor-pointer"
                  />
                  <label htmlFor="agree-desktop" className="text-base text-gray-800 leading-relaxed cursor-pointer">
                    I agree to be contacted via calls and WhatsApp for information and promotional purposes.
                  </label>
                </div>

                <div className="flex justify-center pt-4">
                  <button
                    onClick={handleSubmit}
                    className="bg-[#aa8a4b] text-white px-10 py-4 cursor-pointer rounded-none hover:bg-[#9A7F5C] transition-colors text-xl font-normal"
                  >
                    Submit
                  </button>
                </div>
              </div>

              <div className="mt-8 text-center">
                <h3 className="text-2xl font-normal text-black mb-3">Call Us On</h3>
                <div className="h-px w-12 bg-[#B5986C] mx-auto mb-4"></div>
                <a href="tel:02262328442" className="flex items-center justify-center gap-2 text-xl text-gray-800 hover:text-[#B5986C] transition-colors">
                  <Phone className="w-5 h-5" />
                  02262328442
                </a>
              </div>

              <div className="mt-8 text-center">
                <h3 className="text-2xl font-normal text-black mb-3">Site Address</h3>
                <div className="h-px w-12 bg-[#B5986C] mx-auto mb-4"></div>
                <p className="text-gray-800 text-base leading-relaxed">
                  Runwal One at Manpada, Next to R Mall, Ghodbunder Road, Thane (W).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RERA Section */}
      <section className="py-12 bg-[#fffbf0]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-row items-center justify-center gap-4 md:gap-8 mb-6">
            <img src="/q1.jpg" alt="QR Code 1" className="w-24 h-24 md:w-32 md:h-32" />
            <img src="/q2.jpg" alt="QR Code 2" className="w-24 h-24 md:w-32 md:h-32" />
            <img src="/q3.jpg" alt="QR Code 3" className="w-24 h-24 md:w-32 md:h-32" />
          </div>
          <p className="text-center text-black text-xs md:text-base px-4">
            Maha RERA Registration No. P51700048270, P51700048278, P51700053696 | Available at{' '}
            <a 
              href="http://maharera.mahaonline.gov.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#B5986C] hover:underline"
            >
              http://maharera.mahaonline.gov.in
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#fffbf0] border-gray-200">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center space-y-2">
            <p className="text-gray-800 font-medium">Disclaimer</p>
            <p className="text-gray-600 text-sm">© 2025 Runwal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}