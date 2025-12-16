"use client"

import { useState } from "react"
import { Download } from "lucide-react"

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
    <section id="overview" className="py-12 md:py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <div className="text-sm uppercase tracking-wider text-amber-700 mb-3">Overview</div>
            <h2 
              className="font-bold text-gray-900 mb-6 leading-tight text-3xl md:text-4xl"
            >
              Runwal One
            </h2>
            <p className="text-lg text-gray-700 mb-4 font-medium">Thane's True Urban Habitat</p>
            <p className="text-gray-600 leading-relaxed mb-8 text-base">
              Imagine a life where every moment feels like a gift, where time empowers your dreams, and every hour adds
              meaning to your day. At Runwal One, experience 21 acres of thoughtfully curated living, 4.5 acres of open
              spaces, 50+ amenities, and one of Thane's largest clubhouses, redefining luxury and convenience. Welcome
              to a home where every day will bestow you with so much more life per hour. And more hours per day.
            </p>
            <button
              onClick={() => setIsFormOpen(true)}
              className="border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white bg-transparent rounded-full px-8 py-3 transition-all duration-300 inline-flex items-center"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Brochure
            </button>
          </div>

          {/* Right Form */}
          <div className="bg-white shadow-2xl p-8 md:p-12">
            <h3 
              className="text-center font-normal text-gray-900 mb-8 md:mb-10 text-2xl md:text-3xl"
            >
              Register Your Interest
            </h3>
            <div className="space-y-6">
              <input
                type="text"
                placeholder="Full Name*"
                value={formData.fullName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, fullName: e.target.value })}
                required
                className="w-full h-12 md:h-14 border-2 border-gray-500 px-4 text-base placeholder:text-gray-500 focus:border-gray-600 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email*"
                value={formData.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full h-12 md:h-14 border-2 border-gray-500 px-4 text-base placeholder:text-gray-500 focus:border-gray-600 focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone*"
                value={formData.phone}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="w-full h-12 md:h-14 border-2 border-gray-500 px-4 text-base placeholder:text-gray-500 focus:border-gray-600 focus:outline-none"
              />
              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  id="consent"
                  checked={formData.consent}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-0.5 w-5 h-5 border-2 border-blue-600 accent-blue-600 cursor-pointer"
                />
                <label htmlFor="consent" className="text-sm text-gray-700 leading-snug cursor-pointer font-normal">
                  I agree to be contacted via calls and WhatsApp for information and promotional purposes.
                </label>
              </div>
              <div className="flex justify-center pt-4">
                <button 
                  onClick={handleSubmit}
                  className="bg-amber-700 hover:bg-amber-800 text-white px-12 md:px-16 py-4 md:py-6 text-base md:text-lg font-normal tracking-wide transition-all duration-300"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}