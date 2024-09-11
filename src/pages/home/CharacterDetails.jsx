import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

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
            <div className="flex-grow p-4 overflow-y-auto bg-background text-secondary">
                <button onClick={handleBack} className="mb-4 text-primary">
                    <FontAwesomeIcon icon={faArrowLeft} size="lg" />
                </button>
        
                <div className="flex flex-col items-center">
                    <img src={character.image_url} alt={character.name} className="rounded-lg mb-4 w-[300px] h-[400px] object-cover" />
                    <h1 className="mb-4 text-3xl font-bold">{character.name}</h1>
        
                    <button className="mb-6 text-lg text-primary">
                        + Add to favourite
                    </button>
        
                    <p className="max-w-lg mb-4 text-center text-white">
                        {character.full_name || "Full name not available."}
                    </p>
        
                    <h2 className="mb-2 text-xl font-bold text-red-500">Full Biography</h2>
                    <p className="max-w-lg text-left text-white">
                        <strong>First appearance:</strong> {character.first_appearance || "Not available."} <br />
                        <strong>Publisher:</strong> {character.publisher || "Not available."} <br />
                        <strong>Occupation:</strong> {character.occupation || "Not available."} <br />
                        <strong>Group affiliation:</strong> {character.group_affiliation || "Not available."}
                    </p>
                </div>
            </div>

            <nav className="fixed bottom-0 w-full p-4 bg-navbar">
            </nav>
        </div>
    );
};

export default CharacterDetails;
