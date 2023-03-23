import { Component, OnInit  } from '@angular/core';
import { PokeapiService } from 'src/app/service/pokeapi.service';

@Component({
  selector: 'pokedex-header',
  templateUrl: './pokedex-header.component.html',
  styleUrls: ['./pokedex-header.component.scss']
})
export class PokedexHeaderComponent implements OnInit {

  public getAllPokemons: any;
  private setAllPokemons: any;

  constructor(
    private pokeapiService: PokeapiService
  ) {}

  ngOnInit(): void {
  }

  public getSearch(value: string){
    const filter = this.setAllPokemons.filter(( res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.getAllPokemons = filter;

  }

}
