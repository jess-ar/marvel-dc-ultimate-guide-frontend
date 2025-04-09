/* eslint-disable react/prop-types */
import { useState } from 'react';

const GalleryHover = ({ title, images }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="mb-12">
      <h2 className="mb-4 text-xl text-white sm:text-2xl lg:text-3xl font-[Bangers] text-center">{title}</h2>

      <section className="flex w-full gap-2 px-4 py-2 overflow-x-auto scroll-smooth snap-x snap-mandatory">
        {images.map((img, index) => {
          const isActive = activeIndex === index;

          return (
            <img
              key={index}
              src={img.src}
              alt={img.alt}
              onClick={() => handleClick(index)}
              className={`flex-shrink-0 object-cover rounded-xl transition-all duration-500 ease-in-out snap-start
                w-28 h-44 
                sm:w-32 sm:h-52
                md:w-36 md:h-64 
                lg:w-40 lg:h-80 
                xl:w-44 xl:h-96 
                opacity-80
                cursor-pointer
                ${isActive ? 'w-40 h-44 sm:w-48 sm:h-52 opacity-100 contrast-125' : ''}
                md:hover:w-56 md:hover:h-64 
                lg:hover:w-60 lg:hover:h-80 
                xl:hover:w-72 xl:hover:h-96 
                md:hover:opacity-100 md:hover:contrast-125 md:hover:cursor-crosshair`}
            />
          );
        })}
      </section>
    </div>
  );
};

export default GalleryHover;
