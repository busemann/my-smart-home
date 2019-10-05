import { createAction, props } from '@ngrx/store';
import { HassioUser } from './hassio-user.models';

export const loadHassioUser = createAction('[HassioUser] Load HassioUser');
export const loadHassioUserSuccess = createAction('[HassioUser] Load HassioUser Success', props<{ hassioUser: HassioUser }>());
export const loadHassioUserFailure = createAction('[HassioUser] Load HassioUser Failure', props<{ error: any }>());
