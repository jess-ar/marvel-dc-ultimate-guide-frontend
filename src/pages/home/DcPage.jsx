import CharacterCard from '@/components/character/CharacterCard';
import TeamCard from '@/components/team/TeamCard';
import DcLogo from '@/components/logos/LogoDc';

const DcPage = () => {
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

    return (
        <div className="min-h-screen px-4 pt-10 pb-32 bg-background">
            <div className="flex justify-center mb-6">
                <DcLogo />
            </div>
            
            <h1 className="mb-4 text-xl text-center text-white font-protest">Popular DC Characters</h1>
            <div className="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-6">
                {characters.map((character, index) => (
                    <CharacterCard key={index} image={character.image} name={character.name} />
                ))}
            </div>

            <h2 className="mt-8 mb-4 text-xl text-center text-white font-protest">Popular Team</h2>
            <div className="flex justify-center">
                <TeamCard image="/assets/images/teams/justice-league.png" teamName="Justice League" />
            </div>
        </div>
    );
};

export default DcPage;
