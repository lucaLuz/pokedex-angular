import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/service/pokeapi.service';
import { pesquisa } from '../../shared/poke-search/poke-search.component';

var limit = 24;

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  public getAllPokemons: any;
  public getMeanPokemons: any;
  public isLoading: boolean = true;
  public nothing: boolean = false;
  public pokemonAleatorio: number = 1;
  public showButton = false;
  private scrollHeight = 900;
  public resultFilter: number[] = [];

  constructor(@Inject(DOCUMENT) private document: Document,
    private pokeapiService: PokeapiService) {}

  ngOnInit(): void {
    this.getPokeapiService(24,this.resultFilter);
    this.isLoading = true;
    this.randomId();
  }

  getPokeapiService(limit: number, types: number[]) {
    this.pokeapiService.listPokemons(limit, types).subscribe((response) => {
      this.getAllPokemons = response['data'].pokemon_v2_pokemon;
      this.isLoading = false;
    });
  }

  getPokeMean( mean1: string, mean2: string) {
    this.pokeapiService.listPokemonsMean(mean1, mean2).subscribe((response) => {
      this.getMeanPokemons = response['data'].pokemon_v2_pokemon;
    });
  }

  public filterPokemons() {
    this.isLoading = true;
    this.pokeapiService.filterTypes(this.resultFilter).subscribe((response) => {
      this.getAllPokemons = response['data'].pokemon_v2_pokemon;
      this.isLoading = false;
    });
  }

  getFilter(value: number[]) {
    this.nothing = false;
    this.resultFilter = value;
    this.pokeapiService.listPokemons(24, this.resultFilter).subscribe((response) => {
      this.getAllPokemons = response['data'].pokemon_v2_pokemon;
      });
  }

  getMean(){
    const numCharDiv: number = Math.ceil(pesquisa.length/2);
    const meanResult1 = pesquisa.substring(0, numCharDiv);
    const meanResult2 = pesquisa.substring(Math.ceil(numCharDiv));
    this.getPokeMean(meanResult1, meanResult2);
    return;
  }

  public getSearch(value: string) {
    this.nothing = false;
    if(pesquisa != "" && pesquisa.length >= 1 || pesquisa != " " && pesquisa.length >= 1){
      this.pokeapiService.listPokemonsName(24, value).subscribe((response) => {
      this.getAllPokemons = response['data'].pokemon_v2_pokemon;

      if(response['data'].pokemon_v2_pokemon.length <= 0){
        this.nothing = true;
        this.getMean();
        return;
      }
      });
    }
  }

  public randomId(min = 1, max = 898) {
    this.pokemonAleatorio = Math.floor(Math.random() * (max - min + 1) + min);
  }

  @HostListener('window:scroll')
  onWindowScroll(): void{
    const yOffset = window.pageXOffset;
    const scrollTop = this.document.documentElement.scrollTop;
    this.showButton = (yOffset || scrollTop) > this.scrollHeight;
  }

  onScrollTop (): void {
    this.document.documentElement.scrollTop = 0;
  }

  onScrollDown() : void{
    if(pesquisa == ""){
      this.pokeapiService.listPokemons((limit+24), this.resultFilter).subscribe((response) => {
      this.getAllPokemons = response['data'].pokemon_v2_pokemon;
      this.isLoading = false;
    });
    limit += 24;
    }

  }

}
