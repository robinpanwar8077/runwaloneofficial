'use client';

import { useState } from 'react';
import EnquireForm from './enquireform';

export default function ChatButton() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleClick = () => {
    setIsFormOpen(true);
  };

  const handleClose = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      {/* Chat Icon Button - Fixed Left Bottom */}
      <button
        onClick={handleClick}
        className="fixed bottom-5 left-5 w-14 h-14 bg-[#aa8a4b] rounded-lg shadow-lg flex items-center justify-center z-[1000] cursor-pointer hover:opacity-90 transition-opacity"
        aria-label="Open chat"
      >
        <img 
          src="/chat1.svg" 
          alt="Chat" 
          className="w-8 h-8"
        />
      </button>

      <EnquireForm isOpen={isFormOpen} onClose={handleClose} />
    </>
  );
}