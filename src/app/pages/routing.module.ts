import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//componentes
import { InicioComponent } from './inicio/inicio.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { CriadoresComponent } from './criadores/criadores.component';
import { NumberGuard } from './isNumber.guard';

const routes: Routes = [
  {
    path:'',
    component:InicioComponent,
  },
  {
    path: 'list',
    component: HomeComponent,
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    canActivate: [NumberGuard]
  },
  {
    path: 'criadores',
    component: CriadoresComponent,
  },
  {
    path: '**', pathMatch: 'full',
    component: PageNotFoundComponent,

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingModule { }

