import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { MultiselectComponent } from './multiselect/multiselect.component';

const routes: Routes = [
  {
    path: '',
    component: FirstPageComponent
  },
  {
    path: 'recommendations',
    component: RecommendationsComponent
  },
  {
    path: 'multiselect',
    component: MultiselectComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
