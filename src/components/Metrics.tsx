const Metrics: React.FC = () => {
  const metrics = [
    'https://res.cloudinary.com/dl2earg2m/image/upload/v1754437124/800_6892617abc265_oufwzd.webp',
    'https://res.cloudinary.com/dl2earg2m/image/upload/v1754437176/800_6892617512858_iyh0x6.webp',
    'https://res.cloudinary.com/dl2earg2m/image/upload/v1754437123/800_6892616d7b3f2_shfbwx.webp',
    'https://res.cloudinary.com/dl2earg2m/image/upload/v1754437120/800_687bb5a5ec980_nhsadu.webp',
    'https://res.cloudinary.com/dl2earg2m/image/upload/v1754437175/800_68926162bfd1b_bxzpkb.webp'
  ];

  return (
    <section id="metricas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">Métricas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm">
              <img
                src={metric}
                alt={`Métrica ${index + 1}`}
                loading="lazy"
                className="w-full h-auto object-contain transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;