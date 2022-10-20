import axios from 'axios';

const PER_PAGE = 20;

const createOptions = options => {
  const keys = Object.keys(options);

  const parameters = `?` + keys.map(key => `${key}=${options[key]}`).join('&');

  return parameters;
};

export const getImages = (query, page = 1) => {
  const options = {
    key: '30745255-b909a2241bf9ab8444da42817',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: page,
    per_page: PER_PAGE,
  };

  const BASE_URL = `https://pixabay.com/api/`;

  return axios.get(BASE_URL + createOptions(options));
};