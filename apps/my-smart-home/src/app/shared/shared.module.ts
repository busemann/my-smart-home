import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ColorPickerModule } from 'ngx-color-picker';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [MaterialModule, FlexLayoutModule, CommonModule, ColorPickerModule],
  exports: [MaterialModule, FlexLayoutModule, ColorPickerModule],
  providers: [],
  declarations: []
})
export class SharedModule {}
