"use client"

import { useEffect, useState } from "react"
import Logo from "./logo"

export default function PageLoader() {
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    // Create a pulsing effect
    const interval = setInterval(() => {
      setOpacity((prev) => (prev === 1 ? 0.5 : 1))
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="transition-opacity duration-1500" style={{ opacity }}>
        <Logo size="large" />
      </div>
    </div>
  )
}

