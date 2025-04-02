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

    <div className="min-h-screen px-4 pt-10 pb-1 bg-background text-secondary md:px-12">
      {/* Flecha */}
      <div className="max-w-5xl pt-6 mx-auto mb-1">
        <ArrowBack onClick={handleBack} />
      </div>

      {/* Layout principal */}
      <div className="flex flex-col items-center max-w-5xl gap-8 mx-auto md:gap-6 lg:gap-12 md:flex-row md:items-start">
        {/* Imagen + info básica */}
        <div className="flex flex-col items-center w-full text-center md:items-start md:text-left md:max-w-xs">
          <img
            src={character.image_url}
            alt={character.name}
            className="rounded-lg mb-4 w-[300px] h-[400px] object-cover shadow-xl"
          />
          <h1 className="text-4xl font-bold text-white">{character.name}</h1>
          <p className="text-lg text-gray-400">{character.full_name || "Full name not available"}</p>

          <button className="px-4 py-2 mt-6 text-sm font-semibold text-red-500 transition border border-red-500 rounded hover:bg-red-500 hover:text-white">
            + Add to favourite
          </button>
        </div>

        {/* Detalles */}
        <div className="w-full md:flex-1">
          <h2 className="mb-2 text-2xl font-semibold text-red-500">Character Details</h2>
          <hr className="mb-6 border-red-500" />

          <div className="space-y-2 text-white">
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

  );
};

export default CharacterDetails;
