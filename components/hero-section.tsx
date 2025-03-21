"use client"

import { useEffect, useState } from "react"

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentPart, setCurrentPart] = useState(0)

  const textParts = ["Brand.", "Design.", "Product.", "In-House Development.", "&More"]

  useEffect(() => {
    if (currentPart < textParts.length) {
      const part = textParts[currentPart]

      if (currentIndex < part.length) {
        const timer = setTimeout(() => {
          setDisplayText((prev) => prev + part[currentIndex])
          setCurrentIndex((prev) => prev + 1)
        }, 100)

        return () => clearTimeout(timer)
      } else {
        setCurrentPart((prev) => prev + 1)
        setCurrentIndex(0)
        setDisplayText((prev) => prev + " ")
      }
    }
  }, [currentPart, currentIndex])

  return (
    <section className="min-h-screen pt-24 pb-12 px-4 md:px-8 flex flex-col justify-center relative">
      



        <div className="max-w-4xl ml-5 md:ml-20 mt-20 md:mt-2 mb-8 md:mb-12 relative z-10 text-left">
  <h1 className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight">
    <span className="text-white">Brand.</span>
    <span className="text-gray-500">Design.</span>
    <span className="text-white">Product.</span>
    <br />
    <span className="text-gray-500">In-House Development.</span>
    <br />
    <span className="text-white">&More</span>
  </h1>
</div>

      

      {/* Diagonal strip */}
      <div className="absolute bottom-[30%] left-0 right-0 h-[70px] md:h-[90px] w-[110%] md:w-[120%] bg-white transform rotate-[45deg] translate-x-[50px] md:translate-x-[290px] -translate-y-[110px] md:-translate-y-[220px] z-0 overflow-hidden flex items-center justify-center">
  <div className="animate-marquee-reverse inline-block whitespace-nowrap text-center">
    <span className="inline-flex items-center space-x-4 md:space-x-6 px-4 md:px-6 text-lg md:text-2xl font-bold uppercase tracking-wide text-black">
      <span>UI/UX</span>
      <span className="text-[#FF6200] text-4xl md:text-5xl mx-2 md:mx-4">•</span>
      <span>Creative Design</span>
      <span className="text-[#FF6200] text-4xl md:text-5xl mx-2 md:mx-4">•</span>
      <span>Marketing</span>
      <span className="text-[#FF6200] text-4xl md:text-5xl mx-2 md:mx-4">•</span>
      <span>Motion</span>
      <span className="text-[#FF6200] text-4xl md:text-5xl mx-2 md:mx-4">•</span>
      <span>Animation</span>
      <span className="text-[#FF6200] text-4xl md:text-5xl mx-2 md:mx-4">•</span>
      <span>Branding</span>
    </span>
  </div>
</div>

{/* Large background "G" */}
<div className="absolute left-1/4 top-1/2 -translate-y-1/2 opacity-5 z-0">
  <span className="text-[30vw] md:text-[40vw] font-bold">g</span>
</div>

{/* Bottom strip */}
<div className="absolute bottom-[40%] md:bottom-[25%] left-0 right-0 h-[70px] md:h-[90px] w-[110%] md:w-[120%] bg-[#222] transform -rotate-[10deg] z-0 overflow-hidden flex items-center">
  <div className="animate-marquee-reverse inline-block whitespace-nowrap w-full text-center">
    <span className="inline-flex items-center h-full space-x-4 md:space-x-6 px-4 md:px-6 text-lg md:text-2xl font-bold uppercase tracking-wide text-white">
      <span>UI/UX</span>
      <span className="text-[#FF6200] text-4xl md:text-5xl mx-2 md:mx-4">•</span>
      <span>Creative Design</span>
      <span className="text-[#FF6200] text-4xl md:text-5xl mx-2 md:mx-4">•</span>
      <span>Marketing</span>
      <span className="text-[#FF6200] text-4xl md:text-5xl mx-2 md:mx-4">•</span>
      <span>Motion</span>
      <span className="text-[#FF6200] text-4xl md:text-5xl mx-2 md:mx-4">•</span>
      <span>Animation</span>
      <span className="text-[#FF6200] text-4xl md:text-5xl mx-2 md:mx-4">•</span>
      <span>Branding</span>
    </span>
  </div>
</div>

    </section>
  )
}
