import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TechnischeDatenComponent } from './technische-daten/technische-daten.component';
import { FeaturesComponent } from './features/features.component';
import { KaufenComponent } from './kaufen/kaufen.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TechnischeDatenComponent,
    FeaturesComponent,
    KaufenComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
