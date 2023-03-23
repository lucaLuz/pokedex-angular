import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeArcoComponent } from './poke-arco.component';

describe('PokeArcoComponent', () => {
  let component: PokeArcoComponent;
  let fixture: ComponentFixture<PokeArcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeArcoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeArcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
