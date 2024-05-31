import type { ILogin } from "../../types/login";

export interface LoginState {
    value: ILogin;
    isValidAccount: boolean;
  }
  