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
    createUpdateProfile: (groomer) => {

        const options = {
            headers: {
                'Content-Type': 'application/json',
                'token': localStorage.getItem("poochToken")
            }
        };
        return instance.put('/groomers/create-profile', JSON.stringify(groomer), options);
    },
    createUpdateListings: (groomer) => {

        const options = {
            headers: {
                'Content-Type': 'application/json',
                'token': localStorage.getItem("poochToken")
            }
        };
        return instance.put('/groomers/create-listing', JSON.stringify(groomer), options);
    },
    updateProfile: (groomer) => {

        const options = {
            headers: {
                'Content-Type': 'application/json',
                'token': localStorage.getItem("poochToken")
            }
        };
        return instance.put('/groomers/profile', JSON.stringify(groomer), options);
    },
    getServiceTypes: () => {

        const options = {
            headers: {
                'Content-Type': 'application/json',
                'token': localStorage.getItem("poochToken")
            }
        };
        return instance.get('/groomers/service/types', options);
    }
}

export default GroomerApi;