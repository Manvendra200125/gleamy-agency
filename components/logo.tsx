interface LogoProps {
  size?: "small" | "medium" | "large"
}

export default function Logo({ size = "medium" }: LogoProps) {
  const sizeClasses = {
    small: "text-xl",
    medium: "text-3xl",
    large: "text-5xl",
  }

  return (
    <div className="relative inline-block">
      <span className={`font-light ${sizeClasses[size]}`}>gleamy</span>
      <span className="absolute top-0 left-[8%] w-2 h-2 bg-[#FF6200] rounded-full" />
    </div>
  )
}

