import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SouDevComponent } from './sou-dev.component';
import { SouDevRoutes } from './sou-dev.routing';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    SouDevComponent
  ],
  imports: [
    CommonModule,
    SouDevRoutes,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ]
})
export class SouDevModule { }
