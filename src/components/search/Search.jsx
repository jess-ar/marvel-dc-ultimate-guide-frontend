import { useState } from 'react';

const Search = () => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        console.log('Searching for:', query);
        // Aquí es donde se llamará a la API para buscar el personaje
    };

    return (
        <form onSubmit={handleSearch} className="flex items-center mb-10">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search character"
                className="p-2 text-black rounded-full"
            />
            <button type="submit" className="p-2 ml-2 text-white bg-red-500 rounded-full">
                Search
            </button>
        </form>
    );
};

export default Search;