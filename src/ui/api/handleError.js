export const handleError = (error) => {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("Error data : ", error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);
        if(error.response.data.errors && error.response.data.errors.length > 0) {
            return error.response.data.errors[0].message;
        }
        return error.response.data.message;
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log('Error request: ', error.request);
        return error.message;
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error message: ', error.message);
        if(error?.message.includes('auth/wrong-password')) {
            return 'Wrong password'
        }
        if(error?.message.includes('auth/user-not-found')) {
            return 'User is not exist'
        }
        if(error?.message.includes('auth/popup-closed-by-user')) {
            return 'User cancelled the social login'
        }

        return error.message;
    }
}