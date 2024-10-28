import { useState, useEffect } from 'react';

const usePokeFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responses = await Promise.all(
                    Array.from({ length: 151 }, (_, index) =>
                        fetch(`${url}/${index + 1}`).then((res) => res.json())
                    )
                );
                setData(responses);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default usePokeFetch;