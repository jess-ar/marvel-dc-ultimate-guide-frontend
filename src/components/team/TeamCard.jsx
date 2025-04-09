import PropTypes from 'prop-types'; 

const TeamCard = ({ image, teamName }) => {
    return (
        <div className="flex flex-col items-center p-4 transition-transform transform bg-black rounded-lg shadow-lg hover:scale-105 ">
            <img src={image} alt={teamName} className="object-cover w-[245px] h-[138px] md:w-[306px] md:h-[173px] lg:w-[368px] lg:h-[207px] rounded-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]" />
            <h2 className="mt-4 text-sm text-white lg:text-lg lg:text-font-bold ">{teamName}</h2>
        </div>
    );
};

TeamCard.propTypes = {
    image: PropTypes.string.isRequired,
    teamName: PropTypes.string.isRequired,
};

export default TeamCard;
