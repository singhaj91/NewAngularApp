import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarListComponent } from './car-list/car-list.component';


@NgModule({
  declarations: [
    CarListComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule
  ],
  exports:[CarListComponent]
})
export class CarsModule { }
