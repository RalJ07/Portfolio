import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    ContactComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PagesRoutingModule
  ],
  exports: [
    ContactComponent,
    HomeComponent
  ],
})
export class PagesModule { }
