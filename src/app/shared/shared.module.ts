import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

const SHARED_MODULES = [
  FormsModule,
  ReactiveFormsModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatProgressBarModule,
  MatIconModule,
  MatToolbarModule,
];

@NgModule({
  imports: [
    ...SHARED_MODULES,
  ],
  exports: [
    ...SHARED_MODULES,
  ],
})
export class SharedModule { }
