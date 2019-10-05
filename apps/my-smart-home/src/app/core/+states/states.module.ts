import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxModule } from '@nrwl/angular';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import * as fromGoogleUser from './google-user/google-user.reducer';
import { GoogleUserEffects } from './google-user/google-user.effects';
import { GoogleUserFacade } from './google-user/google-user.facade';
import * as fromHassioUser from './hassio-user/hassio-user.reducer';
import { HassioUserEffects } from './hassio-user/hassio-user.effects';
import { HassioUserFacade } from './hassio-user/hassio-user.facade';
import { environment } from '../../../environments/environment';

const runtimeChecks = {
  strictActionImmutability: true,
  strictStateImmutability: true
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NxModule.forRoot(),
    StoreModule.forRoot(
      {},
      { metaReducers: !environment.production ? [] : [], runtimeChecks }
    ),
    EffectsModule.forRoot([GoogleUserEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forFeature(
      fromGoogleUser.GOOGLEUSER_FEATURE_KEY,
      fromGoogleUser.reducer
    ),
    StoreModule.forRoot(
      {},
      { metaReducers: !environment.production ? [] : [], runtimeChecks }
    ),
    EffectsModule.forRoot([HassioUserEffects]),
    StoreModule.forFeature(
      fromHassioUser.HASSIOUSER_FEATURE_KEY,
      fromHassioUser.reducer
    )
  ],
  providers: [GoogleUserFacade, HassioUserFacade]
})
export class StateModule {}
