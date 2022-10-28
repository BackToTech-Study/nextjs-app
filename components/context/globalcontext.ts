import React from "react";
import { Dispatch, SetStateAction } from "react";

export interface SignInContext {
  showSignIn: boolean;
  setShowSignIn: Dispatch<SetStateAction<boolean>>;
}

export const ShowSignInContext = React.createContext<SignInContext>({
  showSignIn: false,
  setShowSignIn: () => {},
});
