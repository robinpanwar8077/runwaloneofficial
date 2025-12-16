"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "/w3.webp",
      title: "2 & 3 Bed Opulent Residences",
      subtitle: "Starting at ₹1.59 CR*",
      badge: "Made by Premium Realty",
      year: "2025",
    },
    {
      image: "/m2.webp",
      title: "Premium Interior Spaces",
      subtitle: "Luxury Living Redefined",
      badge: "Award-Winning Design",
      year: "2025",
    },
    {
      image: "/w1.webp",
      title: "World-Class Amenities",
      subtitle: "Experience The Oasis",
      badge: "5-Star Facilities",
      year: "2025",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative w-full overflow-hidden">
      <div className="bg-gray-200 py-2 text-center w-full">
        <p className="text-xs sm:text-sm px-4 font-bold text-gray-700">
          This Is An Official Runwal Realty Website - ©2025 Runwal Realty. All Right Reserved
        </p>
      </div>

      <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] w-full overflow-hidden">
        {/* Hero Image */}
        <div className="absolute inset-0 w-full h-full">
          <div className="relative w-full h-full overflow-hidden">
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-fill transition-opacity duration-700 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent pointer-events-none" />
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all z-10"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>
        <button
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all z-10"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>
      </div>
    </section>
  )
}