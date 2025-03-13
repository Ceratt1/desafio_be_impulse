import { ArrowRight } from "lucide-react"
import { Button } from "./ui/buttons/buttonPrincipal"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-600"></div>
              <span className="font-bold text-xl text-white">
                Impulso<span className="text-orange-500">Digital</span>
              </span>
            </div>
            <p className="mb-4">
              Transformando conhecimento em oportunidades reais de crescimento profissional e financeiro.
            </p>
            <div className="flex gap-4">
              {["twitter", "facebook", "instagram", "linkedin"].map((social) => (
                <a key={social} href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5"></div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Cursos</h3>
            <ul className="space-y-2">
              {[
                "Marketing Digital",
                "Análise de Dados",
                "Gestão de Tráfego",
                "Design Gráfico",
                "Desenvolvimento Web",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-orange-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Empresa</h3>
            <ul className="space-y-2">
              {["Sobre nós", "Depoimentos", "Parcerias", "Blog", "Contato"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-orange-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Fique por dentro</h3>
            <p className="mb-4">Receba novidades, promoções e conteúdos exclusivos.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500 w-full"
              />
              <Button className="bg-orange-600 hover:bg-orange-700 rounded-l-none">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 ImpulsoDigital. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-orange-500 transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

