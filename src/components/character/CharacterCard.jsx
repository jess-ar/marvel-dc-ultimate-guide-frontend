import PropTypes from 'prop-types';

const CharacterCard = ({ image, name, franchise }) => {
  // Colores personalizados según franquicia
  const glowFrom = franchise === 'dc' ? 'from-blue-500' : franchise === 'marvel' ? 'from-red-600' : 'from-purple-500';
  const glowTo = franchise === 'dc' ? 'to-cyan-400' : franchise === 'marvel' ? 'to-pink-500' : 'to-indigo-400';

  return (
    <div className="flex flex-col items-center p-2">
      {/* Imagen con glow + tilt */}
      <div className="relative p-[2px] rounded-xl group transition-transform duration-500 ease-in-out hover:-rotate-1 hover:scale-105">
        {/* Glow detrás de la imagen (solo visible en hover) */}
        <div
          className={`absolute inset-0 rounded-xl bg-gradient-to-br ${glowFrom} ${glowTo} blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
        ></div>

        {/* Imagen principal */}
        <img
          src={image}
          alt={name}
          className="relative z-10 object-cover h-64 w-44 lg:w-48 lg:h-72 rounded-xl"
        />
      </div>

      {/* Texto sin efecto */}
      <h2 className="mt-4 font-sans text-sm text-center text-white md:text-lg">
        {name}
      </h2>
    </div>
  );
};

CharacterCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  franchise: PropTypes.oneOf(['dc', 'marvel']),
};

export default CharacterCard;
