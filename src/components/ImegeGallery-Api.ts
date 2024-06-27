import axios from 'axios';
import { ApiResponse } from '../types';

const baseURL = 'https://api.unsplash.com/';

export const getImages = async (
  searchQuery: string,
  page: number
): Promise<ApiResponse> => {
  const response = await axios.get<ApiResponse>(`${baseURL}/search/photos`, {
    params: {
      query: searchQuery,
      page: page,
    },
    headers: {
      Authorization: 'Client-ID 20u3MxFd7Oz4dgE_1humzz45NAB7QutlFxETmNJhOM4',
    },
  });

  return response.data;
};
