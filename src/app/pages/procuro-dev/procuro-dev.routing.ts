import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProcuroDevComponent } from "./procuro-dev.component";


const routes: Routes = [
  {
    path: "",
    component: ProcuroDevComponent,
  },
  {
    path: '', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcuroDevRoutes { }
