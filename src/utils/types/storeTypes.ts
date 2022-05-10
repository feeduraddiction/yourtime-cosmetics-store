import { cartPropTypes } from "./componentsTypes";

export interface cartState {
  cart: cartPropTypes[];
}

export interface loginWindowState {
  isLoginWindowActive: boolean;
}

export interface userState {
  user: userPayloadPropTypes;
}

export interface userPayloadPropTypes {
  id: string;
  username: string;
  email: string;
  isAdmin: boolean;
  metadata: {
    cart: cartPropTypes[];
  };
}

export interface searchState {
  isSearchActive: boolean;
  searchInput: string;
}
