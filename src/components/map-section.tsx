"use client"

import { useRef } from 'react';

export default function ConnectivitySection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const connectivityItems = [
    {
      icon: '/m1.svg',
      title: 'R Mall',
      time: '1 Mins'
    },
    {
      icon: '/m2.svg',
      title: 'Eastern Express Highway',
      time: '5 Mins'
    },
    {
      icon: '/m3.svg',
      title: 'Majiwada Junction',
      time: '5 Mins'
    },
    {
      icon: '/m4.svg',
      title: 'Viviana Mall',
      time: '6 Mins'
    },
    {
      icon: '/m5.svg',
      title: 'Jupiter Hospital',
      time: '6 Mins'
    },
    {
      icon: '/m6.svg',
      title: 'Western Express Highway',
      time: '25 Mins'
    }
  ];

  const scroll = (direction: 'left' | 'right')=> {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -scrollContainerRef.current.offsetWidth : scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }

  return (
    <section id="connectivity" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          <h2 className="text-[#B5986C] text-xl md:text-2xl font-normal mb-8">Connectivity</h2>
          
          {/* Mobile Horizontal Scroll for Connectivity Items */}
          <div className="relative mb-8">
            <div 
              ref={scrollContainerRef}
              className="overflow-x-auto scrollbar-hide snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="flex gap-0">
                {connectivityItems.map((item, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 w-full snap-center px-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                        <img 
                          src={item.icon} 
                          alt={item.title}
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-gray-800 text-base font-normal">
                          {item.title} - {item.time}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center items-center gap-4 mt-6">
              <button
                onClick={() => scroll('left')}
                className="w-8 h-8 flex items-center justify-center text-[#4A4A4A] hover:text-[#B5986C] transition-colors"
                aria-label="Previous"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-8 h-8 flex items-center justify-center text-[#4A4A4A] hover:text-[#B5986C] transition-colors"
                aria-label="Next"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Map Image */}
          <div className="relative mt-8">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/map.webp" 
                alt="Location Map"
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-center text-sm text-gray-600 mt-4">Distances as per Google Maps</p>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Connectivity List */}
          <div>
            <h2 className="text-[#B5986C] text-2xl font-normal mb-12">Connectivity</h2>
            
            <div className="grid grid-cols-2 gap-x-12 gap-y-10">
              {connectivityItems.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-6"
                >
                  <div className="w-16 h-16 flex items-center justify-center flex-shrink-0">
                    <img 
                      src={item.icon} 
                      alt={item.title}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-800 text-xl font-normal">{item.title} - {item.time}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Map */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/map.webp" 
                alt="Location Map"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}