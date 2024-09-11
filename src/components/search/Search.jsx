import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        console.log('Typing: ', event.target.value); 
        setQuery(event.target.value);
    };

    const handleSearch = async (event) => {
        event.preventDefault();
        console.log('Search initiated with query:', query);  

        if (!query) return;

        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/characters/search/?search=${query}`);
            console.log('Response from backend:', response.data);  

            if (response.data.length > 0) {
                navigate(`/CharacterDetails`, { state: { character: response.data[0] } });
            } else {
                setError("No se encontraron personajes.");
            }
        } catch (err) {
            console.error('Error during search:', err);
            setError(err.response?.data?.message || "Ocurrió un error al buscar personajes.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSearch} className="flex items-center justify-center w-full px-4 mb-10">

            <div className="relative w-full max-w-[200px] sm:max-w-[300px] md:max-w-[400px]">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    <FontAwesomeIcon icon={faSearch} />
                </span>
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}  
                    placeholder="Search character"
                    className="w-full p-2 pl-10 font-sans text-black bg-gray-200 rounded-3xl focus:outline-none"
                />
            </div>

            <button
                type="submit"
                className="ml-3 w-[53px] h-[34px] text-secundary bg-primary rounded-3xl flex items-center justify-center"
                disabled={loading} 
            >
                <FontAwesomeIcon icon={faArrowRight} />
            </button>

            {error && <p className="text-red-500">{error}</p>}
        </form>
    );
};

export default Search;
