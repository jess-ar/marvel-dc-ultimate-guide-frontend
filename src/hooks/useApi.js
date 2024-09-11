import { useState, useEffect } from 'react';
import { getCharacters, searchCharacter } from '@/services/api';

const useApi = (endpoint, query = '') => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response;
                if (endpoint === 'characters') {
                    response = await getCharacters();
                } else if (endpoint === 'search') {
                    response = await searchCharacter(query);
                }

                setData(response);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [endpoint, query]);

    return { data, loading, error };
};

export default useApi;
