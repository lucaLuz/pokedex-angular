import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriadoresComponent } from './criadores.component';

describe('CriadoresComponent', () => {
  let component: CriadoresComponent;
  let fixture: ComponentFixture<CriadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriadoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
