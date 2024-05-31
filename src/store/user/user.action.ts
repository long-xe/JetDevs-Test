import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserApi } from "../../api/user/user.api";

const prefix = "user";

export const getUserFromApiAction = createAsyncThunk(
  `${prefix}/get`,
  async ({page, results}: {page: number, results: number}) => {
    try {
      const response = await getUserApi(page, results);
      return { data: response.data };
    } catch (err: any) {
      throw new Error(err);
    }
  }
);

export const refreshUserFromApiAction = createAsyncThunk(
  `${prefix}/refresh`,
  async ({page = 0, results = 10}: {page: number, results: number}) => {
    try {
      const response = await getUserApi(page, results);
      return { data: response.data };
    } catch (err: any) {
      throw new Error(err);
    }
  }
);