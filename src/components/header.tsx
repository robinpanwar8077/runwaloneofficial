"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import EnquireForm from './enquireform';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false);

  const navItems = [
    "Overview",
    "Highlights",
    "Configuration",
    "Amenities",
    "Gallery",
    "Connectivity",
    "About Us",
    "Contact Us",
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[88px]">
          <div className="hidden lg:flex flex-shrink-0">
            <Image
              width={160}
              height={60}
              src="/logo1.png"
              alt="Premium 2 & 3 BHK Flat Runwal One in Manpada Thane West"
              priority
              className="w-auto h-[50px]"
            />
          </div>

          <div className="flex lg:hidden items-center justify-between w-full gap-4">
            {/* Logo 1 on left */}
            <div className="flex-shrink-0">
              <Image
                width={160}
                height={60}
                src="/logo1.png"
                alt="Premium 2 & 3 BHK Flat Runwal One in Manpada Thane West"
                priority
                className="w-auto h-[45px]"
              />
            </div>

            {/* Logo 2 centered */}
            <div className="flex-1 flex justify-center">
              <Image width={80} height={50} src="/logo2.svg" alt="Runwal" className="w-auto h-[40px]" />
            </div>

            {/* Menu button on right */}
            <button
              className="p-2 z-50 relative"
              style={{ color: "#363636" }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          <nav className="hidden lg:flex items-center gap-7 xl:gap-9 flex-1 justify-center mx-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="hover:text-[#8B6914] transition-colors font-normal whitespace-nowrap"
                style={{
                  fontFamily: "GT-Ultra-Median-Regular",
                  fontSize: "20px",
                  color: "#363636",
                }}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <Button
                                                      onClick={() => setIsFormOpen(true)}

              className="bg-white cursor-pointer text-[#8B6914] border border-[#8B6914] hover:bg-[#8B6914] hover:text-white transition-all duration-300 rounded-full px-7 py-2 h-auto text-[15px] font-normal"
              style={{
                fontFamily: "GT-Ultra-Median-Regular",
              }}
            >
              Enquire Now
            </Button>

            <div className="flex-shrink-0">
              <Image width={120} height={60} src="/logo2.svg" alt="Runwal" className="w-auto h-[60px]" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Shutter Animation */}
      <div
        className={`lg:hidden bg-white border-t overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="max-w-[1400px] mx-auto px-6 py-8 flex flex-col items-center">
          {navItems.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="hover:text-[#8B6914] py-3 transition-colors text-center transform transition-all duration-300"
              style={{
                fontFamily: "GT-Ultra-Median-Regular",
                fontSize: "18px",
                color: "#363636",
                transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? "translateY(0)" : "translateY(-10px)",
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          {/* <Button
                                          onClick={() => setIsFormOpen(true)}

            className="bg-white   cursor-pointer text-[#8B6914] border border-[#8B6914] hover:bg-[#8B6914] hover:text-white transition-all duration-300 rounded-full px-7 py-2 h-auto text-[15px] font-normal mt-4"
            style={{
              fontFamily: "GT-Ultra-Median-Regular",
              transitionDelay: isMenuOpen ? `${navItems.length * 50}ms` : "0ms",
              opacity: isMenuOpen ? 1 : 0,
              transform: isMenuOpen ? "translateY(0)" : "translateY(-10px)",
            }}
          >
            Enquire Now
          </Button> */}
        </nav>
      </div>
      <EnquireForm 
                    isOpen={isFormOpen} 
                    onClose={() => setIsFormOpen(false)}
                    headerType="enquire"
                  />
    </header>
  )
}