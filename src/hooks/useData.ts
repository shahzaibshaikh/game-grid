import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

interface FetchsResponse<T> {
  count: number;
  results: T[];
}

function useData<T>(endpoint: string) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    apiClient
      .get<FetchsResponse<T>>(endpoint)
      .then(res => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  return { data, error, isLoading };
}

export default useData;
