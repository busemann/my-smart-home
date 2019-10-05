import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as HassioUserActions from './hassio-user.actions';
import { HassioUser } from './hassio-user.models';

export const HASSIOUSER_FEATURE_KEY = 'hassioUser';

export interface HassioUserState extends EntityState<HassioUser> {
  hassioUser?: HassioUser;
  loading: boolean;
  loaded: boolean;
  error?: string | null;
}

export interface HassioUserPartialState {
  readonly [HASSIOUSER_FEATURE_KEY]: HassioUserState;
}

export const hassioUserAdapter: EntityAdapter<HassioUser> = createEntityAdapter<HassioUser>();

export const initialState: HassioUserState = hassioUserAdapter.getInitialState({
  loading: false,
  loaded: false
});

const hassioUserReducer = createReducer(
  initialState,
  on(HassioUserActions.loadHassioUser, state => ({
    ...state,
    loading: true,
    loaded: false,
    error: null
  })),
  on(HassioUserActions.loadHassioUserSuccess, (state, { hassioUser }) =>
    hassioUserAdapter.addOne(hassioUser, { ...state, loading: false, loaded: true })
  ),
  on(HassioUserActions.loadHassioUserFailure, (state, { error }) => ({
    ...state,
    error
  }))
);

export function reducer(state: HassioUserState | undefined, action: Action) {
  return hassioUserReducer(state, action);
}
