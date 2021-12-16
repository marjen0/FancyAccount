import {AnyAction} from 'redux';
import {ACTION} from '../constants';

export interface IAuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  token: string | null;
  refreshToken: string | null;
  usernameError: string | null;
  passwordError: string | null;
}

const initialState: IAuthState = {
  isAuthenticated: false,
  isLoading: false,
  token: null,
  refreshToken: null,
  usernameError: null,
  passwordError: null,
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ACTION.AUTH.LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default reducer;
