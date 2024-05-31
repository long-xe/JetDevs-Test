import { NAVIGATION, TABS } from "../constants";
import FavoriteScreen from "../screens/FavoriteScreen";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import HomeStackScreen from "./HomeStack";
import LoginStackScreen from "./LoginStack";

export type IObjectPage = Record<
  string,
  {
    screen: string;
    component: React.ComponentType<any>;
  }
>;

export const getObjSubPage =
  <T extends IObjectPage, U extends keyof T>(obj: T) =>
  (key: U) =>
    obj[key];

const HomeStack = {
  screen: "homeStack",
  component: HomeStackScreen,
  child: {
    home: {
      screen: TABS.home,
      component: HomeScreen,
    },
    favorite: {
      screen: TABS.favorite,
      component: FavoriteScreen,
    },
  },
};

const LoginStack = {
  screen: "loginStack",
  component: LoginStackScreen,
  child: {
    login: {
      screen: NAVIGATION.login,
      component: LoginScreen,
    },
  },
};

export const Router = { HomeStack, LoginStack };
