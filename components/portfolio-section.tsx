"use client"

import { useInView } from "react-intersection-observer"
import Image from "next/image"

interface PortfolioCardProps {
  title: string
  category: string
  image: string
  delay: number
}

function PortfolioCard({ title, category, image, delay }: PortfolioCardProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <div
      ref={ref}
      className={`group transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative overflow-hidden rounded-md transition-all duration-300 group-hover:scale-105 group-hover:border group-hover:border-[#FF6200]">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={300}
          className="w-full h-auto object-cover group-hover:brightness-110"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-medium">{title}</h3>
        <div className="flex items-center mt-1">
          <span className="text-[#FF6200] mr-1">•</span>
          <span className="text-sm text-[#FF6200]">{category}</span>
        </div>
      </div>
    </div>
  )
}

export default function PortfolioSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section ref={ref} className="min-h-screen pt-24 pb-12 px-8 flex flex-col justify-center relative">
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 opacity-5 z-0">
        <span className="text-[40vw] font-bold">p</span>
      </div>
      <div className="max-w-6xl mx-auto z-10">
        <h2
          className={`text-2xl md:text-3xl font-medium mb-2 relative inline-block transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          PORTFOLIO
          <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#FF6200]"></span>
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <PortfolioCard
            title="CREATE SOMETHING HISTORICAL"
            category="Gleamy Portfolio, UI/UX"
            image="/placeholder.svg?height=300&width=400"
            delay={0}
          />
          <PortfolioCard
            title="NFTS DASHBOARD"
            category="UI/UX"
            image="/placeholder.svg?height=300&width=400"
            delay={300}
          />
          <PortfolioCard
            title="PHONIMI"
            category="Gleamy Portfolio"
            image="/placeholder.svg?height=300&width=400"
            delay={600}
          />
        </div>
      </div>

      <div className="mt-32 opacity-5">
        <h2 className="text-[8vw] font-bold tracking-wider">THE CRE8TIVE</h2>
      </div>
    </section>
  )
}

