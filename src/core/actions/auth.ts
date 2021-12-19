// @ts-nocheck
import axios, {AxiosError} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ASYNC_STORAGE} from '@constants';
import {ACTION} from '@core/constants';

// ACTION CREATORS

const init = (payload: IAuthInitPayload) => {
  return {
    type: ACTION.AUTH.INIT,
    payload,
  };
};

const loginStart = () => ({
  type: ACTION.AUTH.LOGIN_START,
});

const loginFail = () => ({
  type: ACTION.AUTH.LOGIN_FAIL,
});

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
    dispatch(loginStart());
    const data = {username, password};
    // TODO move data fetching to separate file
    axios
      .post('https://vidqjclbhmef.herokuapp.com/credentials', data, {
        headers: {
          'Content-type': 'application/json',
        },
      })
      .then(res => {
        dispatch({
          type: ACTION.AUTH.LOGIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err: AxiosError) => {
        dispatch(loginFail());
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
