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

  const wonderWomanImages = [
    {
      src: 'https://res.cloudinary.com/dt052lsti/image/upload/v1744313572/83a874c8921dd18cb881d3596ff87002_ytb9w7.jpg',
      alt: 'Wonder-Woman 1',
    },
    {
      src: 'https://res.cloudinary.com/dt052lsti/image/upload/v1744313571/3b60b7f0f545972ce842b0d61f1d0253_zm7avy.jpg',
      alt: 'Wonder-Woman 2',
    },
    {
      src: 'https://res.cloudinary.com/dt052lsti/image/upload/v1744313386/a8f6d7fa28ba939fbdb5fa857882ea48_g7uecc.jpg',
      alt: 'Wonder-Woman 3',
    },
    {
      src: 'https://res.cloudinary.com/dt052lsti/image/upload/v1744313385/88783dfd6892d48cb0683d1d7ca235fc_vi6tcm.jpg',
      alt: 'Wonder-Woman 4',
    },
    {
      src: 'https://res.cloudinary.com/dt052lsti/image/upload/v1744313384/86e9edf3af727151f04ff061616c50ff_mmbrcl.jpg',
      alt: 'Wonder-Woman 5',
    },
    {
      src: 'https://res.cloudinary.com/dt052lsti/image/upload/v1744313383/40c21ad7cffaab4da4bad27db51b21fa_jiarud.jpg',
      alt: 'Wonder-Woman 6',
    },
    {
      src: 'https://res.cloudinary.com/dt052lsti/image/upload/v1744313381/2e80f215de9f415ca79f8ee7a9eba534_ku9zdp.jpg',
      alt: 'Wonder-Woman 7',
    },
    {
      src: 'https://res.cloudinary.com/dt052lsti/image/upload/v1744313380/155aeec5ca3ca7b2fd2458080ff61424_mwyvap.jpg',
      alt: 'Wonder-Woman 8',
    },
    {
      src: 'https://res.cloudinary.com/dt052lsti/image/upload/v1744313711/6fd55ee5b39b11f7dc22064a4beb374d_huhxep.jpg',
      alt: 'Wonder-Woman 9',
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
      <div
        className={`transition-all duration-700 ease-out ${
          showGallery ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <GalleryHover title="Wonder-Woman" images={wonderWomanImages} />
      </div>
    </div>
  );
};

export default GalleryPage;
