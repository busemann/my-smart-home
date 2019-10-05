import { Injectable } from '@angular/core';
import { createEffect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { GoogleUserPartialState } from './google-user.reducer';
import * as GoogleUserActions from './google-user.actions';

@Injectable()
export class GoogleUserEffects {
  loadGoogleUser$ = createEffect(() =>
    this.dataPersistence.fetch(GoogleUserActions.loadGoogleUser, {
      run: (action: ReturnType<typeof GoogleUserActions.loadGoogleUser>, state: GoogleUserPartialState) => {
        return null;
        // return GoogleUserActions.loadGoogleUserSuccess({ googleUser: [] });
      },

      onError: (action: ReturnType<typeof GoogleUserActions.loadGoogleUser>, error) => {
        return GoogleUserActions.loadGoogleUserFailure({ error });
      }
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<GoogleUserPartialState>
  ) {}
}
