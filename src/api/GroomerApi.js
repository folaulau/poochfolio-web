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
    createListings: (groomer) => {

        const options = {
            headers: {
                'Content-Type': 'application/json',
                'token': localStorage.getItem("poochToken")
            }
        };
        return instance.put('/groomers/create-listing', JSON.stringify(groomer), options);
    },
    updateListings: (groomer) => {

        const options = {
            headers: {
                'Content-Type': 'application/json',
                'token': localStorage.getItem("poochToken")
            }
        };
        return instance.put('/groomers/update-listing', JSON.stringify(groomer), options);
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
    },
    uploadProfileImages: (uuid, formdata) => {

        const options = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'token': localStorage.getItem("poochToken")
            }
        };
        return instance.post(`/groomers/${uuid}/profile/images`, formdata, options);
    },
    uploadContracts: (uuid, formdata) => {

        const options = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'token': localStorage.getItem("poochToken")
            }
        };
        return instance.post(`/groomers/${uuid}/contract/documents`, formdata, options);
    },
    acceptBooking: (bookingUuid) => {
        const putBody = {
            uuid: bookingUuid, // booking uuid
            approved: true,
            note: "Accepted",
          };
        const options = {
            headers: {
                'Content-Type': 'application/json',
                'token': localStorage.getItem("poochToken")
            }
        };
        return instance.put(`bookings/groomer/approval`, JSON.stringify(putBody), options);
    },
    cancelBooking: (bookingUuid) => {
        const putBody = {
            uuid: bookingUuid, // booking uuid 
            reason: "Cancelled by groomer",
          };
        const options = {
            headers: {
                'Content-Type': 'application/json',
                'token': localStorage.getItem("poochToken")
            }
        };
        return instance.put(`bookings/cancel`, JSON.stringify(putBody), options);
    },
    checkin: (bookingUuid, groomerUuid) => {
        const putBody = {
            groomerUuid: groomerUuid, // groomer uuid
            uuid: bookingUuid, // booking uuid
          };
        const options = {
            headers: {
                'Content-Type': 'application/json',
                'token': localStorage.getItem("poochToken")
            }
        };
        return instance.put(`bookings/checkin`, JSON.stringify(putBody), options);
    },
    checkout: (bookingUuid, groomerUuid) => {
        const putBody = {
            groomerUuid: groomerUuid, // groomer uuid
            uuid: bookingUuid, // booking uuid
          };
        const options = {
            headers: {
                'Content-Type': 'application/json',
                'token': localStorage.getItem("poochToken")
            }
        };
        return instance.put(`bookings/checkout`, JSON.stringify(putBody), options);
    },
    updateSettings: (bookingUuid, groomerUuid) => {
        const putBody = {
            groomerUuid: groomerUuid, // groomer uuid
            uuid: bookingUuid, // booking uuid
          };
        const options = {
            headers: {
                'Content-Type': 'application/json',
                'token': localStorage.getItem("poochToken")
            }
        };
        return instance.put(`groomers/settings`, JSON.stringify(putBody), options);
    },
}

export default GroomerApi;