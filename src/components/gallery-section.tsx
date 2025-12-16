"use client"
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import EnquireForm from './enquireform';

type GalleryTab = 'renders' | 'showflat' | 'floorplan' | 'view360';

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState<GalleryTab>('showflat');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formType, setFormType] = useState<'floorplan' | 'view360'>('floorplan');

  const galleries: Record<GalleryTab, string[]> = {
    renders: [
      '/g1.webp',
      '/g2.webp',
      '/g3.webp',
      '/g1.webp',
    ],
    showflat: [
      '/f1.webp',
      '/f2.webp',
      '/f3.webp',
      '/f1.webp',
    ],
    floorplan: [
      '/p1.webp',
      '/p2.webp',
      '/p3.webp',
      '/p1.webp',
    ],
    view360: [
      '/360.jpg',
    ],
  };

  const tabs: { id: GalleryTab; label: string }[] = [
    { id: 'renders', label: 'Renders' },
    { id: 'showflat', label: 'Show Flat' },
    { id: 'floorplan', label: 'Floor Plan' },
    { id: 'view360', label: '360 View' },
  ];

  const currentGallery = galleries[activeTab];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % currentGallery.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + currentGallery.length) % currentGallery.length);
  };

  const handleTabChange = (tabId: GalleryTab) => {
    setActiveTab(tabId);
    setCurrentIndex(0);
  };

  const handleImageClick = () => {
    if (activeTab === 'floorplan' || activeTab === 'view360') {
      setFormType(activeTab);
      setIsFormOpen(true);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-6">
          <p className="text-[#B5986C] text-sm uppercase tracking-wider mb-2">Gallery</p>
          <h2 className="text-4xl md:text-5xl text-black font-light tracking-wide">
            Framing Timeless Design
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-8 mb-12 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`pb-4 px-4 text-lg transition-colors  cursor-pointer relative ${
                activeTab === tab.id
                  ? 'text-black font-medium'
                  : 'text-gray-400 font-normal'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B5986C]" />
              )}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <div className="relative">
          <div className="flex items-center justify-center gap-6 mb-8">
            {/* Left Image */}
            {activeTab !== 'view360' && (
              <div className="relative overflow-hidden rounded-lg h-64 md:h-80 w-1/4 hidden md:block">
                <img
                  src={currentGallery[(currentIndex - 1 + currentGallery.length) % currentGallery.length]}
                  alt="Gallery"
                  className={`w-full h-full object-cover ${activeTab === 'floorplan' ? 'blur-md' : ''}`}
                />
              </div>
            )}

            {/* Center Image (Main) - Bigger */}
            <div 
              className={`relative overflow-hidden rounded-lg h-96 md:h-[500px] shadow-2xl ${
                activeTab === 'view360' ? 'w-full max-w-4xl' : 'w-full md:w-1/2'
              } ${
                (activeTab === 'floorplan' || activeTab === 'view360') ? 'cursor-pointer' : ''
              }`}
              onClick={handleImageClick}
            >
              <img
                src={currentGallery[currentIndex]}
                alt="Gallery main"
                className={`w-full h-full object-cover ${activeTab === 'floorplan' || activeTab === 'view360' ? 'blur-md' : ''}`}
              />
              {(activeTab === 'floorplan' || activeTab === 'view360') && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="text-center text-white">
                    <p className="text-2xl font-semibold mb-2">
                      {activeTab === 'floorplan' ? 'View Floor Plan' : 'View 360°'}
                    </p>
                    <p className="text-sm">Click to access</p>
                  </div>
                </div>
              )}
            </div>

            {/* Right Image */}
            {activeTab !== 'view360' && (
              <div className="relative overflow-hidden rounded-lg h-64 md:h-80 w-1/4 hidden md:block">
                <img
                  src={currentGallery[(currentIndex + 1) % currentGallery.length]}
                  alt="Gallery"
                  className={`w-full h-full object-cover ${activeTab === 'floorplan' ? 'blur-md' : ''}`}
                />
              </div>
            )}
          </div>

          {/* Navigation Arrows */}
          <div className={`flex justify-center gap-4 ${activeTab === 'view360' ? 'hidden' : ''}`}>
            <button
              onClick={prevImage}
              className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-300 hover:border-[#B5986C] hover:bg-[#B5986C] hover:text-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-300 hover:border-[#B5986C] hover:bg-[#B5986C] hover:text-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Enquire Form */}
      <EnquireForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        headerType={formType}
      />
    </section>
  );
}