import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex flex-col">
          <h1 className="text-xl md:text-2xl font-bold text-black">Greicy Santos</h1>
          <p className="text-sm text-gray-600">Modelo | UGC Creator</p>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium transition-colors hover:text-gray-600 ${
                activeSection === item.id ? 'text-black border-b-2 border-black pb-1' : 'text-gray-800'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-black"
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>

        {/* Mobile Navigation */}
        <div className={`fixed inset-0 bg-white z-50 md:hidden transition-all duration-1000 ease-in ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
        }`}>
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-black">Greicy Santos</h1>
              <p className="text-sm text-gray-600">Modelo | UGC Creator</p>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-black"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col space-y-4 p-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left text-lg font-medium transition-colors hover:text-gray-600 ${
                  activeSection === item.id ? 'text-black font-bold' : 'text-gray-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;