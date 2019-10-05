import { HassioUser } from './hassio-user.models';
import {
  HassioUserState,
  hassioUserAdapter,
  initialState
} from './hassio-user.reducer';
import * as HassioUserSelectors from './hassio-user.selectors';

describe('HassioUser Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getHassioUserId = it => it['id'];
  const createHassioUserEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as HassioUser);

  let state;

  beforeEach(() => {
    state = {
      hassioUser: hassioUserAdapter.addAll(
        [
          createHassioUserEntity('PRODUCT-AAA'),
          createHassioUserEntity('PRODUCT-BBB'),
          createHassioUserEntity('PRODUCT-CCC')
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true
        }
      )
    };
  });

  describe('HassioUser Selectors', () => {
    it('getHassioUser() should return the list of HassioUser', () => {
      const results = HassioUserSelectors.getHassioUser(state);
      const selId = getHassioUserId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = HassioUserSelectors.getSelected(state);
      const selId = getHassioUserId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getHassioUserLoaded() should return the current 'loaded' status", () => {
      const result = HassioUserSelectors.getHassioUserLoaded(state);

      expect(result).toBe(true);
    });

    it("getHassioUserError() should return the current 'error' state", () => {
      const result = HassioUserSelectors.getHassioUserError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
