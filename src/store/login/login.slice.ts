import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { ILogin } from "../../types/login";
import { loginAccountCheck } from "../../utils/validation";
import { navigate } from "../../utils/navigation";
import { Router } from "../../navigation/routes";
import type { LoginState } from "./login.type";


const initialState: LoginState = {
  value: {
    email: "",
    password: "",
  },
  isValidAccount: true,
};

export const usersReducer = createSlice({
  name: "login",
  initialState,
  reducers: {
    checkLoginState: (state, action: PayloadAction<ILogin>) => {
      if (loginAccountCheck(action.payload.email, action.payload.password)) {
        navigate({ screen: Router.HomeStack.screen });
        state.isValidAccount = true;
      } else {
        state.isValidAccount = false;
      }
    },
  },
});

export const { checkLoginState } = usersReducer.actions;

export const reducer =  usersReducer.reducer;
