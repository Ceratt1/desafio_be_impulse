import { ChevronRight, Users, Clock } from "lucide-react";
import { Button } from "../ui/buttons/buttonPrincipal";
import { Card } from "../ui/cards/cardPrincipal";

export default function Courses() {
  const courses = [
    {
      title: "Especialista em Marketing Digital",
      category: "Marketing",
      price: "R$ 997",
      earnings: "R$ 3.500/mês",
      lessons: 42,
      hours: 28,
      image: "/digitalMarketing.jpg",
      popular: true,
    },
    {
      title: "Analista de Dados para Negócios",
      category: "Tecnologia",
      price: "R$ 1.297",
      earnings: "R$ 4.800/mês",
      lessons: 36,
      hours: 32,
      image: "/dataAnalyst.jpg",
      popular: false,
    },
    {
      title: "Gestor de Tráfego Pago",
      category: "Marketing",
      price: "R$ 897",
      earnings: "R$ 3.200/mês",
      lessons: 30,
      hours: 24,
      image: "/paidTraffic.jpg",
      popular: true,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-orange-50" id="cursos">
      <div className="container mx-auto text-center max-w-3xl mb-16">
        <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-4">
          TREINAMENTOS PREMIUM
        </div>
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Cursos mais procurados</h2>
        <p className="text-xl text-gray-600">
          Treinamentos completos com foco em resultados rápidos e aplicação prática no mercado.
        </p>
      </div>

      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all hover:-translate-y-1 border-orange-100">
            <div className="relative">
              {/* <Image src={course.image} alt={course.title} width={500} height={300} className="w-full h-48 object-cover transition-transform group-hover:scale-105" /> */}
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover transition-transform group-hover:scale-105" />

              {course.popular && (
                <div className="absolute top-4 right-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  MAIS POPULAR
                </div>
              )}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-orange-700 text-xs font-medium px-3 py-1 rounded-full">
                {course.category}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-orange-600 transition-colors">
                {course.title}
              </h3>

              <div className="flex items-center gap-4 mb-4 text-gray-500 text-sm">
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  <span>{course.lessons} aulas</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{course.hours}h total</span>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4 mt-4">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <div className="text-sm text-gray-500">Potencial de ganhos</div>
                    <div className="font-bold text-green-600">{course.earnings}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Investimento</div>
                    <div className="font-bold text-gray-900">{course.price}</div>
                  </div>
                </div>

                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                  Saiba mais
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button variant="outline" className="border-orange-200 text-orange-700 hover:bg-orange-50">
          Ver todos os cursos
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}