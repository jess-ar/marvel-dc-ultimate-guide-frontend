import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import apiClient from '@/services/apiClient';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '@/components/error/ErrorMessage';

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
            const response = await apiClient.get(`/characters/search/?search=${query}`);

            if (response.data.length > 0) {
                navigate(`/character-details`, { state: { character: response.data[0] } });
            } else {
                setError('No characters found.');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred while searching for characters.');
        } finally {
            setLoading(false);
            setQuery('');
        }
    };

    const handleCloseError = () => {
        setError(null);
    };

    return (
        <div className="relative flex items-center">
            <form
                onSubmit={handleSearch}
                className="flex items-center space-x-2"
            >
                <div className="relative w-36 lg:w-48">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-400">
                        <FontAwesomeIcon icon={faSearch} />
                    </span>
                    <input
                        type="text"
                        value={query}
                        onChange={handleInputChange}
                        placeholder="Search character"
                        className="w-full px-3 py-1 pl-8 text-xs text-black bg-gray-200 rounded-md focus:outline-none"
                    />
                </div>

                <button
                    type="submit"
                    className="flex items-center justify-center w-8 h-6 text-white rounded-md bg-primary"
                    disabled={loading}
                >
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </form>

            {error && <ErrorMessage message={error} onClose={handleCloseError} />}
        </div>
    );
};

export default Search;
