const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">Sobre Mim</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-6 text-black">Greicy Santos</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Olá! Sou a Greicy Santos, modelo profissional e UGC Creator apaixonada por criar conteúdo 
                  autêntico e envolvente. Com anos de experiência no mercado, trabalho com marcas de diversos 
                  segmentos, sempre buscando transmitir a essência e os valores de cada projeto.
                </p>
                <p>
                  Minha jornada começou no mundo da moda, mas rapidamente descobri minha paixão por criar 
                  conteúdo que conecta marcas com pessoas reais. Acredito que a autenticidade é a chave 
                  para uma comunicação eficaz e impactante.
                </p>
                <p>
                  Especializo-me em fotografia de moda, conteúdo para redes sociais, campanhas publicitárias 
                  e UGC que converte. Cada projeto é único e recebe minha dedicação total para entregar 
                  resultados excepcionais.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <span className="bg-black text-white px-4 py-2 rounded-full text-sm">Modelo Profissional</span>
                  <span className="bg-black text-white px-4 py-2 rounded-full text-sm">UGC Creator</span>
                  <span className="bg-black text-white px-4 py-2 rounded-full text-sm">Influenciadora</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://res.cloudinary.com/dl2earg2m/image/upload/v1754437173/2000_65d595764dfdc_ykkz4p.jpg"
                alt="Greicy Santos"
                loading="lazy"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;