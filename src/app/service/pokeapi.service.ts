import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {

  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private Http: HttpClient) {}

  public listPokemons(limit: number, types: number[]) {
    const httpOptions = {
      headers: this.headers,
      mode: 'no-cors'
    };
    var f: string = `pokemon_v2_pokemontypes: {type_id: {_in: [${types.join(
      ','
    )}]}},`;
    if (types.length == 0) f = '';

    var a = JSON.stringify({
      query: `query samplePokeAPIquery {\n  pokemon_v2_pokemon(limit: ${limit}, offset: 0, where: {${f} id: {_lt: 899}}) {\n    id\n    name\n    pokemon_v2_pokemontypes {\n      pokemon_v2_type {\n        name\n      }\n    }\n  }\n}\n`,
      variables: null,
      operationName: 'samplePokeAPIquery',
    });

    return this.Http.post<any>('https://beta.pokeapi.co/graphql/v1beta', a, httpOptions);
  }

  public listPokemonsMean(mean1: string, mean2: string) {

    var a = JSON.stringify({
      "query": `query samplePokeAPIquery {\n  pokemon_v2_pokemon(limit: 25, offset: 0, where: {pokemon_v2_pokemontypes: {}, id: {_lt: 899}, name: {_similar: \"(${mean1}|${mean2})%\"}}) {\n    name\n    id\n  }\n}\n`,
      "variables": null,
      "operationName": "samplePokeAPIquery"
  });

    return this.Http.post<any>('https://beta.pokeapi.co/graphql/v1beta', a);
  }

  public listPokemonsName(limit: number, name: string) {
    const httpOptions = {
      headers: this.headers,
      mode: 'no-cors'
    };
    var a = JSON.stringify({
      query: `query samplePokeAPIquery {\n  pokemon_v2_pokemon(limit: 898, offset: 0, where: {name: {_iregex: ${name}}, id: {_lt: 898}}) {\n    id\n    name\n    pokemon_v2_pokemontypes {\n      pokemon_v2_type {\n        name\n      }\n    }\n  }\n}\n`,
      variables: null,
      operationName: 'samplePokeAPIquery',
    });

    return this.Http.post<any>('https://beta.pokeapi.co/graphql/v1beta', a, httpOptions);
  }

  public pokemonDetails(id: string, off: string) {
    const httpOptions = {
      headers: this.headers,
      mode: 'no-cors'
    };
    var a = JSON.stringify({
      query: `query samplePokeAPIquery {\n  pokemon_v2_pokemon(where: {id: {_eq: ${id}}}) {\n    id\n    name\n    pokemon_v2_pokemonstats {\n      id\n      pokemon_v2_stat {\n        name\n        id\n      }\n      base_stat\n    }\n    pokemon_v2_pokemontypes {\n      pokemon_v2_type {\n        id\n        name\n      }\n    }\n    pokemon_v2_pokemonabilities {\n      pokemon_v2_ability {\n        id\n        name\n      }\n    }\n    pokemon_v2_pokemonspecy {\n      pokemon_v2_pokemonspeciesflavortexts(where: {language_id: {_eq: 9}}, limit: 1, offset: ${off}) {\n        flavor_text\n        language_id\n        pokemon_v2_version {\n          name\n        }\n      }\n      gender_rate\n    }\n  }\n}\n`,
      variables: null,
      operationName: 'samplePokeAPIquery',
    });

    return this.Http.post<any>('https://beta.pokeapi.co/graphql/v1beta', a, httpOptions);
  }

  public pokemonEvoList(id: string) {
    var a = JSON.stringify({
      query: `query MyQuery {\n  pokemon_v2_evolutionchain(where: {pokemon_v2_pokemonspecies: {id: {_eq: ${id}}}}, limit: 898) {\n    id\n    pokemon_v2_pokemonspecies {\n      name\n      id\n    }\n  }\n}\n`,
      variables: null,
      operationName: 'MyQuery',
    });

    return this.Http.post<any>('https://beta.pokeapi.co/graphql/v1beta', a);
  }

  public filterTypes(filterString: number[]) {
    const httpOptions = {
      headers: this.headers,
      mode: 'no-cors'
    };
    var f: string = `{pokemon_v2_pokemontypes: {pokemon_v2_type: {id: {_in: [${filterString}]}}},`;
    if (filterString.length == 0) f = '';

    var a = JSON.stringify({
      query: `query samplePokeAPIquery {\n  pokemon_v2_pokemon(limit: 25, where: ${f}  id: {_lte: 898}}, order_by: {id: asc}) {\n    id\n    name\n    pokemon_v2_pokemontypes {\n      pokemon_v2_type {\n        name\n      }\n    }\n  }\n}\n`,
      variables: null,
      operationName: 'samplePokeAPIquery',
    });
    return this.Http.post<any>('https://beta.pokeapi.co/graphql/v1beta', a, httpOptions);
  }

  public apiGetPokemons(url: string): Observable<any> {
    return this.Http.get<any>(url).pipe(map((res) => res));
  }
}
