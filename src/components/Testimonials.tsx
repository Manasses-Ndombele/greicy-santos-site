import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Maria Silva',
      company: 'Diretora de Marketing - Fashion Brand',
      text: 'Greicy é uma profissional excepcional! Sua dedicação e criatividade transformaram nossa campanha em um verdadeiro sucesso.',
      rating: 5
    },
    {
      name: 'João Santos',
      company: 'CEO - Beauty Company',
      text: 'Trabalhar com a Greicy foi uma experiência incrível. Ela entendeu perfeitamente nossa visão e entregou resultados além das expectativas.',
      rating: 5
    },
    {
      name: 'Ana Costa',
      company: 'Gerente de Produtos - Lifestyle Brand',
      text: 'A Greicy tem um talento natural para criar conteúdo autêntico e envolvente. Recomendo seu trabalho sem hesitação.',
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">Depoimentos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div>
                <h4 className="font-bold text-black">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;