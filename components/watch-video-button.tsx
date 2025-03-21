"use client"

import { Play } from "lucide-react"
import { useState, useEffect } from "react"

export default function WatchVideoButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className={`fixed bottom-8 right-8 z-40 transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <button className="group flex flex-col items-center">
        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-2 transition-transform group-hover:scale-110">
          <Play className="w-6 h-6 text-black fill-[#FF6200]" />
        </div>
        <span className="text-xs tracking-wider">WATCH OUR VIDEO</span>
      </button>
    </div>
  )
}

