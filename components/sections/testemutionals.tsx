import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Especialista em Marketing Digital",
      image: "testemunha1.jpg",
      text: "Em apenas 3 meses consegui meu primeiro cliente como freelancer. Hoje gerencio campanhas para 5 empresas e ganho 3x mais que no meu emprego anterior.",
    },
    {
      name: "Pedro Almeida",
      role: "Analista de Dados",
      image: "/testemunha2.jpg",
      text: "O curso me deu as habilidades práticas que eu precisava. Consegui uma vaga remota em uma startup americana e hoje trabalho de qualquer lugar.",
    },
    {
      name: "Mariana Costa",
      role: "Gestora de Tráfego",
      image: "/testemunha3.jpg",
      text: "Comecei do zero, sem experiência na área. Em 6 meses já estava gerando resultados consistentes e hoje tenho minha própria agência de tráfego pago.",
    },
  ]

  return (
    <section className="py-20 bg-white" id="depoimentos">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
            HISTÓRIAS DE SUCESSO
          </div>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">O que nossos alunos dizem</h2>
          <p className="text-xl text-gray-600">
            Conheça quem já transformou sua vida profissional com nossos treinamentos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-orange-50 rounded-2xl p-8 border border-orange-100 relative">
              <div className="absolute -top-4 -left-4 text-5xl text-orange-300"></div>
              <p className="text-gray-700 mb-6 relative z-10">{testimonial.text}</p>
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image }
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="w-16 h-16 object-cover rounded-full"
                  priority
                />
                {/* <img width={50} height={50} src={testimonial.image} alt={testimonial.name} className="w-16 h-16 object-cover rounded-full " /> */}
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-orange-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

