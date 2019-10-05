import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { HassioUser } from './hassio-user.models';
import { HassioUserEffects } from './hassio-user.effects';
import { HassioUserFacade } from './hassio-user.facade';

import * as HassioUserSelectors from './hassio-user.selectors';
import * as HassioUserActions from './hassio-user.actions';
import {
  HASSIOUSER_FEATURE_KEY,
  HassioUserState,
  initialState,
  reducer
} from './hassio-user.reducer';

interface TestSchema {
  hassioUser: HassioUserState;
}

describe('HassioUserFacade', () => {
  let facade: HassioUserFacade;
  let store: Store<TestSchema>;
  const createHassioUserEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as HassioUser);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(HASSIOUSER_FEATURE_KEY, reducer),
          EffectsModule.forFeature([HassioUserEffects])
        ],
        providers: [HassioUserFacade]
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
      facade = TestBed.get(HassioUserFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.getHassioUser$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.getHassioUser$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadHassioUserSuccess` to manually update list
     */
    it('getHassioUser$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.getHassioUser$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          HassioUserActions.loadHassioUserSuccess({
            hassioUser: [
              createHassioUserEntity('AAA'),
              createHassioUserEntity('BBB')
            ]
          })
        );

        list = await readFirst(facade.getHassioUser$);
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
