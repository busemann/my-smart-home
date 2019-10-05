import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

@NgModule({
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    MatChipsModule,
    MatCardModule,
    MatDialogModule,
    MatProgressBarModule,
    MatSelectModule,
    MatListModule,
    MatTabsModule,
    MatMenuModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatDividerModule,
    DragDropModule
  ]
})
export class MaterialModule {}
