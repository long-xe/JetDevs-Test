import type { IUser } from "../../types/user";

export interface IGetUserResponse {
  results: IUser[];
  info: IInfo;
}

export interface IInfo {
  seed: string;
  result: number;
  page: number;
  version: string;
}
