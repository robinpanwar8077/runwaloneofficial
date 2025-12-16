"use client"

import { useRef } from 'react';

export default function AmenitiesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const amenities = [
    {
      icon: "/a1.svg",
      title: "Podium",
    },
    {
      icon: "/a2.svg",
      title: "Central garden",
    },
    {
      icon: "/a3.svg",
      title: "Infinity pool",
    },
    {
      icon: "/a4.svg",
      title: "Herb garden",
    },
    {
      icon: "/a5.svg",
      title: "Cascading pool",
    },
    {
      icon: "/a6.svg",
      title: "Seniors park",
    },
  ]

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -scrollContainerRef.current.offsetWidth : scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }

  return (
    <section id="amenities" className="py-20 bg-[#F5F1E8]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[#B5986C] font-light tracking-wide">
            Amenities
          </h2>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-12 max-w-6xl mx-auto">
          {amenities.map((item, index) => (
            <div key={index} className="text-center flex flex-col items-center">
              <div className="mb-6 flex items-center justify-center h-20">
                <img 
                  src={item.icon} 
                  alt={item.title}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <p className="text-base text-[#4A4A4A] font-normal">{item.title}</p>
            </div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden relative">
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-0">
              {/* Group amenities in pairs */}
              {Array.from({ length: Math.ceil(amenities.length / 2) }).map((_, groupIndex) => (
                <div 
                  key={groupIndex}
                  className="flex-shrink-0 w-full snap-center grid grid-cols-2 gap-8 px-4"
                >
                  {amenities.slice(groupIndex * 2, groupIndex * 2 + 2).map((item, index) => (
                    <div key={index} className="text-center flex flex-col items-center">
                      <div className="mb-6 flex items-center justify-center h-20">
                        <img 
                          src={item.icon} 
                          alt={item.title}
                          className="w-20 h-20 object-contain"
                        />
                      </div>
                      <p className="text-base text-[#4A4A4A] font-normal">{item.title}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => scroll('left')}
              className="w-8 h-8 flex items-center justify-center text-[#4A4A4A] hover:text-[#B5986C] transition-colors"
              aria-label="Previous"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-8 h-8 flex items-center justify-center text-[#4A4A4A] hover:text-[#B5986C] transition-colors"
              aria-label="Next"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}