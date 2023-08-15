import { createFeatureSelector } from "@ngrx/store";
import { AppRoute } from "../interfaces/app-route";

export const selectNavigation = createFeatureSelector<Readonly<AppRoute>>('navigation');