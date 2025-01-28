import PropTypes from 'prop-types';

const CharacterCard = ({ image, name, franchise }) => {
    const hoverShadow =
        franchise === 'dc'
            ? 'hover:shadow-[0_0_15px_5px_rgba(0,112,192,0.5)]'
            : franchise === 'marvel'
            ? 'hover:shadow-[0_0_15px_5px_rgba(237,27,36,0.5)]'
            : '';

    return (
        <div className="flex flex-col items-center p-2 transition-transform transform bg-black rounded-lg shadow-lg hover:scale-105">
            <img
                src={image}
                alt={name}
                className={`object-cover h-64 rounded-lg w-44 lg:w-48 lg:h-72 transition-shadow ${hoverShadow}`}
            />
            <h2 className="mt-4 font-sans text-sm text-center text-white md:text-lg">{name}</h2>
        </div>
    );
};

CharacterCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    franchise: PropTypes.oneOf(['dc', 'marvel']),
};

export default CharacterCard;