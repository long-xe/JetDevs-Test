import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { getUserFromApiAction, refreshUserFromApiAction } from './user.action';
import type { IUserState } from './user.type';
import type { IUser } from '../../types/user';

const initialState: IUserState = {
  users: [],
  favoriteUser: [],
};

export const usersReducer = createSlice({
  name: 'users',
  initialState,
  reducers: {
    toggleFavoriteUser: (state, action: PayloadAction<IUser>) => {
      if (
        state.favoriteUser.some(e => e.login.uuid === action.payload.login.uuid)
      ) {
        const arr = [...state.favoriteUser].filter(
          e => e.login.uuid !== action.payload.login.uuid,
        );
        state.favoriteUser = arr;
      } else {
        state.favoriteUser.push(action.payload);
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(getUserFromApiAction.fulfilled, (state, { payload }) => {
      const userArr = state.users.concat(payload.data.results);
      state.users = userArr;
    });
    builder.addCase(refreshUserFromApiAction.fulfilled, (state, { payload }) => {
      state.users = payload.data.results
    });
  },
});

export const { toggleFavoriteUser } = usersReducer.actions;

export const reducer = usersReducer.reducer;
