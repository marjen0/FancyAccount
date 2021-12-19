import {AnyAction} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ASYNC_STORAGE} from '@constants';
import {ACTION} from '@core/constants';

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
      AsyncStorage.multiSet([
        [ASYNC_STORAGE.TOKEN, action.payload.token],
        [ASYNC_STORAGE.REFRESH_TOKEN, action.payload.refreshToken],
      ]);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case ACTION.AUTH.LOGIN_START:
      return {
        ...state,
        isLoading: true,
      };
    case ACTION.AUTH.LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
      };

    case ACTION.AUTH.INIT:
      return {
        ...state,
        ...action.payload,
        isAuthenticated: !!action.payload.token,
      };
    case ACTION.AUTH.LOGOUT:
      AsyncStorage.multiRemove([
        ASYNC_STORAGE.REFRESH_TOKEN,
        ASYNC_STORAGE.TOKEN,
      ]);
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default reducer;
