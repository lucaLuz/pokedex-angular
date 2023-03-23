import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

//Services
import { PokeapiService } from 'src/app/service/pokeapi.service';

export var cpPoke = 0;

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  public getAllPokemons2: any;

  public pokemon: any;

  public hp: number = 0;
  public atk: number = 0;
  public def: number = 0;

  public textAleatorio: number = 1;
  public pokemonEvo: any;
  public pokemonDesc: any;
  public isLoading: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeapiService: PokeapiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.getPokeapiService();
  }

  getPokeapiService() {
    const id: string = this.activatedRoute.snapshot.params['id'].toString();

    this.pokeapiService.pokemonDetails(id, '0').subscribe((response) => {
      this.pokemon = response['data'].pokemon_v2_pokemon[0];
      this.hp = this.pokemon.pokemon_v2_pokemonstats[0].base_stat;
      this.atk = this.pokemon.pokemon_v2_pokemonstats[1].base_stat;
      this.def = this.pokemon.pokemon_v2_pokemonstats[2].base_stat;

      this.pokemonDesc =
        response['data'].pokemon_v2_pokemon[0].pokemon_v2_pokemonspecy;

      this.pokeapiService.pokemonEvoList(id).subscribe((response) => {
        this.pokemonEvo = response['data'].pokemon_v2_evolutionchain;
        this.isLoading = false;
      });
    });
  }

  async getPokeNext() {
    if (this.pokemon.id <= 897) {
      this.isLoading = true;
      const idNext = this.pokemon.id + 1;
      await this.router.navigate(['/details/' + idNext]);
      this.getPokeapiService();
    }
    return;
  }
  async getPokePrev() {
    if (this.pokemon.id >= 2) {
      this.isLoading = true;
      const idPrev = this.pokemon.id - 1;
      await this.router.navigate(['/details/' + idPrev]);
      this.getPokeapiService();
    }

    return;
  }

  getCp() {
    cpPoke = Math.ceil(
      (Math.sqrt(this.hp) * this.atk * Math.sqrt(this.def)) / 10
    );
    return cpPoke;
  }

  getGender() {
    if (this.pokemonDesc.gender_rate <= 0) {
      return 'Unknown';
    }
    return 'Male ♂ / Female ♀';
  }
}
