import axios from 'axios';

var instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL + "/v1"
});

var xApiKey = process.env.REACT_APP_X_API_KEY

const FileApi = {
}

export default FileApi;