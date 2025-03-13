'use client'
import { ArrowRight, Users, Star } from "lucide-react";
import { Button } from "../ui/buttons/buttonPrincipal";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 px-4 sm:px-6 lg:px-8" role="banner">
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-24 -right-24 w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-orange-300/30 blur-2xl"></div>
        <div className="absolute top-1/2 -left-16 w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-orange-400/30 blur-2xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-xs sm:text-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
              </span>
              <span className="font-medium">Transforme sua vida profissional</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold leading-tight text-gray-900">
              Conhecimento que <span className="text-orange-600">transforma</span> em renda real
            </h1>

            <p className="text-lg sm:text-xl text-gray-700">
              Domine habilidades digitais de alta demanda e comece a gerar renda online em questão de semanas, não de anos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-lg shadow-md">
                Iniciar jornada <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-orange-300 text-orange-700 hover:bg-orange-100 px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-lg"
              >
                Ver demonstração
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-orange-200 flex items-center justify-center text-orange-700 font-medium text-sm sm:text-base"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div className="text-gray-700 text-sm sm:text-base">
                <span className="font-bold text-gray-900">+15.000</span> alunos transformaram suas carreiras
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-md overflow-hidden border border-orange-200">

              <Image
                src="/peoplesTogetherLandingPage.jpg"
                alt="pessoas juntas conversando"
                width={500}
                height={500}
                className="w-full h-60 sm:h-full object-cover"
              />
              {/* <img  //infelizmente irei utilizar aqui o img, pois o next/image simplesmente não quer funcionar na minha máquina. Estou a mais de 2 horas tentando resolver isso... :c
                src="/peoplesTogetherLandingPage.jpg"
                className="w-full h-60 sm:h-full object-cover"
                alt="pessoas juntas conversando"
              /> */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6">
                <div className="flex items-center gap-3 text-white pb-10">
                  <div className="bg-orange-500 p-2 rounded-xl">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg">Comunidade ativa</h3>
                    <p className="text-xs sm:text-sm">Aprenda e conecte-se com profissionais</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-md p-3 sm:p-4 border border-orange-200">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="bg-orange-100 p-1 sm:p-2 rounded-lg">
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 text-orange-500" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-gray-600">Avaliação média</div>
                  <div className="font-bold text-sm sm:text-base text-gray-900">4.9/5.0</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-md p-3 sm:p-4 border border-orange-200">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="bg-green-100 p-1 sm:p-2 rounded-lg">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-gray-600">Ganhos médios</div>
                  <div className="font-bold text-sm sm:text-base text-gray-900">R$ 2.500/mês</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
