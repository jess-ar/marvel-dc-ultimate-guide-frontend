import { useNavigate } from 'react-router-dom';
import CharacterCard from '@/components/character/CharacterCard';
import TeamCard from '@/components/team/TeamCard';
import MarvelLogo from '@/components/logos/LogoMarvel';

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
        <div className="min-h-screen px-4 pt-10 pb-32 bg-background">
            <div className="flex justify-center mb-6">
                <MarvelLogo />
            </div>
            
            <h2 className="mb-4 text-xl text-center text-white font-protest">Popular Marvel Characters</h2>
            <div className="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-6">
                {characters.map((character, index) => (
                    <CharacterCard key={index} image={character.image} name={character.name} />
                ))}
            </div>

            <h2 className="mt-8 mb-4 text-xl text-center text-white font-protest">Popular Team</h2>
            <div className="flex justify-center" onClick={handleTeamClick}>
                <TeamCard image="/assets/images/teams/avengers.webp" teamName="Avengers" />
            </div>
        </div>
    );
};

export default MarvelPage;
