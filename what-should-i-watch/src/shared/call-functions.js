import { api } from "./call-structure";

export const getByGenre = async (searchTerms, payload) => {
  const response = await api().get(
    `/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${searchTerms}`,
    {
      payload,
    }
  );
  return response;
};

export const getTrending = async (type, payload) => {
  const response = await api().get(`/trending/all/${type}`, {
    payload,
  });
  return response;
};

export const getNewRelease = async (type, payload) => {
  const response = await api().get(`/${type}/latest`, { payload });
  return response;
};

export const getPopular = async (type, payload) => {
  const response = await api().get(`/${type}/popular`, { payload });
  return response;
};

export const getTopRated = async (type, payload) => {
  const response = await api().get(`/${type}/top_rated`, { payload });
  return response;
};

export const getNowPlaying = async (payload) => {
  const response = await api().get("/movie/now_playing", { payload });
  return response;
};

export const getUpcoming = async (payload) => {
  const response = await api().get("/movie/upcoming", { payload });
  return response;
};

export const getAiringToday = async (payload) => {
  const response = await api().get("/tv/airing_today", { payload });
  return response;
};

export const getOnTheAir = async (payload) => {
  const response = await api().get("/tv/on_the_air", { payload });
  return response;
};

export const getDetail = async (type, id, payload) => {
  const response = await api().get(`/${type}/${id}`, { payload });
  return response;
};

export const getCredits = async (type, id, payload) => {
  const response = await api().get(`/${type}/${id}/credits`, {
    payload,
  });
  return response;
};

export const getTrailers = async (type, id, payload) => {
  const response = await api().get(`/${type}/${id}/videos`, {
    payload,
  });
  return response;
};

export const getReviews = async (type, id, payload) => {
  const response = await api().get(`/${type}/${id}/reviews`, {
    payload,
  });
  return response;
};

export const getRecommendation = async (type, id, payload) => {
  const response = await api().get(`/${type}/${id}/recommendations`, {
    payload,
  });
  return response;
};

export const searchFilm = async (payload) => {
  const response = await api().get(`search/movie`, { payload });
  return response;
};

export const searchTv = async (payload) => {
  const response = await api().get(`search/tv`, { payload });
  return response;
};
