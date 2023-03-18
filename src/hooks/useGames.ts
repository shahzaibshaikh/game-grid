import { useEffect, useState } from 'react';
import { GameQuery } from '../App';
import apiClient from '../services/api-client';
import useData from './useData';
import { Genre } from './useGenres';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

function useGames(gameQuery: GameQuery) {
  return useData<Games>(
    '/games',
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder
      }
    },
    [gameQuery.genre?.id, gameQuery.platform?.id, gameQuery.sortOrder]
  );
}
export default useGames;
