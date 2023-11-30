import {
    LOGIN_SELL_REQUEST,
    LOGIN_SELL_SUCCESS,
    LOGIN_SELL_FAIL,
    REGISTER_SELL_REQUEST,
    REGISTER_SELL_SUCCESS,
    REGISTER_SELL_FAIL,
    LOAD_SELL_REQUEST,
    LOAD_SELL_SUCCESS,
    LOAD_SELL_FAIL,
    LOGOUT_SELL_SUCCESS,
    LOGOUT_SELL_FAIL,
    CLEAR_ERRORS,
    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAIL,
    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_FAIL,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAIL,
    RESET_PASSWORD_REQUEST,
    UPDATE_SELL_REQUEST,
    UPDATE_SELL_SUCCESS,
    UPDATE_SELL_FAIL,
    DELETE_SELL_REQUEST,
    DELETE_SELL_SUCCESS,
    DELETE_SELL_FAIL,
    SELL_DETAILS_REQUEST,
    SELL_DETAILS_SUCCESS,
    SELL_DETAILS_FAIL,
    ALL_SELL_FAIL,
    ALL_SELL_SUCCESS,
    ALL_SELL_REQUEST,
} from '../constants/sellConstants';
import axios from 'axios';

// Login User
export const loginSell = (email, password) => async (dispatch) => {
    try {

        dispatch({ type: LOGIN_SELL_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        }

        const { data } = await axios.post(
            '/api/v1/login',
            { email, password },
            config
        );

        dispatch({
            type: LOGIN_SELL_SUCCESS,
            payload: data.SELL,
        });

    } catch (error) {
        dispatch({
            type: LOGIN_SELL_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Register User
export const registerSell = (sellData) => async (dispatch) => {
    try {

        dispatch({ type: REGISTER_SELL_REQUEST });

        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }

        const { data } = await axios.post(
            '/api/v1/register',
            sellData,
            config
        );

        dispatch({
            type: REGISTER_SELL_SUCCESS,
            payload: data.sell,
        });

    } catch (error) {
        dispatch({
            type: REGISTER_SELL_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Load User
export const loadSell = () => async (dispatch) => {
    try {

        dispatch({ type: LOAD_SELL_REQUEST });

        const { data } = await axios.get('/api/v1/me');

        dispatch({
            type: LOAD_SELL_SUCCESS,
            payload: data.sell,
        });

    } catch (error) {
        dispatch({
            type: LOAD_SELL_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Logout User
export const logoutSell = () => async (dispatch) => {
    try {
        await axios.get('/api/v1/logout');
        dispatch({ type: LOGOUT_SELL_SUCCESS });
    } catch (error) {
        dispatch({
            type: LOGOUT_SELL_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Update User
export const updateProfile = (sellData) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_PROFILE_REQUEST });

        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }

        const { data } = await axios.put(
            '/api/v1/me/update',
            sellData,
            config
        );

        dispatch({
            type: UPDATE_PROFILE_SUCCESS,
            payload: data.success,
        });

    } catch (error) {
        dispatch({
            type: UPDATE_PROFILE_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Update User Password
export const updatePassword = (passwords) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_PASSWORD_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        }

        const { data } = await axios.put(
            '/api/v1/password/update',
            passwords,
            config
        );

        dispatch({
            type: UPDATE_PASSWORD_SUCCESS,
            payload: data.success,
        });

    } catch (error) {
        dispatch({
            type: UPDATE_PASSWORD_FAIL,
            payload: error.response.data.message,
        });
    }
};


// Forgot Password
export const forgotPassword = (email) => async (dispatch) => {
    try {

        dispatch({ type: FORGOT_PASSWORD_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        }

        const { data } = await axios.post(
            '/api/v1/password/forgot',
            email,
            config
        );

        dispatch({
            type: FORGOT_PASSWORD_SUCCESS,
            payload: data.message,
        });

    } catch (error) {
        dispatch({
            type: FORGOT_PASSWORD_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Reset Password
export const resetPassword = (token, passwords) => async (dispatch) => {
    try {

        dispatch({ type: RESET_PASSWORD_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        }

        const { data } = await axios.put(
            `/api/v1/password/reset/${token}`,
            passwords,
            config
        );

        dispatch({
            type: RESET_PASSWORD_SUCCESS,
            payload: data.success,
        });

    } catch (error) {
        dispatch({
            type: RESET_PASSWORD_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Get All Users ---ADMIN
export const getAllSell = () => async (dispatch) => {
    try {

        dispatch({ type: ALL_SELL_REQUEST });
        const { data } = await axios.get('/api/v1/admin/sell');
        dispatch({
            type: ALL_SELL_SUCCESS,
            payload: data.sell,
        });

    } catch (error) {
        dispatch({
            type: ALL_SELL_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Get User Details ---ADMIN
export const getSellDetails = (id) => async (dispatch) => {
    try {

        dispatch({ type: SELL_DETAILS_REQUEST });
        const { data } = await axios.get(`/api/v1/admin/sell/${id}`);

        dispatch({
            type: SELL_DETAILS_SUCCESS,
            payload: data.sell,
        });

    } catch (error) {
        dispatch({
            type: SELL_DETAILS_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Update User Details ---ADMIN
export const updateSell = (id, sellData) => async (dispatch) => {
    try {

        dispatch({ type: UPDATE_SELL_REQUEST });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        }

        const { data } = await axios.put(
            `/api/v1/admin/sell/${id}`,
            sellData,
            config
        );

        dispatch({
            type: UPDATE_SELL_SUCCESS,
            payload: data.success,
        });

    } catch (error) {
        dispatch({
            type: UPDATE_SELL_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Delete User ---ADMIN
export const deleteSell = (id) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_SELL_REQUEST });
        const { data } = await axios.delete(`/api/v1/admin/sell/${id}`);

        dispatch({
            type: DELETE_SELL_SUCCESS,
            payload: data.success,
        });

    } catch (error) {
        dispatch({
            type: DELETE_SELL_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Clear All Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};