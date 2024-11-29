import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { RecommendationsComponent } from './recommendations/recommendations/recommendations.component';
import { MultiselectComponent } from './multiselect/multiselect.component';
import { LayoutComponent } from './layout/layout/layout.component';

const routes: Routes = [
  {path: '',component: FirstPageComponent,pathMatch:"full"},
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'recommendations', component: RecommendationsComponent },
      { path: 'multiselect', component: MultiselectComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
