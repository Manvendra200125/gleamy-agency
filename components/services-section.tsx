"use client"

import { useInView } from "react-intersection-observer"
import Link from "next/link"

interface ServiceCardProps {
  title: string
  delay: number
}

function ServiceCard({ title, delay }: ServiceCardProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="text-xl md:text-2xl font-medium mb-4">{title}.</h3>
      <p className="text-sm leading-relaxed mb-6">
        BRINGING THE HISTORY OF YOUR BRAND TO THE FOREFRONT GIVES AN EMOTIONAL DIMENSION TO YOUR VISUAL IDENTITY, WHICH
        IS ESSENTIAL TODAY MORE THAN EVER IN TODAY'S DIGITAL LANDSCAPE.
      </p>
      <Link
        href="#"
        className="text-[#FF6200] inline-block hover:underline transform transition-transform hover:scale-110"
      >
        Know More
      </Link>
    </div>
  )
}

export default function ServicesSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="min-h-screen pt-24 pb-12 px-8 flex flex-col justify-center relative overflow-hidden">
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 opacity-5 z-0">
        <span className="text-[40vw] font-bold">s</span>
      </div>
      <div className="max-w-6xl mx-auto z-10">
        <h2
          className={`text-2xl md:text-3xl font-medium mb-2 relative inline-block transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          SERVICES
          <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#FF6200]"></span>
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          <ServiceCard title="Brand Identity" delay={0} />
          <ServiceCard title="Technology" delay={300} />
          <ServiceCard title="UX/UI Design" delay={600} />
        </div>
      </div>

      <div className="mt-32 opacity-5 z-10">
        <h2 className="text-[8vw] font-bold tracking-wider">THE CRE8TIVE</h2>
      </div>
    </section>
  )
}

