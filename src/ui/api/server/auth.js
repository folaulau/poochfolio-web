import { SET_AUTH, SET_LOADING, SET_SIGNUP_STEP, SET_TOKEN, SET_USER, SIGN_OUT } from "../../redux/types"
import { FirebaseAPI, FirebaseAuth } from "../firebase"
import { handleError } from "../handleError"
import { HTTPS, HTTPS_GRAPH } from "../https"

export const signin = (dispatch, data) => new Promise(async (resolve, reject) => {
    dispatch({
        type: SET_LOADING,
        payload: true
    })
    try {
        const res = await FirebaseAPI.signinWithEmail(FirebaseAuth, data.email, data.password);
        const access_token = res.user.accessToken;

        HTTPS.post('/groomers/authenticate', JSON.stringify({
            token: access_token,
            rememberMe: true
        })).then((response) => {
            const { token } = response.data;
            const user = {
                ...response.data,
                ...res.user
            };
            HTTPS.defaults.headers.common['token'] = token;
            dispatch({
                type: SET_TOKEN,
                payload: token
            })
            dispatch({
                type: SET_AUTH,
                payload: true
            })
            dispatch({
                type: SET_USER,
                payload: user
            })
            dispatch({
                type: SET_LOADING,
                payload: false
            })
            resolve(user)
        }).catch((err) => {
            dispatch({
                type: SET_LOADING,
                payload: false
            })
            reject(handleError(err))
        })
    } catch (err) {
        dispatch({
            type: SET_LOADING,
            payload: false
        })
        reject(handleError(err))
    }
})

export const signup = (dispatch, data) => new Promise(async (resolve, reject) => {
    dispatch({
        type: SET_LOADING,
        payload: true
    })
    try {
        const res = await FirebaseAPI.signupWithEmail(FirebaseAuth, data.email, data.password);
        const access_token = res.user.accessToken;

        HTTPS.post('/groomers/authenticate', JSON.stringify({
            token: access_token,
            rememberMe: true
        })).then((response) => {
            const { token } = response.data;
            const user = {
                ...response.data,
                ...res.user
            };
            HTTPS.defaults.headers.common['token'] = token;
            dispatch({
                type: SET_TOKEN,
                payload: token
            })
            dispatch({
                type: SET_SIGNUP_STEP,
                payload: 1
            })
            dispatch({
                type: SET_USER,
                payload: user
            })
            dispatch({
                type: SET_LOADING,
                payload: false
            })
            resolve(user)
        }).catch((err) => {
            dispatch({
                type: SET_LOADING,
                payload: false
            })
            reject(handleError(err))
        })
    } catch (err) {
        dispatch({
            type: SET_LOADING,
            payload: false
        })
        reject(handleError(err))
    }
})

export const signinFacebook = (dispatch) => new Promise(async (resolve, reject) => {
    dispatch({
        type: SET_LOADING,
        payload: true
    })
    try {
        const facebookProvider = new FirebaseAPI.providers.facebook();
        facebookProvider.addScope('profile');
        facebookProvider.addScope('email');
        const res = await FirebaseAPI.signinWithFacebook(FirebaseAuth, facebookProvider);
        const access_token = res.user.accessToken;

        HTTPS.post('/groomers/authenticate', JSON.stringify({
            token: access_token,
            rememberMe: true
        })).then((response) => {
            const { token } = response.data;
            const user = {
                ...response.data,
                ...res.user
            };
            HTTPS.defaults.headers.common['token'] = token;
            dispatch({
                type: SET_TOKEN,
                payload: token
            })
            dispatch({
                type: SET_AUTH,
                payload: true
            })
            dispatch({
                type: SET_USER,
                payload: user
            })
            dispatch({
                type: SET_LOADING,
                payload: false
            })
            resolve(user)
        }).catch((err) => {
            dispatch({
                type: SET_LOADING,
                payload: false
            })
            reject(handleError(err))
        })
    } catch (err) {
        dispatch({
            type: SET_LOADING,
            payload: false
        })
        reject(handleError(err))
    }
})

export const signinGoogle = (dispatch) => new Promise(async (resolve, reject) => {
    dispatch({
        type: SET_LOADING,
        payload: true
    })
    try {
        const googleProvider = new FirebaseAPI.providers.google();
        googleProvider.addScope('profile');
        googleProvider.addScope('email');
        const res = await FirebaseAPI.signinWithGoogle(FirebaseAuth, googleProvider);

        const access_token = res.user.accessToken;

        HTTPS.post('/groomers/authenticate', JSON.stringify({
            token: access_token,
            rememberMe: true
        })).then((response) => {
            const { token } = response.data;
            const user = {
                ...response.data,
                ...res.user
            };
            HTTPS.defaults.headers.common['token'] = token;
            dispatch({
                type: SET_TOKEN,
                payload: token
            })
            dispatch({
                type: SET_AUTH,
                payload: true
            })
            dispatch({
                type: SET_USER,
                payload: user
            })
            dispatch({
                type: SET_LOADING,
                payload: false
            })
            resolve(user)
        }).catch((err) => {
            dispatch({
                type: SET_LOADING,
                payload: false
            })
            reject(handleError(err))
        })
    } catch (err) {
        dispatch({
            type: SET_LOADING,
            payload: false
        })
        reject(handleError(err))
    }
})

export const signupFacebook = (dispatch) => new Promise(async (resolve, reject) => {
    dispatch({
        type: SET_LOADING,
        payload: true
    })
    try {
        const facebookProvider = new FirebaseAPI.providers.facebook();
        facebookProvider.addScope('profile');
        facebookProvider.addScope('email');
        const res = await FirebaseAPI.signinWithFacebook(FirebaseAuth, facebookProvider);
        const access_token = res.user.accessToken;

        HTTPS.post('/groomers/authenticate', JSON.stringify({
            token: access_token,
        })).then((response) => {
            const { token } = response.data;
            const user = {
                ...response.data,
                ...res.user
            };
            HTTPS.defaults.headers.common['token'] = token;
            HTTPS_GRAPH.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            dispatch({
                type: SET_TOKEN,
                payload: token
            })
            dispatch({
                type: SET_SIGNUP_STEP,
                payload: 1
            })
            dispatch({
                type: SET_USER,
                payload: user
            })
            dispatch({
                type: SET_LOADING,
                payload: false
            })
            resolve(user)
        }).catch((err) => {
            dispatch({
                type: SET_LOADING,
                payload: false
            })
            reject(handleError(err))
        })
    } catch (err) {
        dispatch({
            type: SET_LOADING,
            payload: false
        })
        reject(handleError(err))
    }
})

export const signupGoogle = (dispatch) => new Promise(async (resolve, reject) => {
    dispatch({
        type: SET_LOADING,
        payload: true
    })
    try {
        const googleProvider = new FirebaseAPI.providers.google();
        googleProvider.addScope('profile');
        googleProvider.addScope('email');
        const res = await FirebaseAPI.signinWithGoogle(FirebaseAuth, googleProvider);

        const access_token = res.user.accessToken;

        HTTPS.post('/groomers/authenticate', JSON.stringify({
            token: access_token
        })).then((response) => {
            const { token } = response.data;
            const user = {
                ...response.data,
                ...res.user
            };
            HTTPS.defaults.headers.common['token'] = token;
            dispatch({
                type: SET_TOKEN,
                payload: token
            })
            dispatch({
                type: SET_SIGNUP_STEP,
                payload: 1
            })
            dispatch({
                type: SET_USER,
                payload: user
            })
            dispatch({
                type: SET_LOADING,
                payload: false
            })
            resolve(user)
        }).catch((err) => {
            dispatch({
                type: SET_LOADING,
                payload: false
            })
            reject(handleError(err))
        })
    } catch (err) {
        dispatch({
            type: SET_LOADING,
            payload: false
        })
        reject(handleError(err))
    }
})

export const createProfile = (dispatch, data) => new Promise((resolve, reject) => {
    dispatch({
        type: SET_LOADING,
        payload: true
    })
    HTTPS.put('/groomers/create-profile', data)
        .then((response) => {
            dispatch({
                type: SET_SIGNUP_STEP,
                payload: 2
            })
            dispatch({
                type: SET_USER,
                payload: response.data
            })
            dispatch({
                type: SET_LOADING,
                payload: false
            })
            resolve(response.data)
        }).catch((err) => {
            dispatch({
                type: SET_LOADING,
                payload: false
            })
            reject(handleError(err))
        })
})

export const createListing = (dispatch, data) => new Promise((resolve, reject) => {
    dispatch({
        type: SET_LOADING,
        payload: true
    })
    HTTPS.put('/groomers/create-listing', data)
        .then((response) => {
            dispatch({
                type: SET_SIGNUP_STEP,
                payload: 3
            })
            dispatch({
                type: SET_USER,
                payload: response.data
            })
            dispatch({
                type: SET_LOADING,
                payload: false
            })
            resolve(response.data)
        }).catch((err) => {
            dispatch({
                type: SET_LOADING,
                payload: false
            })
            reject(handleError(err))
        })
})

export const uploadPhoto = (dispatch, data) => new Promise((resolve, reject) => {
    dispatch({
        type: SET_LOADING,
        payload: true
    })
    HTTPS.post(`/groomers/${data.uuid}/profile/images`, data.images, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    })
        .then((response) => {
            dispatch({
                type: SET_LOADING,
                payload: false
            })
            resolve(response.data)
        }).catch((err) => {
            dispatch({
                type: SET_LOADING,
                payload: false
            })
            reject(handleError(err))
        })
})

export const createAvailability = (dispatch, data) => new Promise((resolve, reject) => {
    dispatch({
        type: SET_LOADING,
        payload: true
    })
    HTTPS.put(`/groomers/availability`, data)
        .then((response) => {
            dispatch({
                type: SET_LOADING,
                payload: false
            })
            dispatch({
                type: SET_AUTH,
                payload: true
            })
            dispatch({
                type: SET_USER,
                payload: response.data
            })
            dispatch({
                type: SET_SIGNUP_STEP,
                payload: 0
            })
            resolve(response.data)
        }).catch((err) => {
            dispatch({
                type: SET_LOADING,
                payload: false
            })
            reject(handleError(err))
        })
})

export const signout = (dispatch) => new Promise((resolve, reject) => {
    dispatch({
        type: SIGN_OUT,
        payload: {}
    })
    resolve(true)
})