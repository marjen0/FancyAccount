// @ts-nocheck
import axios, {AxiosError} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ACTION} from '../constants';
import {ASYNC_STORAGE} from '../../constants';

const init = (payload: IAuthInitPayload) => {
  return {
    type: ACTION.AUTH.INIT,
    payload,
  };
};

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
    console.log('here', username, password);
    const body = {username, password};
    axios
      .post('https://vidqjclbhmef.herokuapp.com/credentials', body, {
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
