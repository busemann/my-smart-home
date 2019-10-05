import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as fromGoogleUser from './google-user.reducer';
import * as GoogleUserSelectors from './google-user.selectors';
import * as GoogleUserActions from './google-user.actions';

@Injectable()
export class GoogleUserFacade {
  loaded$ = this.store.pipe(select(GoogleUserSelectors.getGoogleUserLoaded));

  constructor(private store: Store<fromGoogleUser.GoogleUserPartialState>) {}

  getGoogleUser() {
    this.store.dispatch(GoogleUserActions.loadGoogleUser());
  }
}
