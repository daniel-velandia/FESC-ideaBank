import axios from 'axios';
import { LOGIN_POST_ENDPOINT } from './helpers/endpoints';
import { setAuthenticationToken } from './helpers/token';
import { user } from '../states/userReducer';
import jwt_decode from 'jwt-decode';

export const authentication = (data) => dispatch => {
    return new Promise((resolve, reject) => {

        axios.post(
                LOGIN_POST_ENDPOINT, data,
                { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } }
            ).then(res => {

            const {authorization} = res.headers;

            localStorage.setItem('token', authorization);

            setAuthenticationToken(authorization);

            const decode = jwt_decode(authorization);

            dispatch(user({ user: decode, connected: true }));

            resolve(res);
        }).catch(err => reject(err));
    })
}

export const logout = () => dispatch => {

    localStorage.removeItem('token');

    setAuthenticationToken(false);

    dispatch(user({user: {}, connected: false}));
}