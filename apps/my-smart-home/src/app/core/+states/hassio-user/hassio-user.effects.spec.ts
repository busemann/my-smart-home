import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { HassioUserEffects } from './hassio-user.effects';
import * as HassioUserActions from './hassio-user.actions';

describe('HassioUserEffects', () => {
  let actions: Observable<any>;
  let effects: HassioUserEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        HassioUserEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore()
      ]
    });

    effects = TestBed.get(HassioUserEffects);
  });

  describe('loadHassioUser$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: HassioUserActions.loadHassioUser() });

      const expected = hot('-a-|', {
        a: HassioUserActions.loadHassioUserSuccess({ hassioUser: [] })
      });

      expect(effects.loadHassioUser$).toBeObservable(expected);
    });
  });
});
