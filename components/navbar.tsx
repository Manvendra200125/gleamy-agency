import { Search, Menu } from "lucide-react"
import Logo from "./logo"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 py-4">
      <div className="flex items-center space-x-4">
        <Link href="#" className="text-xs hover:text-[#FF6200] transition-colors">
          FB
        </Link>
        <span className="text-3xl text-[#FF6200]">•</span>
        <Link href="#" className="text-xs hover:text-[#FF6200] transition-colors">
          IN
        </Link>
        <span className="text-3xl text-[#FF6200]">•</span>
        <Link href="#" className="text-xs hover:text-[#FF6200] transition-colors">
          DR
        </Link>
        <span className="text-3xl text-[#FF6200]">•</span>
        <Link href="#" className="text-xs hover:text-[#FF6200] transition-colors">
          BE
        </Link>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2">
        <Logo />
      </div>

      <div className="flex items-center space-x-6">
        <button aria-label="Search">
          <Search className="w-5 h-5" />
        </button>
        <button className="flex items-center space-x-2" aria-label="Menu">
          <span className="text-sm">MENU</span>
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </nav>
  )
}

