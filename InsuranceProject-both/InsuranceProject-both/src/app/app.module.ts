import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialsModule } from './materials/materials.module';
import { TravelInsuranceComponent } from './travel-insurance/travel-insurance.component';

@NgModule({
  declarations: [
    AppComponent,
    TravelInsuranceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
