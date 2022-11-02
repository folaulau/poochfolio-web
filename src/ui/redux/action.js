import { HTTPS } from "../api/https";
import { SET_ACTIVE_GROOMER, SET_AUTH, SET_BAN_GROOMER, SET_GROOMER, SET_NEW_GROOMER, SET_TOKEN, SET_USER } from "./types";

export const setToken = (token) => (dispatch) => {
    localStorage.setItem("token", token);
    dispatch({
        type: SET_TOKEN,
        payload: token
    });
    HTTPS.defaults.headers.common['token'] = token;
};

export const setUser = (data) => (dispatch) => {
    dispatch({
        type: SET_USER,
        payload: data
    })
}

export const setAuth = (data) => (dispatch) => {
    localStorage.setItem("authed", data);
    dispatch({
        type: SET_AUTH,
        payload: data
    })
}

export const setGroomer = (data) => (dispatch) => {
    dispatch({
        type: SET_GROOMER,
        payload: data
    })
}

export const setNewGroomer = (data) => (dispatch) => {
    dispatch({
        type: SET_NEW_GROOMER,
        payload: data
    })
}

export const setActiveGroomer = (data) => (dispatch) => {
    dispatch({
        type: SET_ACTIVE_GROOMER,
        payload: data
    })
}

export const setBanGroomer = (data) => (dispatch) => {
    dispatch({
        type: SET_BAN_GROOMER,
        payload: data
    })
}