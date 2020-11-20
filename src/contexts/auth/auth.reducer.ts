import { getToken } from "@Utils/index";
const isBrowser = typeof window !== "undefined";
export const INITIAL_STATE = {
  isAuthenticated: isBrowser && !!getToken(),
  isLoggedOutFromHeaderMenu: false,
  redirectPage: "",
};

type ActionType =
  | { type: "LOGIN_SUCCESS" }
  | { type: "LOGOUT" }
  | { type: "SET_REDIRECT_PAGE"; payload: string };

type StateType = typeof INITIAL_STATE;

export function authReducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        isLoggedOutFromHeaderMenu: false,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        isLoggedOutFromHeaderMenu: true,
      };
    case "SET_REDIRECT_PAGE":
      return { ...state, redirectPage: action.payload };
    default: {
      return state;
      // throw new Error(`Unsupported action type at App Reducer`);
    }
  }
}
