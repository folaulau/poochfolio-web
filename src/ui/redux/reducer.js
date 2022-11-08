import * as types from "./types";
import initialState from "./initialState"

export const authReducer = (state = initialState.auth, action) => {
    switch (action.type) {
        case types.SET_LOADING:
            return {
                ...state,
                loading: action.payload
            };
        case types.SET_AUTH:
            return {
                ...state,
                authed: action.payload
            };
        case types.SET_SIGNUP_STEP:
            return {
                ...state,
                currentStep: action.payload
            };
        case types.SET_USER:
            return {
                ...state,
                user: action.payload
            };
        case types.SET_TOKEN:
            return {
                ...state,
                token: action.payload
            };
        case types.SIGN_OUT:
            return initialState.auth;
        default:
            return state;
    }
}


export const dataReducer = (state = initialState.data, action) => {
    switch (action.type) {
        case types.SET_DATA_LOADING:
            return {
                ...state,
                loading: action.payload
            };
        case types.SET_GROOMER:
            return {
                ...state,
                groomers: action.payload
            };
        case types.SET_BOOKING:
            return {
                ...state,
                bookings: action.payload
            };
        case types.SET_ACTIVE_GROOMER:
            return {
                ...state,
                activeGroomers: action.payload
            };
        case types.SET_BAN_GROOMER:
            return {
                ...state,
                banGroomers: action.payload
            };
        default:
            return state;
    }
}
