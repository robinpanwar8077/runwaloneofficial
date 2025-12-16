'use client';

import { useState } from 'react';
import EnquireForm from './enquireform';

export default function EnquireButton() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleClick = () => {
    setIsFormOpen(true);
  };

  const handleClose = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      {/* Desktop Button - Single Enquire Now */}
      <button
        onClick={handleClick}
        className="hidden md:block fixed bottom-[5px] right-[15px] w-fit px-5 py-2.5 bg-[#aa8a4b] text-white text-lg text-center border-none z-[1] cursor-pointer hover:opacity-90 transition-opacity"
        style={{ fontFamily: '"Gambetta-Medium", Georgia, serif' }}
      >
        Enquire Now
      </button>

      {/* Mobile Buttons - Split Call Now & Enquire Now */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 flex z-[1]">
        <a
          href="tel:02262328442"
          className="flex-1 py-3 bg-[#aa8a4b] text-white text-base text-center border-none cursor-pointer hover:opacity-90 transition-opacity"
          style={{ fontFamily: '"Gambetta-Medium", Georgia, serif' }}
        >
          Call Now
        </a>
        <div className="w-[2px]  bg-white"></div>
        <button
          onClick={handleClick}
          className="flex-1 py-3 bg-[#aa8a4b] text-white text-base text-center border-none cursor-pointer hover:opacity-90 transition-opacity"
          style={{ fontFamily: '"Gambetta-Medium", Georgia, serif' }}
        >
          Enquire Now
        </button>
      </div>

      <EnquireForm isOpen={isFormOpen} onClose={handleClose} />
    </>
  );
}