const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@agreicysantos',
      icon: 'https://cdn.simpleicons.org/tiktok/ffffff',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/agreicysantos/',
      icon: 'https://cdn.simpleicons.org/instagram/ffffff',
    },
    {
      name: 'WhatsApp',
      url: 'https://api.whatsapp.com/send?phone=553599480457',
      icon: 'https://cdn.simpleicons.org/whatsapp/ffffff',
    }
  ];

  const navItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'fotos', label: 'Fotos' },
    { id: 'videos', label: 'Vídeos' },
    { id: 'marcas', label: 'Marcas' },
    { id: 'depoimentos', label: 'Depoimentos' },
    { id: 'metricas', label: 'Métricas' },
    { id: 'sobre', label: 'Sobre Mim' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 cursor-pointer">Greicy Santos</h3>
            <p className="text-gray-400 mb-4 cursor-pointer">Modelo | UGC Creator</p>
            <p className="text-gray-400">
              Criando conteúdo autêntico e impactante para marcas que fazem a diferença.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Navegação</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-gray-300 transition-colors"
                  title={link.name}
                >
                  <img src={link.icon} alt="social icon" width={24}  />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Greicy Santos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;