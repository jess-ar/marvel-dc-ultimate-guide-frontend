import PropTypes from 'prop-types';

const CharacterCard = ({ image, name }) => {
    return (
        <div className="flex flex-col items-center p-2 transition-transform transform bg-black rounded-lg shadow-lg hover:scale-105">
            <img
                src={image}
                alt={name}
                className="object-cover rounded-lg w-44 h-60 md:w-44 md:h-60 lg:w-44 lg:h-60 hover:shadow-[0_0_15px_5px_rgba(237,27,36,0.5)]"
            />
            <h2 className="mt-4 text-sm text-center text-white md:text-lg">{name}</h2>
        </div>
    );
};

CharacterCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default CharacterCard;
