import axios from 'axios';

const baseURL = 'https://api.unsplash.com/';

export const getImeges = async (searchQuery, page) => {
  const response = await axios.get(`${baseURL}/search/photos`, {
    params: {
      query: searchQuery,
      page: page,
    },
    headers: {
      Authorization: 'Client-ID 20u3MxFd7Oz4dgE_1humzz45NAB7QutlFxETmNJhOM4',
    },
  });

  return response.data.results;
};
