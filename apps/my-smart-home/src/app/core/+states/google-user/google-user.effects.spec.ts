import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { GoogleUserEffects } from './google-user.effects';
import * as GoogleUserActions from './google-user.actions';

describe('GoogleUserEffects', () => {
  let actions: Observable<any>;
  let effects: GoogleUserEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        GoogleUserEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore()
      ]
    });

    effects = TestBed.get(GoogleUserEffects);
  });

  describe('loadGoogleUser$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: GoogleUserActions.loadGoogleUser() });

      const expected = hot('-a-|', {
        a: GoogleUserActions.loadGoogleUserSuccess({ googleUser: [] })
      });

      expect(effects.loadGoogleUser$).toBeObservable(expected);
    });
  });
});
