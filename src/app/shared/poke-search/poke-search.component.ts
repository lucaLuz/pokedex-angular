import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export var pesquisa = "";
export var resultFilter: number[] = []; //"1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18";

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss'],
})
export class PokeSearchComponent implements OnInit {
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();
  @Output() public emmitFilter: EventEmitter<number[]> = new EventEmitter();

  public searchString = '';

  constructor() {}

  ngOnInit(): void {
    pesquisa = "";
    resultFilter = [];
  }

  changeCheckbox(event: any, a: number) {
    if (event.target.checked) {
      resultFilter.push(a);
    } else {
      resultFilter = resultFilter.filter((c) => c != a);
    }
    pesquisa = "";
  }

  public digit() {
    if (this.searchString.length > 1) {
      if (this.searchString.length >= 1) {
        pesquisa = this.searchString;
      } else {
        pesquisa = '';
        this.emmitSearch.emit(this.searchString);
        this.emmitFilter.emit(resultFilter);
      }
    } else {
      pesquisa = '';
      this.emmitSearch.emit(this.searchString);
      this.emmitFilter.emit(resultFilter);
    }
  }
  public search() {
    this.searchString = this.removeSpecialCharacters(this.searchString);
    if (this.searchString.length > 0) {
      this.emmitSearch.emit(this.searchString.toLowerCase());

      if (this.searchString.length > 0) {
        pesquisa = this.searchString.toLowerCase();
      } else {
        pesquisa = '';
      }
    } else {
      pesquisa = '';
      this.emmitSearch.emit(this.searchString);
      this.emmitFilter.emit(resultFilter);
    }
  }

  removeSpecialCharacters(str: string): string {
    return str.replace(/[^a-zA-Z]/g, '');
  }
}
