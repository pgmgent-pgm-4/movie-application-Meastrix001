import React,{ useState, useEffect } from 'react';
const useFetch = (url, page) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false)
      }
    };
    fetchData();
  }, [page]);
  return { data, error, isLoading };
    };

export default useFetch