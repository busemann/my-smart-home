import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  HASSIOUSER_FEATURE_KEY,
  hassioUserAdapter,
  HassioUserPartialState,
  HassioUserState
} from './hassio-user.reducer';

export const getHassioUserState = createFeatureSelector<
  HassioUserPartialState,
  HassioUserState
>(HASSIOUSER_FEATURE_KEY);

const { selectEntities } = hassioUserAdapter.getSelectors();

export const getHassioUserLoading = createSelector(getHassioUserState, (state: HassioUserState) => state.loading);

export const getHassioUserLoaded = createSelector(getHassioUserState, (state: HassioUserState) => state.loaded);

export const getHassioUserError = createSelector(getHassioUserState, (state: HassioUserState) => state.error);

export const getHassioUser = createSelector(getHassioUserState, (state: HassioUserState) => selectEntities(state));
