import axios from "axios";

const api = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
  params: {
    api_key: "0e4a505a70b486f6faff49ba2fd6c61d",
    language: "en-US"
  }
});

export const movie = {
  getNowPlaying: () => api.get("movie/nowPlaying"),
  getUpComing: () => api.get("movie/upcoming"),
  getPopular: () => api.get("movie/popular"),
  getMovie: id =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  searchMovies: term =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(term)
      }
    })
};

export const tv = {
  getTopRated: () => api.get("tv/top_rated"),
  getPopular: () => api.get("tv/popular"),
  getAiringToday: () => api.get("tv/airing_today"),
  getShow: id =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  searchShow: term =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(term)
      }
    })
};
