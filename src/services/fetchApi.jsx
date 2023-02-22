import axios from 'axios';

const MAIN_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'e6eac04b3db1d8bf65626de9a2b0d930';

const fetchTrending = async page => {
  const response = await axios.get(
    `${MAIN_URL}/trending/all/day?api_key=${API_KEY}&page=${page}`
  );
  return response.data;
};
const fetchMovies = async (query, page) => {
  const response = await axios.get(
    `${MAIN_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}&include_adult=false`
  );
  return response.data;
};
const fetchMovieById = async id => {
  const response = await axios.get(
    `${MAIN_URL}/movie/${id}?api_key=${API_KEY}`
  );
  return response.data;
};

const fetchCastById = async id => {
  const response = await axios.get(
    `${MAIN_URL}/movie/${id}/credits?api_key=${API_KEY}`
  );
  return response.data;
};

const fetchReviewsById = async id => {
  const response = await axios.get(
    `${MAIN_URL}/movie/${id}/reviews?api_key=${API_KEY}`
  );
  return response.data;
};
export {
  fetchTrending,
  fetchMovieById,
  fetchCastById,
  fetchReviewsById,
  fetchMovies,
};
