import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailCardComponent } from './cocktail-card.component';

describe('CocktailCardComponent', () => {
  let component: CocktailCardComponent;
  let fixture: ComponentFixture<CocktailCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocktailCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
