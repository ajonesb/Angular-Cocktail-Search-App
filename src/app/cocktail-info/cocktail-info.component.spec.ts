import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailInfoComponent } from './cocktail-info.component';

describe('CocktailInfoComponent', () => {
  let component: CocktailInfoComponent;
  let fixture: ComponentFixture<CocktailInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocktailInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocktailInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
