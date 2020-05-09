import { CocktailInfoComponent } from './cocktail-info/cocktail-info.component';
import { SearchCocktailComponent } from './search-cocktail/search-cocktail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/search',
  //   pathMatch: 'prefix'
  // },
  // {
  //   path: 'search',
  //   component: SearchCocktailComponent,
  //   data: { animation: 'search'}
  // },


   { path: './', component: SearchCocktailComponent },
  //  { path: '', component: SearchCocktailComponent },
    { path: '', redirectTo: './', pathMatch: 'prefix' },


  {
    path: 'cocktail-info/:id',
    component: CocktailInfoComponent,
    data: { animation: 'cocktail-info'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
