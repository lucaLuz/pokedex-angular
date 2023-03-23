import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//modulos
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';


//componentes
import { PokedexHeaderComponent } from './pokedex-header/pokedex-header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { MenuComponent } from './menu/menu.component';
import { PokeArcoComponent } from './poke-arco/poke-arco.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PokedexHeaderComponent,
    PokeSearchComponent,
    PokeListComponent,
    MenuComponent,
    PokeArcoComponent,

  ],

  exports: [
    PokedexHeaderComponent,
    PokeSearchComponent,
    PokeListComponent,
    MenuComponent,
    PokeArcoComponent,
  ],

  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    InfiniteScrollModule,
    FormsModule
  ]
})
export class SharedModule { }
