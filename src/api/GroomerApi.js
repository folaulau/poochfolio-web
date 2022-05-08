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
    updatePassword: (passwordObj) => {

        const options = {
            headers: {
                'Content-Type': 'application/json',
                'token': localStorage.getItem("token")
            }
        };
        return instance.put('/users/password', JSON.stringify(passwordObj), options);
    }, 
    addNewUser: (data) => {

        const options = {
            headers: {
                'Content-Type': 'application/json',
                'token': localStorage.getItem("token")
            }
        };
        return instance.post('/users/add', JSON.stringify(data), options);
    },   
    removeUser: (uuid) => {

        const options = {
            headers: {
                'Content-Type': 'application/json',
                'token': localStorage.getItem("token")
            }
        };
        return instance.delete('/users/remove?uuid='+uuid, options);
    },
    updateUser: (user) => {

        const options = {
            headers: {
                'Content-Type': 'application/json',
                'token': localStorage.getItem("token")
            }
        };
        return instance.put('/users/student', JSON.stringify(user), options);
    }
}

export default GroomerApi;