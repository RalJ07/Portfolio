import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';

import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { WorksComponent } from './works/works.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    WorksComponent,
    AboutComponent,
    FooterComponent,
    TestimonialsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    TestimonialsComponent,
    WorksComponent,
  ]
})
export class ComponentsModule { }
