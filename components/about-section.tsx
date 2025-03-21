"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import Link from "next/link"

export default function AboutSection() {
  const [displayText1, setDisplayText1] = useState("")
  const [displayText2, setDisplayText2] = useState("")
  const [displayText3, setDisplayText3] = useState("")
  const [showContact, setShowContact] = useState(false)

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const text1 = "WE ARE A DIGITAL PRODUCTION TEAM."
  const text2 =
    "GLEAMY IS A LEADING DESIGN & SOFTWARE DEVELOPMENT AGENCY BASED IN BERLIN. WE HELP STARTUPS & FORTUNE 500 COMPANIES"
  const text3 = "DELIGHT HUMANS ON THE OTHER SIDE OF THE SCREEN."

  useEffect(() => {
    if (inView) {
      let index = 0
      const timer = setInterval(() => {
        if (index < text1.length) {
          setDisplayText1(text1.substring(0, index + 1))
        } else if (index < text1.length + text2.length) {
          setDisplayText2(text2.substring(0, index + 1 - text1.length))
        } else if (index < text1.length + text2.length + text3.length) {
          setDisplayText3(text3.substring(0, index + 1 - text1.length - text2.length))
        } else {
          clearInterval(timer)
          setShowContact(true)
        }
        index++
      }, 30)

      return () => clearInterval(timer)
    }
  }, [inView])

  return (
    <section ref={ref} className="min-h-screen pt-24 pb-12 px-8 flex flex-col justify-center relative overflow-hidden">
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 opacity-5 z-0">
        <span className="text-[40vw] font-bold">g</span>
      </div>
      <div className="max-w-4xl mx-auto z-10">
        <h2 className="text-2xl md:text-3xl font-medium mb-2 relative inline-block">
          ABOUT US
          <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#FF6200]"></span>
        </h2>

        <div className="mt-16 space-y-6 text-lg md:text-xl">
          <p>{displayText1}</p>
          <p>{displayText2}</p>
          <p className="text-[#FF6200]">{displayText3}</p>

          {showContact && (
            <div className="mt-8 fade-in">
              <Link href="#contact" className="text-[#FF6200] hover:underline transition-all">
                Contact Us
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

