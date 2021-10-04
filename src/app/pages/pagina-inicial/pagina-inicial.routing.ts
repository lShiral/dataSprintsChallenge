import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PaginaInicialComponent } from "./pagina-inicial.component";

const routes: Routes = [
  {
    path: "",
    component: PaginaInicialComponent,
  },
  {
    path: '', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginaInicialRoutes { }
