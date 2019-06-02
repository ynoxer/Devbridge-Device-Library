const initialState = {
  isLoggingIn: false,
  isCheckingAuth: true,
  isLoggingOut: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        isLoggingIn: true
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: true,
        loginError: null,
        user: action.user
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        isLoggingIn: false,
        loginError: action.error
      };
    case 'CHECK_AUTH_REQUEST':
      return {
        isCheckingAuth: true
      }
    case 'CHECK_AUTH_SUCCESS':
      return {
        isCheckingAuth: false,
        isLoggedIn: true,
        user: action.user
      }
    case 'CHECK_AUTH_FAIL':
      return {
        isCheckingAuth: false,
        isLoggedIn: false
      }
      case 'LOGOUT_REQUEST':
      return {
        ...state,
        isLoggingOut: true
      };
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        isLoggingIn: false,
        isLoggedIn: false,
        isLogginOut: false,
      };
    default:
        return state;
    }
};
