import { Component, OnInit } from '@angular/core';
import { cpPoke } from '../../../app/pages/details/details.component';

@Component({
  selector: 'app-poke-arco',
  templateUrl: './poke-arco.component.html',
  styleUrls: ['./poke-arco.component.scss'],
})
export class PokeArcoComponent implements OnInit {
  ngOnInit(): void {
    this.setcp();
  }

  setcp() {
    const arco = document.querySelectorAll('svg[data-value] .red');
    arco.forEach((path: any) => {
      var value = Math.ceil(cpPoke);
      path.getBoundingClientRect();
      path.style.strokeDashoffset = Math.ceil(
        250 - Math.max(
            ((2500 / path.style.strokeDashoffset) * value) / (2500 / path.style.strokeDashoffset)) / (2500 / path.style.strokeDashoffset
            )
      );
    });
  }
}
