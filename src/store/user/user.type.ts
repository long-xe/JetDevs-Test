import type { IUser } from "../../types/user";

export interface IUserState {
  users: IUser[];
  favoriteUser: IUser[];
}
