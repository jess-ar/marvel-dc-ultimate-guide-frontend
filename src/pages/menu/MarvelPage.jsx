import { useNavigate } from 'react-router-dom';
import CharacterCard from '@/components/character/CharacterCard';
import TeamCard from '@/components/team/TeamCard';

const MarvelPage = () => {
  const navigate = useNavigate();

  const characters = [
    { image: '/assets/images/characters/marvel/antman.png', name: 'Ant-Man' },
    { image: '/assets/images/characters/marvel/Deadpool.webp', name: 'Deadpool' },
    { image: '/assets/images/characters/marvel/iron-man.png', name: 'Iron Man' },
    { image: '/assets/images/characters/marvel/marvel.png', name: 'Captain Marvel' },
    { image: '/assets/images/characters/marvel/spiderman.png', name: 'Spider-Man' },
    { image: '/assets/images/characters/marvel/strange.png', name: 'Doctor Strange' },
    { image: '/assets/images/characters/marvel/thor2.png', name: 'Thor' },
    { image: '/assets/images/characters/marvel/wanda.png', name: 'Wanda Maximoff' },
    { image: '/assets/images/characters/marvel/widow.png', name: 'Black Widow' },
  ];

  const handleTeamClick = () => {
    navigate('/teams/avengers');
  };

  return (
    <div className="min-h-screen pt-10">
      <div className="flex items-center justify-center gap-3 my-10">
        <img src="/assets/icons/Mlogo.svg" alt="Marvel Logo" className="object-contain w-4 lg:w-6" />
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
            franchise="marvel"
          />
        ))}
      </div>

      <h2 className="mt-8 text-2xl text-center text-white lg:text-4xl font-[Bangers]">Popular Team</h2>
      <div className="flex justify-center" onClick={handleTeamClick}>
        <TeamCard image="/assets/images/teams/avengers.webp" teamName="Avengers" />
      </div>
    </div>
  );
};

export default MarvelPage;
