import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeListComponent } from 'src/app/shared/poke-list/poke-list.component';
import { PokeapiService } from './../../service/pokeapi.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public viewList = 'Pokémon';
  public length$: Observable<number> | undefined;
  public limit = 25;
  public limitOptions = [10, 25, 50];
  public pokemonsPaginated: Partial<PokeListComponent>[] = [];

  constructor(
    public _pokedex: PokeapiService,
  ) { }

}


