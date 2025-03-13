import Link from "next/link"
import ButtonNavBar from "./ui/buttons/buttonNavBar"

export default function Navbar() {
  return (
    <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-2">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-600"></div>
          <span className="font-bold text-xl text-gray-900">
            Impulse<span className="text-orange-500">Digital</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
            Cursos
          </Link>
          <Link href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
            Benefícios
          </Link>
          <Link href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
            Depoimentos
          </Link>
          <Link href="#" className="text-gray-600 hover:text-orange-500 transition-colors">
            FAQ
          </Link>
        </div>
        <ButtonNavBar >Começar agora</ButtonNavBar>
      </div>
    </nav>
  )
}

