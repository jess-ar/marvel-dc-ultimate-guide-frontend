import PropTypes from 'prop-types'; 

const CharacterCard = ({ image, name }) => {
    return (
        <div className="flex flex-col items-center p-2 bg-black rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-[0_0_15px_5px_rgba(237,27,36,0.5)]">
            <img
                src={image}
                alt={name}
                className="object-cover h-40 rounded-lg w-28 md:w-36 md:h-52 lg:w-44 lg:h-60"
            />
            <h2 className="mt-2 text-sm text-center text-white md:text-lg">{name}</h2>
        </div>
    );
};

CharacterCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default CharacterCard;
