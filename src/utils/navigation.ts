import type { NavigationContainerRef } from "@react-navigation/native";
import React from "react";

type Params = Record<string, any>;

export interface INavigateParams {
    screen: string;
    params?: Params;
    stack?: string;
  }

export const navigationRef = React.createRef<NavigationContainerRef<any>>();

export const navigate = ({ screen, params }: INavigateParams) =>
  navigationRef.current?.navigate(screen, params);