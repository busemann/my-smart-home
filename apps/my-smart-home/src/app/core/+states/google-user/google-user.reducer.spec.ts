import { GoogleUserEntity } from './google-user.models';
import * as GoogleUserActions from './google-user.actions';
import { GoogleUserState, initialState, reducer } from './google-user.reducer';

describe('GoogleUser Reducer', () => {
  const createGoogleUserEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as GoogleUserEntity);

  beforeEach(() => {});

  describe('valid GoogleUser actions', () => {
    it('loadGoogleUserSuccess should return set the list of known GoogleUser', () => {
      const googleUser = [
        createGoogleUserEntity('PRODUCT-AAA'),
        createGoogleUserEntity('PRODUCT-zzz')
      ];
      const action = GoogleUserActions.loadGoogleUserSuccess({ googleUser });

      const result: GoogleUserState = reducer(initialState, action);

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
