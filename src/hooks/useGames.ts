import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

export interface Games {
  id: number;
  name: string;
  background_image: string;
}

interface FetchGamesResponse {
  count: number;
  results: Games[];
}

function useGames() {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>('/games')
      .then(res => setGames(res.data.results))
      .catch(error => {
        setError(error.message);
      });
  }, []);

  return { games, error };
}
export default useGames;
