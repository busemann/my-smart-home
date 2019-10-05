import { GoogleUserEntity } from './google-user.models';
import {
  GoogleUserState,
  googleUserAdapter,
  initialState
} from './google-user.reducer';
import * as GoogleUserSelectors from './google-user.selectors';

describe('GoogleUser Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getGoogleUserId = it => it['id'];
  const createGoogleUserEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as GoogleUserEntity);

  let state;

  beforeEach(() => {
    state = {
      googleUser: googleUserAdapter.addAll(
        [
          createGoogleUserEntity('PRODUCT-AAA'),
          createGoogleUserEntity('PRODUCT-BBB'),
          createGoogleUserEntity('PRODUCT-CCC')
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

  describe('GoogleUser Selectors', () => {
    it('getAllGoogleUser() should return the list of GoogleUser', () => {
      const results = GoogleUserSelectors.getAllGoogleUser(state);
      const selId = getGoogleUserId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = GoogleUserSelectors.getSelected(state);
      const selId = getGoogleUserId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getGoogleUserLoaded() should return the current 'loaded' status", () => {
      const result = GoogleUserSelectors.getGoogleUserLoaded(state);

      expect(result).toBe(true);
    });

    it("getGoogleUserError() should return the current 'error' state", () => {
      const result = GoogleUserSelectors.getGoogleUserError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
