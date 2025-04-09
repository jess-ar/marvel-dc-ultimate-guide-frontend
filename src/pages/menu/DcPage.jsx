import { useNavigate } from 'react-router-dom';
import CharacterCard from '@/components/character/CharacterCard';
import TeamCard from '@/components/team/TeamCard';

const DcPage = () => {
  const navigate = useNavigate();

  const characters = [
    { image: '/assets/images/characters/dc/aquaman.webp', name: 'Aquaman' },
    { image: '/assets/images/characters/dc/black-adam.webp', name: 'Black Adam' },
    { image: '/assets/images/characters/dc/superman.webp', name: 'Superman' },
    { image: '/assets/images/characters/dc/Wonder_Woman.webp', name: 'Wonder Woman' },
    { image: '/assets/images/characters/dc/flash1.png', name: 'The Flash' },
    { image: '/assets/images/characters/dc/shazam.png', name: 'Shazam' },
    { image: '/assets/images/characters/dc/joker.png', name: 'Joker' },
    { image: '/assets/images/characters/dc/the-batman.jpg', name: 'The Batman' },
    { image: '/assets/images/characters/dc/green.png', name: 'Green Lantern' },
  ];

  const handleTeamClick = () => {
    navigate('/teams/justice league');
  };

  return (
    <div className="min-h-screen pt-10 ">

      <div className="flex items-center justify-center gap-3 my-10">
      <img src="/assets/icons/DClogo.svg" alt="DC Logo" className="object-contain w-8 lg:w-10 " />
        <h1 className="text-3xl text-white lg:text-4xl font-[Bangers]">
          Popular Characters
        </h1>
      </div>

      
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {characters.map((character, index) => (
          <CharacterCard
            key={index}
            image={character.image}
            name={character.name}
            franchise="dc"
          />
        ))}
      </div>

      <h2 className="mt-8 text-2xl text-center text-white lg:text-4xl font-[Bangers]">Popular Team</h2>
      <div className="flex justify-center" onClick={handleTeamClick}>
        <TeamCard image="/assets/images/teams/justice-league.png" teamName="Justice League" />
      </div>
    </div>
  );
};

export default DcPage;
