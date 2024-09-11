import PropTypes from 'prop-types'; 

const TeamCard = ({ image, teamName }) => {
    return (
        <div className="flex flex-col items-center p-4 bg-black rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]">
            <img src={image} alt={teamName} className="object-cover w-[245px] h-[138px] rounded-lg" />
            <h2 className="mt-4 font-bold text-center text-white text-md">{teamName}</h2>
        </div>
    );
};

TeamCard.propTypes = {
    image: PropTypes.string.isRequired,
    teamName: PropTypes.string.isRequired,
};

export default TeamCard;
