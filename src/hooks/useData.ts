import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

interface FetchsResponse<T> {
  count: number;
  results: T[];
}

function useData<T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      setIsLoading(true);
      apiClient
        .get<FetchsResponse<T>>(endpoint, { ...requestConfig })
        .then(res => {
          setData(res.data.results);
          setIsLoading(false);
        })
        .catch(error => {
          setError(error.message);
          setIsLoading(false);
        });
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
}

export default useData;
