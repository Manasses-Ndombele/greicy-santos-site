const Hero: React.FC = () => {
  return (
    <section 
      id="inicio" 
      className="relative h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: 'url(https://res.cloudinary.com/dl2earg2m/image/upload/v1754437130/2000_65d58b296c30f_yfjxpn.jpg)'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white" 
            style={{ 
              textShadow: '4px 4px 8px rgba(0,0,0,0.8), 2px 2px 4px rgba(0,0,0,0.6)' 
            }}>
          Greicy Santos
        </h1>
      </div>
    </section>
  );
};

export default Hero;