export default function Features() {
    const features = [
      {
        icon: "🚀",
        title: "Início Rápido",
        description: "Comece a aplicar o conhecimento e gerar resultados em semanas, não meses.",
      },
      {
        icon: "💰",
        title: "Retorno Garantido",
        description: "Metodologia focada em habilidades que o mercado realmente paga bem.",
      },
      {
        icon: "🔍",
        title: "Oportunidades Exclusivas",
        description: "Acesso a vagas e projetos disponíveis apenas para nossos alunos.",
      },
      {
        icon: "👨‍👩‍👧‍👦",
        title: "Comunidade Ativa",
        description: "Conecte-se com profissionais e amplie seu networking profissional.",
      },
      {
        icon: "🎓",
        title: "Certificação Reconhecida",
        description: "Certificados valorizados por empresas parceiras em todo o Brasil.",
      },
      {
        icon: "🔄",
        title: "Conteúdo Atualizado",
        description: "Material sempre atualizado com as últimas tendências do mercado.",
      },
    ]
  
    return (
      <section className="py-20 bg-white" id="beneficios">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
              NOSSOS DIFERENCIAIS
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Por que escolher nossa plataforma?</h2>
            <p className="text-xl text-gray-600">
              Combinamos metodologia prática, suporte personalizado e oportunidades reais para garantir seu sucesso no
              mercado digital.
            </p>
          </div>
  
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-orange-50 rounded-2xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 border border-orange-100"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  