import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as fromHassioUser from './hassio-user.reducer';
import * as HassioUserSelectors from './hassio-user.selectors';
import * as HassioUserActions from './hassio-user.actions';

@Injectable()
export class HassioUserFacade {
  loading$ = this.store.pipe(select(HassioUserSelectors.getHassioUserLoading));
  loaded$ = this.store.pipe(select(HassioUserSelectors.getHassioUserLoaded));
  getHassioUser$ = this.store.pipe(select(HassioUserSelectors.getHassioUser));

  constructor(private store: Store<fromHassioUser.HassioUserPartialState>) {}

  getHassioUser() {
    this.store.dispatch(HassioUserActions.loadHassioUser());
  }
}
