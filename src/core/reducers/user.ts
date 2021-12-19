import {AnyAction} from 'redux';

import {ACTION} from '@core/constants';

export interface IUserState {
  isLoading: boolean;
  uuid: string | null;
  image: string | null;
  firstName: string | null;
  lastName: string | null;
  address: string | null;
  phone: string | null;
  error: string | null;
}

const initialState: IUserState = {
  isLoading: false,
  uuid: null,
  image: null,
  firstName: null,
  lastName: null,
  address: null,
  phone: null,
  error: null,
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ACTION.USER.GET_USER_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case ACTION.USER.GET_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: 'failed to fetch user',
      };
    case ACTION.USER.GET_USER_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        error: false,
      };

    default:
      return state;
  }
};

export default reducer;
