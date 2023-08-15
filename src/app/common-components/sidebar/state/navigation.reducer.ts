import { createReducer, on } from "@ngrx/store";
import { NavigationActions } from "./navigation.actions";
import { AppRoute } from "../interfaces/app-route";
import { routesConfig } from "../routes-config";

export const initialState: Readonly<AppRoute> = routesConfig[0];

export const navigationReducer = createReducer(
    initialState,
    on(NavigationActions.setPath, (state, { pathId }) => {
        const foundRoute = routesConfig.find(route => route.id === pathId)!;
        return foundRoute;
    })
);