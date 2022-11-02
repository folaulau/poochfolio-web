import { SET_BOOKING, SET_DATA_LOADING, SET_GROOMER } from "../../redux/types"
import { handleError } from "../handleError";
import { HTTPS, HTTPS_GRAPH } from "../https"
import { GET_BOOKING } from './queries';


export const getGroomers = (dispatch) => new Promise((resolve, reject) => {
    // dispatch({
    //     type: SET_DATA_LOADING,
    //     payload: true
    // })

    // resolve(true)
})

export const getBookings = (dispatch) => new Promise((resolve, reject) => {
    dispatch({
        type: SET_DATA_LOADING,
        payload: true
    })
    HTTPS_GRAPH.get('/getBookings')
        .then((response) => {
            dispatch({
                type: SET_BOOKING,
                payload: response.data.booking
            })
            dispatch({
                type: SET_DATA_LOADING,
                payload: false
            })
            resolve(response.data.booking);
        })
        .catch((err) => {
            dispatch({
                type: SET_DATA_LOADING,
                payload: false
            })
            reject(handleError(err))
        })
})

export const checkinBooking = (dispatch, data) => new Promise((resolve, reject) => {
    dispatch({
        type: SET_DATA_LOADING,
        payload: true
    })
    HTTPS.put('/bookings/checkin', data)
        .then((response) => {
            dispatch({
                type: SET_DATA_LOADING,
                payload: false
            })
            resolve(response.data);
        })
        .catch((err) => {
            dispatch({
                type: SET_DATA_LOADING,
                payload: false
            })
            reject(handleError(err))
        })
})

export const checkoutBooking = (dispatch, data) => new Promise((resolve, reject) => {
    dispatch({
        type: SET_DATA_LOADING,
        payload: true
    })
    HTTPS.put('/bookings/checkout', data)
        .then((response) => {
            dispatch({
                type: SET_DATA_LOADING,
                payload: false
            })
            resolve(response.data);
        })
        .catch((err) => {
            dispatch({
                type: SET_DATA_LOADING,
                payload: false
            })
            reject(handleError(err))
        })
})

export const acceptBooking = (dispatch, data) => new Promise((resolve, reject) => {
    dispatch({
        type: SET_DATA_LOADING,
        payload: true
    })
    HTTPS.put('/bookings/groomer/approval', data)
        .then((response) => {
            dispatch({
                type: SET_DATA_LOADING,
                payload: false
            })
            resolve(response.data);
        })
        .catch((err) => {
            dispatch({
                type: SET_DATA_LOADING,
                payload: false
            })
            reject(handleError(err))
        })
})

export const linkStripeAccount = (dispatch, data) => new Promise((resolve, reject) => {
    dispatch({
        type: SET_DATA_LOADING,
        payload: true
    })
    HTTPS.get(`/groomers/${data.uuid}/stripe-account-link`)
        .then((response) => {
            dispatch({
                type: SET_DATA_LOADING,
                payload: false
            })
            resolve(response.data);
        })
        .catch((err) => {
            dispatch({
                type: SET_DATA_LOADING,
                payload: false
            })
            reject(handleError(err))
        })
})