import axios from "axios";
import { BASE_URL, BASE_URL_GRAPH, X_API_KEY } from "./constant";

export const HTTPS = axios.create({
    baseURL: BASE_URL + '/v1',
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': X_API_KEY
    }
});

export const HTTPS_GRAPH = axios.create({
    baseURL: BASE_URL_GRAPH,
    headers: {
        'Content-Type': 'application/json'
    }
});