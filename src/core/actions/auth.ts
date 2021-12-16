// @ts-nocheck
import axios, {AxiosError} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ACTION} from '../constants';
import {ASYNC_STORAGE} from '../../constants';

// ACTION CREATORS

const init = (payload: IAuthInitPayload) => {
  return {
    type: ACTION.AUTH.INIT,
    payload,
  };
};

// ACTIONS

export const getAuthTokensFromAsyncStorage = () => dispatch => {
  AsyncStorage.multiGet([
    ASYNC_STORAGE.REFRESH_TOKEN,
    ASYNC_STORAGE.TOKEN,
  ]).then(result => {
    dispatch(
      init({
        refreshToken: result[0][1],
        token: result[1][1],
      }),
    );
  });
};

export const login =
  ({username, password}: {username: string; password: string}) =>
  dispatch => {
    const data = {username, password};
    // TODO move data fetching to separate file
    axios
      .post('https://vidqjclbhmef.herokuapp.com/credentials', data, {
        headers: {
          'Content-type': 'application/json',
        },
      })
      .then(res => {
        console.log(res);
        dispatch({
          type: ACTION.AUTH.LOGIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err: AxiosError) => {
        console.log(err);
      });
  };

export const logout = () => dispatch => {
  dispatch({type: ACTION.AUTH.LOGOUT});
};

export const tokenConfig = getState => {
  const token = getState().auth.token;
  //headers
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };
  // iftoken add to headers
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
};
