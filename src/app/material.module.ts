import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatProgressSpinnerModule,
  MatTableModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatProgressSpinnerModule,
    MatTableModule
  ],
  exports: [
    MatButtonModule,
    MatProgressSpinnerModule,
    MatTableModule
  ],
})
export class MaterialModule { }
