import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaInicialComponent } from './pagina-inicial.component';
import { PaginaInicialRoutes } from './pagina-inicial.routing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    PaginaInicialComponent
  ],
  imports: [
    CommonModule,
    PaginaInicialRoutes,
    MatIconModule,
    MatButtonModule,
  ]
})
export class PaginaInicialModule { }
