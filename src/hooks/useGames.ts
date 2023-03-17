import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

interface Games {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Games[];
}

function useGames() {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>('/games', { signal: controller.signal })
      .then(res => setGames(res.data.results))
      .catch(error => {
        if (error instanceof RTCError) return;
        setError(error.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
}
export default useGames;
