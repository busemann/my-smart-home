import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as GoogleUserActions from './google-user.actions';
import { User } from 'firebase';

export const GOOGLEUSER_FEATURE_KEY = 'googleUser';

export interface GoogleUserState extends EntityState<User> {
  user?: User;
  loading: boolean;
  loaded: boolean;
  error?: string | null;
}

export interface GoogleUserPartialState {
  readonly [GOOGLEUSER_FEATURE_KEY]: GoogleUserState;
}

export const googleUserAdapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: GoogleUserState = googleUserAdapter.getInitialState({
  loading: false,
  loaded: false
});

const googleUserReducer = createReducer(
  initialState,
  on(GoogleUserActions.loadGoogleUser, state => ({
    ...state,
    loading: true,
    loaded: false,
    error: null
  })),
  on(GoogleUserActions.loadGoogleUserSuccess, (state, { googleUser }) =>
    googleUserAdapter.addOne(googleUser, { ...state, loading: false, loaded: true })
  ),
  on(GoogleUserActions.loadGoogleUserFailure, (state, { error }) => ({
    ...state,
    error
  }))
);

export function reducer(state: GoogleUserState | undefined, action: Action) {
  return googleUserReducer(state, action);
}
