import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { GoogleUserEntity } from './google-user.models';
import { GoogleUserEffects } from './google-user.effects';
import { GoogleUserFacade } from './google-user.facade';

import * as GoogleUserSelectors from './google-user.selectors';
import * as GoogleUserActions from './google-user.actions';
import {
  GOOGLEUSER_FEATURE_KEY,
  GoogleUserState,
  initialState,
  reducer
} from './google-user.reducer';

interface TestSchema {
  googleUser: GoogleUserState;
}

describe('GoogleUserFacade', () => {
  let facade: GoogleUserFacade;
  let store: Store<TestSchema>;
  const createGoogleUserEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as GoogleUserEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(GOOGLEUSER_FEATURE_KEY, reducer),
          EffectsModule.forFeature([GoogleUserEffects])
        ],
        providers: [GoogleUserFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(GoogleUserFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allGoogleUser$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allGoogleUser$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadGoogleUserSuccess` to manually update list
     */
    it('allGoogleUser$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allGoogleUser$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          GoogleUserActions.loadGoogleUserSuccess({
            googleUser: [
              createGoogleUserEntity('AAA'),
              createGoogleUserEntity('BBB')
            ]
          })
        );

        list = await readFirst(facade.allGoogleUser$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
