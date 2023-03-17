import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

interface Genre {
  id: number;
  name: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

function useGenres() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    apiClient
      .get<FetchGenresResponse>('/genres')
      .then(res => {
        setGenres(res.data.results);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  return { genres, error, isLoading };
}

export default useGenres;
