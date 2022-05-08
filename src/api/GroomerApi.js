import axios from 'axios';

var instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL + "/v1"
});

var xApiKey = process.env.REACT_APP_X_API_KEY

const GroomerApi = {

    authenticate: (payload) => {

        const options = {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': xApiKey
            }
        };
        return instance.post('/groomers/authenticate', JSON.stringify(payload), options);
    },
    updateProfile: (groomer) => {

        const options = {
            headers: {
                'Content-Type': 'application/json',
                'token': localStorage.getItem("poochToken")
            }
        };
        return instance.put('/groomers/profile', JSON.stringify(groomer), options);
    }
}

export default GroomerApi;