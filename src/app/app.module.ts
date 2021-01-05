import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';
import {DemoMaterialModule} from './material.module';
import { InformationComponent } from './home/information/information.component'
import { EMIInformationComponent } from './home/emi-information/emi-information.component';
import { EligibilityCalculatorComponent } from './home/eligibility-calculator/eligibility-calculator.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent ,
    InformationComponent,
    EMIInformationComponent,
    EligibilityCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng5SliderModule,
    DemoMaterialModule,
    BrowserAnimationsModule
  ],
  exports: [ DemoMaterialModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
