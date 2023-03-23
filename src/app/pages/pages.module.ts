import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from "@angular/router";
//modulo routing
import { RoutingModule } from './routing.module';
import { SharedModule } from '../shared/shared.module';
//pages
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { InicioComponent } from './inicio/inicio.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { CriadoresComponent } from './criadores/criadores.component';

@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    InicioComponent,
    PageNotFoundComponent,
    CriadoresComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    RoutingModule,
    SharedModule,
  ]
})
export class PagesModule { }
