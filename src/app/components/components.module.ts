import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';

import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { WorksComponent } from './works/works.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    WorksComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    HeaderComponent,
    WorksComponent,
    AboutComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
