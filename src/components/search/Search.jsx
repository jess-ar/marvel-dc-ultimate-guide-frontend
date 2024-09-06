import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        console.log('Searching for:', query);
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
            >
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </form>
    );
};

export default Search;
