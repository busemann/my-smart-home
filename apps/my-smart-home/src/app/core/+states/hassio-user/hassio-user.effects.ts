import { Injectable } from '@angular/core';
import { createEffect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { HassioUserPartialState } from './hassio-user.reducer';
import * as HassioUserActions from './hassio-user.actions';

@Injectable()
export class HassioUserEffects {
  loadHassioUser$ = createEffect(() =>
    this.dataPersistence.fetch(HassioUserActions.loadHassioUser, {
      run: (action: ReturnType<typeof HassioUserActions.loadHassioUser>, state: HassioUserPartialState) => {
        // return HassioUserActions.loadHassioUserSuccess({ hassioUser });
        return null;
      },

      onError: (action: ReturnType<typeof HassioUserActions.loadHassioUser>, error) => {
        console.error('Error', error);
        return HassioUserActions.loadHassioUserFailure({ error });
      }
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<HassioUserPartialState>
  ) {}
}
