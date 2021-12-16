// @ts-nocheck
import axios, {AxiosError} from 'axios';

import {ACTION} from '../constants';
import {tokenConfig} from './auth';

// ACTION CREATORS

const getUserStart = () => {
  return {
    type: ACTION.USER.GET_USER_START,
  };
};
const getUserFail = () => {
  return {
    type: ACTION.USER.GET_USER_FAIL,
  };
};

// ACTIONS

export const getUser = () => (dispatch, getState) => {
  dispatch(getUserStart());
  // TODO move data fetching to separate file
  axios
    .get('https://vidqjclbhmef.herokuapp.com/user', tokenConfig(getState))
    .then(res => {
      console.log(res);
      dispatch({
        type: ACTION.USER.GET_USER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err: AxiosError) => {
      console.log(err);
      dispatch(getUserFail());
    });
};
