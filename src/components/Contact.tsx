const Contact: React.FC = () => {
  return (
    <section 
      id="contato" 
      className="py-20 bg-fixed bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: 'url(https://res.cloudinary.com/dl2earg2m/image/upload/v1754437132/2000_65d58f06df378_gjl1py.webp)'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Vamos Trabalhar Juntos?</h2>
          <p className="text-lg text-white mb-12 max-w-2xl mx-auto">
            Estou sempre aberta a novos projetos e parcerias. Entre em contato comigo para 
            discutirmos como posso ajudar sua marca a alcançar seus objetivos.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Email</h3>
              <a href="mailto:greicysantos.contato@gmail.com" target="_blank" rel="external" className="text-gray-200 hover:underline">greicysantos.contato@gmail.com</a>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Telefone</h3>
              <a href="tel:+5535994800457" target="_blank" rel="external" className="text-gray-200 hover:underline">(35) 99480-0457</a>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Localização</h3>
              <p className="text-gray-200 cursor-pointer hover:underline">Brasil, Minas Gerais</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;