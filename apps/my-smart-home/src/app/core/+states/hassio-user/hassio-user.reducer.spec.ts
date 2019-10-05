import { HassioUser } from './hassio-user.models';
import * as HassioUserActions from './hassio-user.actions';
import { HassioUserState, initialState, reducer } from './hassio-user.reducer';

describe('HassioUser Reducer', () => {
  const createHassioUserEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as HassioUser);

  beforeEach(() => {});

  describe('valid HassioUser actions', () => {
    it('loadHassioUserSuccess should return set the list of known HassioUser', () => {
      const hassioUser = [
        createHassioUserEntity('PRODUCT-AAA'),
        createHassioUserEntity('PRODUCT-zzz')
      ];
      const action = HassioUserActions.loadHassioUserSuccess({ hassioUser });

      const result: HassioUserState = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
