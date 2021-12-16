// @ts-nocheck
import axios, {AxiosError} from 'axios';
import {ACTION} from '../constants';

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
