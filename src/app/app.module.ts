import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultiselectComponent } from './multiselect/multiselect.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { FirstPageComponent } from './first-page/first-page.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { NavBarComponent } from './nav/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './layout/layout/layout.component';


@NgModule({
  declarations: [
    AppComponent,
    MultiselectComponent,
    FirstPageComponent,
    RecommendationsComponent,
    NavBarComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Add FormsModule here
    NgMultiSelectDropDownModule.forRoot(),
    MatIconModule,
    HttpClientModule,
    MatIcon
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
