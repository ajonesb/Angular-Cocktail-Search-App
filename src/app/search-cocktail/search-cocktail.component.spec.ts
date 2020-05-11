import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCocktailComponent } from './search-cocktail.component';

describe('SearchCocktailComponent', () => {
  let component: SearchCocktailComponent;
  let fixture: ComponentFixture<SearchCocktailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCocktailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCocktailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
