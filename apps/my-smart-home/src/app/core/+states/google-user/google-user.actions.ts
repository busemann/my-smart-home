import { createAction, props } from '@ngrx/store';
import { User } from 'firebase';

export const loadGoogleUser = createAction('[GoogleUser] Load GoogleUser');
export const loadGoogleUserSuccess = createAction(
  '[GoogleUser] Load GoogleUser Success',
  props<{ googleUser: User }>()
);
export const loadGoogleUserFailure = createAction(
  '[GoogleUser] Load GoogleUser Failure',
  props<{ error: any }>()
);
