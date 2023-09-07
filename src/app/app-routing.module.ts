import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecetteComponent } from './components/recette/recette.component';
import { RecipiesComponent } from './components/recipies/recipies.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: 'recette', component: RecetteComponent },
  { path: 'recipies', component: RecipiesComponent },
  { path: '', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
