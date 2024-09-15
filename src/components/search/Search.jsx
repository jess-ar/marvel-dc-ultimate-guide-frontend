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
        setQuery(event.target.value);
    };

    const handleSearch = async (event) => {
        event.preventDefault();

        if (!query) return;

        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/characters/search/?search=${query}`);

            if (response.data.length > 0) {
                navigate(`/CharacterDetails`, { state: { character: response.data[0] } });
            } else {
                setError("No characters found.");
            }
        } catch (err) {
            setError(err.response?.data?.message || "An error occurred while searching for characters.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSearch} className="flex items-center justify-center w-full px-1">

            {/* Search Input */}
            <div className="relative w-full max-w-[150px] sm:max-w-[200px] md:max-w-[300px]">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-400">
                    <FontAwesomeIcon icon={faSearch} />
                </span>
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Search character"
                    className="w-full p-1 pl-8 text-xs text-black bg-gray-200 rounded-md focus:outline-none"
                />
            </div>

            {/* Search Button */}
            <button
                type="submit"
                className="ml-2 w-[27px] h-[25.2px] text-white bg-primary rounded-md flex items-center justify-center"
                disabled={loading}
            >
                <FontAwesomeIcon icon={faArrowRight} />
            </button>

            {/* Error Message */}
            {error && <p className="ml-4 text-red-500">{error}</p>}
        </form>
    );
};

export default Search;
