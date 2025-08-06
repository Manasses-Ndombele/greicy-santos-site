const PhotoGallery: React.FC = () => {
  const photos = [
    'https://res.cloudinary.com/dl2earg2m/image/upload/v1754437174/2000_6850790a3dc4a_kbmboy.webp',
    'https://res.cloudinary.com/dl2earg2m/image/upload/v1754437179/2000_6850794807fef_emzpz5.webp',
    'https://res.cloudinary.com/dl2earg2m/image/upload/v1754437126/2000_65d58f0485cf2_ote8qa.webp',
    'https://res.cloudinary.com/dl2earg2m/image/upload/v1754437128/2000_65d58f0549de0_e7fcwc.webp',
    'https://res.cloudinary.com/dl2earg2m/image/upload/v1754437123/2000_65d58f05aa1bf_gt3ytr.webp',
    'https://res.cloudinary.com/dl2earg2m/image/upload/v1754437135/2000_65d58f05849fd_wlkjq9.webp',
    'https://res.cloudinary.com/dl2earg2m/image/upload/v1754437139/2000_65d58f0717158_ntsyvz.webp',
    'https://res.cloudinary.com/dl2earg2m/image/upload/v1754437132/2000_65d58f06df378_gjl1py.webp',
    'https://res.cloudinary.com/dl2earg2m/image/upload/v1754437130/2000_65d58b296c30f_yfjxpn.jpg',
    'https://res.cloudinary.com/dl2earg2m/image/upload/v1754437143/2000_65d58f063677e_phcfby.webp',
    'https://res.cloudinary.com/dl2earg2m/image/upload/v1754437134/2000_65d58f1106cc2_etumcl.webp',
    'https://res.cloudinary.com/dl2earg2m/image/upload/v1754437144/2000_65d58f1143021_adqtl7.webp',
    'https://res.cloudinary.com/dl2earg2m/image/upload/v1754437135/2000_65d58f1091440_ci3iib.webp',
    'https://res.cloudinary.com/dl2earg2m/image/upload/v1754437143/2000_6629d7740e2ad_qbu5pa.webp',
    'https://res.cloudinary.com/dl2earg2m/image/upload/v1754437145/2000_65d58f11b5499_mgosej.webp',
    'https://res.cloudinary.com/dl2earg2m/image/upload/v1754437133/2000_65d58f13636f6_zl3r0g.webp',
    'https://res.cloudinary.com/dl2earg2m/image/upload/v1754437132/2000_65d58f12a34d0_fxiian.webp',
    'https://res.cloudinary.com/dl2earg2m/image/upload/v1754437121/800_65d58f139bef6_uvt8a3.webp',
    'https://res.cloudinary.com/dl2earg2m/image/upload/v1754437131/2000_65d58f1401ef9_hekt6m.webp',
    'https://res.cloudinary.com/dl2earg2m/image/upload/v1754437177/2000_68521e127023a_hbadvd.webp',
    'https://res.cloudinary.com/dl2earg2m/image/upload/v1754437172/2000_68521e13d7a70_he88o1.webp',
    'https://res.cloudinary.com/dl2earg2m/image/upload/v1754437170/2000_68521e0b6cb46_ge195h.webp',
    'https://res.cloudinary.com/dl2earg2m/image/upload/v1754437179/2000_68521e1916c59_b71qw9.webp',
    'https://res.cloudinary.com/dl2earg2m/image/upload/v1754437170/2000_68521e144cac7_lmhrwe.webp',
    'https://res.cloudinary.com/dl2earg2m/image/upload/v1754437158/2000_68521e13b4ee6_oitopo.webp'
  ];

  return (
    <section id="fotos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-black">Fotos</h2>
        <div className="w-12 h-1 bg-black mx-auto mb-10"></div>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {photos.map((photo, index) => (
            <div key={index} className="overflow-hidden">
              <img
                src={photo}
                alt={`Greicy Santos foto ${index + 1}`}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-500 ease-in-out hover:scale-110 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;