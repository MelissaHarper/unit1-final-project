import axios from "axios";

const authorization = import.meta.env.VITE_AUTHORIZATION;
const baseUrl = import.meta.env.VITE_BASE_TMDB_API_URL;

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    authorization: authorization,
  },
};

export const api = () =>
  axios.create({
    baseURL: baseUrl,
    headers: {
      accept: "application/json",
      authorization: authorization,
    },
  });
