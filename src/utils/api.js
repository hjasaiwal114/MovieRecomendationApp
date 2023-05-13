import axios from "axios";

const BASE_URL  = "https://api.themoviedb.org/3"
const TMDB_TOKEN = import.meta.env.VITE_APP_TMBD_TOKEN;

const headers = {
    AUthorization: "bearer" +
    TMDB_TOKEN,
};

export const fetchDATAFromApi = async(url)