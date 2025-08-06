const Brands: React.FC = () => {
  const brands = [
    {
      image: 'https://res.cloudinary.com/dl2earg2m/image/upload/v1754437121/800_6850607ce0788_idurlo.jpg',
      link: 'https://mittobrasil.com.br/',
      name: 'Mitto Brasil'
    },
    {
      image: 'https://res.cloudinary.com/dl2earg2m/image/upload/v1754437122/800_6850612f12b21_a9zknt.png',
      link: 'https://www.instagram.com/acodorninha/',
      name: 'A Codorninha'
    },
    {
      image: 'https://res.cloudinary.com/dl2earg2m/image/upload/v1754437178/800_filter_nobg_685065af5e3c4_eu1b9c.png',
      link: 'https://nataliachagas.46graus.com/',
      name: 'Natália Chagas'
    },
    {
      image: 'https://res.cloudinary.com/dl2earg2m/image/upload/v1754437120/800_686d325bb73a3_mlqafe.png',
      link: 'https://pantene.com.br/pt-br',
      name: 'Pantene'
    },
    {
      image: 'https://res.cloudinary.com/dl2earg2m/image/upload/v1754437178/800_filter_nobg_686d329c75ff8_uffss1.png',
      link: 'https://www.loreal-paris.com.br/',
      name: "L'Oréal Paris"
    },
    {
      image: 'https://res.cloudinary.com/dl2earg2m/image/upload/v1754437178/800_filter_nobg_687c2d418cca2_ris4q6.png',
      link: 'https://rosaselvagemoficial.com.br/',
      name: 'Rosa Selvagem'
    }
  ];

  return (
    <section id="marcas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">Marcas</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {brands.map((brand, index) => (
            <a
              key={index}
              href={brand.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-sm hover:shadow-md"
            >
              <img
                src={brand.image}
                alt={brand.name}
                loading="lazy"
                className="max-h-16 w-auto object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;