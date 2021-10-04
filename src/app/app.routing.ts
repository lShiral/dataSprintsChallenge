import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import('src/app/pages/pagina-inicial/pagina-inicial.module').then((m) => m.PaginaInicialModule),
  },
  {
    path: "sou-dev",
    loadChildren: () =>
      import('src/app/pages/sou-dev/sou-dev.module').then((m) => m.SouDevModule),
  },
  {
    path: "procuro-dev",
    loadChildren: () =>
      import('src/app/pages/procuro-dev/procuro-dev.module').then((m) => m.ProcuroDevModule),
  },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
