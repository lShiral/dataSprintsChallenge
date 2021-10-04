import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SouDevComponent } from "./sou-dev.component";


const routes: Routes = [
  {
    path: "",
    component: SouDevComponent,
  },
  {
    path: '', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SouDevRoutes { }
