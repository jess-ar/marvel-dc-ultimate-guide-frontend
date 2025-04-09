import { useEffect, useState } from 'react';
import GalleryHover from '@/components/gallery/GalleryHover';

const GalleryPage = () => {
  const [showGallery, setShowGallery] = useState(false);

  const spiderManImages = [
    {
      src: 'https://res.cloudinary.com/dt052lsti/image/upload/w_300,q_auto,f_auto/v1744229591/e6f2be6ddf42dd2effb0c388bce50bec_uq5r0g.jpg',
      alt: 'Spider-Man 1',
    },
    {
      src: 'https://res.cloudinary.com/dt052lsti/image/upload/v1744229591/c4191329666e8039723f372acbd12720_jdhhhl.jpg',
      alt: 'Spider-Man 2',
    },
    {
      src: 'https://res.cloudinary.com/dt052lsti/image/upload/v1744229591/df53cf39e043b53076137d6c076473d4_obcce5.jpg',
      alt: 'Spider-Man 3',
    },
    {
      src: 'https://res.cloudinary.com/dt052lsti/image/upload/v1744229590/b25438c7f677d7a4d07d4339692d985a_sw1g0t.jpg',
      alt: 'Spider-Man 4',
    },
    {
      src: 'https://res.cloudinary.com/dt052lsti/image/upload/v1744229590/96125e501affad03138e467fdfb469a7_rhmcea.jpg',
      alt: 'Spider-Man 5',
    },
    {
      src: 'https://res.cloudinary.com/dt052lsti/image/upload/v1744229590/a12eee3a8d824d93298f2faf0aa45e33_hwevi1.jpg',
      alt: 'Spider-Man 6',
    },
    {
      src: 'https://res.cloudinary.com/dt052lsti/image/upload/v1744229589/6464d1365e8904f5e6b1a0e11e4d355f_svlego.jpg',
      alt: 'Spider-Man 7',
    },
    {
      src: 'https://res.cloudinary.com/dt052lsti/image/upload/v1744229589/00cfcfe8e8320e9c4e8f1b6d16778359_nsujtm.jpg',
      alt: 'Spider-Man 8',
    },
    {
      src: 'https://res.cloudinary.com/dt052lsti/image/upload/v1744229589/0b8416c00720f40b3189e72b6e1f2c02_z59vf9.jpg',
      alt: 'Spider-Man 9',
    },
  ];

  useEffect(() => {
    const timeout = setTimeout(() => setShowGallery(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen px-4 py-20 bg-black">
      <h1 className="mb-6 text-3xl text-center text-white font-[Bangers] lg:text-5xl">
        Interactive Gallery
      </h1>

      <div
        className={`transition-all duration-700 ease-out ${
          showGallery ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <GalleryHover title="Spider-Man" images={spiderManImages} />
      </div>
    </div>
  );
};

export default GalleryPage;
