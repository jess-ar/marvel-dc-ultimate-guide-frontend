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
      <form onSubmit={handleSearch} className="relative w-44 sm:w-48 md:w-52">
        <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs sm:text-sm pointer-events-none">
          <FontAwesomeIcon icon={faSearch} />
        </span>

        <input
          type="search"
          value={query}
          onChange={handleInputChange}
          placeholder="Search character"
          className="w-full pl-8 pr-9 py-1.5 text-xs sm:text-sm text-white placeholder-gray-400 bg-gradient-to-r from-zinc-800 to-zinc-700 rounded-full border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
        />

        <button
          type="submit"
          disabled={loading}
          className="absolute flex items-center justify-center w-6 h-6 text-white transition-transform -translate-y-1/2 rounded-full shadow-md right-1 top-1/2 sm:w-7 sm:h-7 bg-gradient-to-br from-red-600 to-red-800 hover:scale-105 active:scale-95"
        >
          <FontAwesomeIcon icon={faArrowRight} className="text-[10px] sm:text-xs" />
        </button>
      </form>

      {error && <ErrorMessage message={error} onClose={handleCloseError} />}
    </div>
  );
};

export default Search;
