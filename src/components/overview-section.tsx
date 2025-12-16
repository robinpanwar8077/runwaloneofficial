"use client"

import { useState } from "react"
import { Download } from "lucide-react"
import EnquireForm from './enquireform';

export default function OverviewSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    consent: false,
  })
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <>
      <style>{`
        @font-face {
          font-family: 'GT-Ultra-Median-Regular';
          src: url('/fonts/GT-Ultra-Median-Regular.woff2') format('woff2'),
               url('/fonts/GT-Ultra-Median-Regular.woff') format('woff');
          font-weight: normal;
          font-style: normal;
        }
        
        .gt-ultra-font {
          font-family: 'GT-Ultra-Median-Regular', sans-serif;
        }
        
        .responsive-text {
          font-size: 1.1vw;
          color: #363636;
        }
        
        @media (max-width: 768px) {
          .responsive-text {
            font-size: 14px;
          }
        }
      `}</style>
      
      <section id="overview" className="py-8 sm:py-12 md:py-20 w-full overflow-hidden gt-ultra-font">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
            {/* Right Form - Shows FIRST on mobile */}
            <div className="bg-white shadow-none sm:shadow-xl md:shadow-2xl p-6 sm:p-8 md:p-12 order-1 md:order-2 w-full">
              <h3 
                className="text-center font-normal text-gray-900 mb-6 sm:mb-8 md:mb-10 text-xl sm:text-2xl md:text-3xl leading-tight"
              >
                Register Your Interest
              </h3>
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                <input
                  type="text"
                  placeholder="Full Name*"
                  value={formData.fullName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                  className="w-full h-11 sm:h-12 md:h-14 border-2 border-gray-500 px-3 sm:px-4 text-sm sm:text-base placeholder:text-gray-500 focus:border-gray-600 focus:outline-none rounded-sm"
                />
                <input
                  type="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full h-11 sm:h-12 md:h-14 border-2 border-gray-500 px-3 sm:px-4 text-sm sm:text-base placeholder:text-gray-500 focus:border-gray-600 focus:outline-none rounded-sm"
                />
                <input
                  type="tel"
                  placeholder="Phone*"
                  value={formData.phone}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="w-full h-11 sm:h-12 md:h-14 border-2 border-gray-500 px-3 sm:px-4 text-sm sm:text-base placeholder:text-gray-500 focus:border-gray-600 focus:outline-none rounded-sm"
                />
                <div className="flex items-start gap-2 sm:gap-3 pt-1 sm:pt-2">
                  <input
                    type="checkbox"
                    id="consent"
                    checked={formData.consent}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-0.5 w-4 h-4 sm:w-5 sm:h-5 border-2 border-blue-600 accent-blue-600 cursor-pointer flex-shrink-0"
                  />
                  <label htmlFor="consent" className="text-xs sm:text-sm text-gray-700 leading-snug cursor-pointer font-normal">
                    I agree to be contacted via calls and WhatsApp for information and promotional purposes.
                  </label>
                </div>
                <div className="flex justify-center pt-2 sm:pt-3 md:pt-4">
                  <button
                      onClick={handleSubmit}
                      className="bg-[#aa8a4b] text-white px-10 py-4 cursor-pointer rounded-none hover:bg-[#9A7F5C] transition-colors text-xl font-normal"
                    >
                      Submit
                    </button>
                </div>
              </div>
            </div>

            {/* Left Content - Shows SECOND on mobile */}
            <div className="text-center md:text-left order-2 md:order-1 w-full">
              <div className="text-xs sm:text-sm uppercase tracking-wider text-[#aa8a4b] mb-2 sm:mb-3">Overview</div>
              <h2 
                className="font-bold text-gray-900 mb-4 sm:mb-6 leading-tight text-2xl sm:text-3xl md:text-4xl"
              >
                Runwal One
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-3 sm:mb-4 font-medium">Thane's True Urban Habitat</p>
              <p className="responsive-text leading-relaxed mb-6 sm:mb-8 px-2 sm:px-0">
                Imagine a life where every moment feels like a gift, where time empowers your dreams, and every hour adds
                meaning to your day. At Runwal One, experience 21 acres of thoughtfully curated living, 4.5 acres of open
                spaces, 50+ amenities, and one of Thane's largest clubhouses, redefining luxury and convenience. Welcome
                to a home where every day will bestow you with so much more life per hour. And more hours per day.
              </p>
              <button
                onClick={() => setIsFormOpen(true)}
                className="border-2 cursor-pointer border-[#aa8a4b] text-[#aa8a4b] hover:bg-[#aa8a4b] hover:text-white bg-transparent rounded-full px-6 sm:px-8 py-2.5 sm:py-3 transition-all duration-300 inline-flex items-center text-sm sm:text-base active:scale-95"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Brochure
              </button>
            </div>
          </div>
        </div>
        <EnquireForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)}
        headerType="Brochure"
      />
      </section>
    </>
  )
}