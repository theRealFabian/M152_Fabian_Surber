import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {TechnischeDatenComponent} from "./technische-daten/technische-daten.component";
import {FeaturesComponent} from "./features/features.component";
import {KaufenComponent} from "./kaufen/kaufen.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'technische-daten', component: TechnischeDatenComponent},
  { path: 'features', component: FeaturesComponent},
  { path: 'kaufen', component: KaufenComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
