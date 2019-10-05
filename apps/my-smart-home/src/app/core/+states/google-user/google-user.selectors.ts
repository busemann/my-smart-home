import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  GOOGLEUSER_FEATURE_KEY,
  googleUserAdapter,
  GoogleUserPartialState,
  GoogleUserState
} from './google-user.reducer';

export const getGoogleUserState = createFeatureSelector<
  GoogleUserPartialState,
  GoogleUserState
>(GOOGLEUSER_FEATURE_KEY);

const { selectEntities } = googleUserAdapter.getSelectors();

export const getGoogleUserLoaded = createSelector(
  getGoogleUserState,
  (state: GoogleUserState) => state.loaded
);

export const getGoogleUserError = createSelector(
  getGoogleUserState,
  (state: GoogleUserState) => state.error
);

export const getGoogleUser = createSelector(
  getGoogleUserState,
  (state: GoogleUserState) => selectEntities(state)
);
