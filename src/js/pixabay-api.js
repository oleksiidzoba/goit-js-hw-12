import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '54692490-9d55b619ee1b8c5417df4aadc';

export async function getImagesByQuery(query) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return response.data;
}