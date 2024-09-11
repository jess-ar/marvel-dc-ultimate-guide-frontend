import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ArrowBack from '@/components/arrow/ArrowBack';

const CharacterDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const character = location.state?.character;

    const handleBack = () => {
        navigate(-1);
    };

    if (!character) {
        return <div>No character information available.</div>;
    }

    return (
        <div className="flex flex-col h-screen">
            <div className="flex-grow p-4 pb-32 overflow-y-auto bg-background text-secondary">
                <div className="mb-4">
                    <ArrowBack onClick={handleBack} />
                </div>

                <div className="flex flex-col items-center">
                    <img src={character.image_url} alt={character.name} className="rounded-lg mb-4 w-[300px] h-[400px] object-cover" />
                    
                    <h1 className="mb-2 text-4xl font-bold text-center text-white">{character.name}</h1>
                    
                    <p className="mb-6 text-lg text-gray-400">
                        {character.full_name || "Full name not available"}
                    </p>

                    <div className="w-full pr-4 mb-8 text-right">
                        <button className="px-3 py-1 text-sm font-semibold text-red-500 border border-red-500 rounded hover:bg-red-500 hover:text-white">
                            + Add to favourite
                        </button>
                    </div>

                    <div className="max-w-lg text-white">
                        <div className="mb-4">
                            <h2 className="mb-2 text-2xl font-semibold text-red-500">Character Details</h2>
                            <hr className="border-red-500" />
                        </div>

                        <div className="space-y-4">
                            <p><strong>Full name:</strong> {character.full_name || "Not available"}</p>
                            <p><strong>First appearance:</strong> {character.first_appearance || "Not available"}</p>
                            <p><strong>Publisher:</strong> {character.publisher || "Not available"}</p>
                            <p><strong>Gender:</strong> {character.gender || "Not available"}</p>
                            <p><strong>Occupation:</strong> {character.occupation || "Not available"}</p>
                            <p><strong>Group affiliation:</strong> {character.group_affiliation || "Not available"}</p>
                            <p><strong>Relatives:</strong> {character.relatives || "Not available"}</p>
                            <p><strong>Universe:</strong> {character.universe || "Not available"}</p>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="fixed bottom-0 w-full p-4 bg-navbar"></nav>
        </div>
    );
};

export default CharacterDetails;
