import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcuroDevComponent } from './procuro-dev.component';
import { ProcuroDevRoutes } from './procuro-dev.routing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    ProcuroDevComponent
  ],
  imports: [
    CommonModule,
    ProcuroDevRoutes,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule
  ]
})
export class ProcuroDevModule { }
