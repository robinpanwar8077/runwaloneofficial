"use client"
import { useState, useEffect, useRef } from 'react';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);

  const stats = [
    {
      target: 47,
      suffix: "+",
      label: "Years of Legacy",
    },
    {
      target: 50,
      suffix: "+",
      label: "Projects Delivered",
    },
    {
      target: 50,
      suffix: "+",
      label: "Awards & Accolades",
    },
    {
      target: 50,
      suffix: "k+",
      label: "Happy Families",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        let start = 0;
        const duration = 2000;
        const increment = stat.target / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= stat.target) {
            setCounts(prev => {
              const newCounts = [...prev];
              newCounts[index] = stat.target;
              return newCounts;
            });
            clearInterval(timer);
          } else {
            setCounts(prev => {
              const newCounts = [...prev];
              newCounts[index] = Math.floor(start);
              return newCounts;
            });
          }
        }, 16);
      });
    }
  }, [isVisible]);

  return (
    <section  id="about-us" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-normal text-black mb-8">About Us</h2>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          <p className="text-gray-700 leading-relaxed text-center text-lg">
            Established in 1978, Runwal Realty, based in Mumbai, stands as India's premier and leading real estate
            developer, operating in residential, commercial, and organized retail verticals across Mumbai, Thane & Pune.
            Over the last four decades, Runwal Realty has delivered more than 50+ landmark projects. The company has
            brought joy to more than 48,000 happy families across Mumbai. In addition to residential projects, Runwal
            Realty is also a pioneer in developing malls and is renowned for its iconic projects - R City and R Mall in
            Mumbai.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center relative">
              {index > 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-20 bg-[#B5986C]" />
              )}
              <div className="text-5xl md:text-6xl font-light text-[#B5986C] mb-3">
                {counts[index]}{stat.suffix}
              </div>
              <div className="text-base md:text-lg text-gray-800 font-normal">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}