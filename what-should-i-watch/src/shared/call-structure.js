import axios from "axios";

const api_key = import.meta.env.VITE_API_KEY;
const authorization = import.meta.env.VITE_AUTHORIZATION;
const baseUrl = import.meta.env.VITE_BASE_API_URL;

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: authorization,
    validateStatus: false,
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
