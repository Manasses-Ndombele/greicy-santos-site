const Videos: React.FC = () => {
  const videos = [
    {
      poster: 'https://res.cloudinary.com/dl2earg2m/image/upload/v1754442661/800_6850607ce0788_rx091p.jpg',
      src: 'https://res.cloudinary.com/dl2earg2m/video/upload/v1754442783/normal_685071cee6090_ifopkp.mp4'
    },
    {
      poster: 'https://res.cloudinary.com/dl2earg2m/image/upload/v1754442663/800_686d2eb76fabd_gtxcyr.png',
      src: 'https://res.cloudinary.com/dl2earg2m/video/upload/v1754442783/normal_6860625a82fe8_w4wm4x.mp4'
    },
    {
      poster: 'https://res.cloudinary.com/dl2earg2m/image/upload/v1754442660/800_686d1fc4cfa93-thumbnail_n9eje7.jpg',
      src: 'https://res.cloudinary.com/dl2earg2m/video/upload/v1754442753/normal_686d1fc4cfa93_eg1bsc.mp4'
    },
    {
      poster: 'https://res.cloudinary.com/dl2earg2m/image/upload/v1754442661/800_687bb9a6811bb_vc5bci.jpg',
      src: 'https://res.cloudinary.com/dl2earg2m/video/upload/v1754442783/normal_687bb7787bf13_pd0dkc.mp4'
    }
  ];

  return (
    <section id="videos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-black">Vídeos</h2>
        <div className="w-12 h-1 bg-black mx-auto mb-10"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
          {videos.map((video, index) => (
            <div key={index} className="bg-white shadow-lg overflow-hidden">
              <video
                poster={video.poster}
                controls
                preload="metadata"
                className="w-full h-[35rem] object-cover"
              >
                <source src={video.src} type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Videos;