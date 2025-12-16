"use client"
import { useState } from "react"

export function HighlightsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const highlights = [
    {
      icon: "/r1.png",
      title: "50+ Engaging Amenities",
    },
    {
      icon: "/h2.png",
      title: "4.5 - Acre Open Space",
    },
    {
      icon: "/h3.png",
      title: "Tennis Court",
    },
    {
      icon: "/h5.svg",
      title: "Sunken Garden",
    },
    {
      icon: "/h7.svg",
      title: "Pet Park",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % highlights.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + highlights.length) % highlights.length)
  }

  return (
    <section id="highlights" className="py-12 md:py-20" style={{ backgroundColor: "#f8f8f8" }}>
      <style jsx>{`
        @font-face {
          font-family: "GT-Ultra-Median-Regular";
          src: url("/fonts/GT-Ultra-Median-Regular.woff2") format("woff2"),
               url("/fonts/GT-Ultra-Median-Regular.woff") format("woff");
          font-weight: normal;
          font-style: normal;
        }
      `}</style>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8 md:mb-16">
          <div className="text-sm uppercase tracking-wider font-bold text-[#B5986C] mb-2 md:mb-3">Project</div>
          <h2 
            className="font-normal text-[#000]"
            style={{
              fontFamily: "GT-Ultra-Median-Regular, serif",
              fontSize: "clamp(1.75rem, 5vw, 3rem)",
              letterSpacing: "0.02em"
            }}
          >
            Highlights
          </h2>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative">
            {/* Card */}
            <div className="bg-white border-2 border-[#B5986C] flex items-center gap-4 px-6 py-6 mx-4">
              <div className="flex-shrink-0">
                <img 
                  src={highlights[currentIndex].icon} 
                  alt={highlights[currentIndex].title}
                  className="w-12 h-12 object-contain"
                  style={{ filter: "sepia(0.5) saturate(0.8) hue-rotate(10deg)" }}
                />
              </div>
              <p className="text-base font-normal text-[#333]">{highlights[currentIndex].title}</p>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <button
                onClick={prevSlide}
                className="w-8 h-8 flex items-center justify-center text-[#B5986C] hover:text-[#8B7355] transition-colors"
                aria-label="Previous highlight"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-8 h-8 flex items-center justify-center text-[#B5986C] hover:text-[#8B7355] transition-colors"
                aria-label="Next highlight"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:flex flex-col items-center gap-6">
          {/* First Row - 3 items */}
          <div className="flex flex-wrap justify-center gap-6 w-full max-w-6xl">
            {highlights.slice(0, 3).map((item, index) => (
              <div
                key={index}
                className="bg-white border-2 border-[#B5986C] flex items-center gap-4 px-8 py-6 hover:shadow-lg transition-shadow flex-1 min-w-[280px] max-w-[400px]"
                style={{ borderRadius: "0px" }}
              >
                <div className="flex-shrink-0">
                  <img 
                    src={item.icon} 
                    alt={item.title}
                    className="w-12 h-12 object-contain"
                    style={{ filter: "sepia(0.5) saturate(0.8) hue-rotate(10deg)" }}
                  />
                </div>
                <p className="text-base font-normal text-[#333]">{item.title}</p>
              </div>
            ))}
          </div>

          {/* Second Row - 2 items centered */}
          <div className="flex flex-wrap justify-center gap-6 w-full max-w-4xl">
            {highlights.slice(3, 5).map((item, index) => (
              <div
                key={index}
                className="bg-white border-2 border-[#B5986C] flex items-center gap-4 px-8 py-6 hover:shadow-lg transition-shadow flex-1 min-w-[280px] max-w-[400px]"
                style={{ borderRadius: "0px" }}
              >
                <div className="flex-shrink-0">
                  <img 
                    src={item.icon} 
                    alt={item.title}
                    className="w-12 h-12 object-contain"
                    style={{ filter: "sepia(0.5) saturate(0.8) hue-rotate(10deg)" }}
                  />
                </div>
                <p className="text-base font-normal text-[#333]">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}