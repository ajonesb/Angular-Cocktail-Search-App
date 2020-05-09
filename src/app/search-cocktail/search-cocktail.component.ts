import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CocktailService } from './../cocktail/cocktail.service';
import { Cocktail } from '../cocktail/cocktail';

@Component({
  selector: 'app-search-cocktail',
  templateUrl: './search-cocktail.component.html',
  styleUrls: ['./search-cocktail.component.scss']
})
export class SearchCocktailComponent implements OnInit {

  public search = '';
  public cocktailList: Array<Cocktail> = [];

  public advanced = false;
  public categoriesList: Array<string> = [];
  public chosenCategory = '';

  constructor(private searchService: CocktailService, private router: Router) { }

  ngOnInit() {
    this.loadCategory();
  }

  loadCategory() {
    this.searchService.getCategoryList().then(list => {
      this.categoriesList = list;
    });
  }

  getValue(val) {
    if (val.length > 3) {
      this.searchCocktail();
    }
  }

  searchCocktail() {
    this.searchService.getCocktailsByName(this.search).then(res => {
      this.cocktailList = res;
    });
  }

  chooseCategory(choose) {
    if (choose !== this.chosenCategory) {
      this.chosenCategory = choose;
    }
  }

  getMatchingList() {
    const matchingCocktail = [];
    for (const drink of this.cocktailList) {
      if (this.matchingCategory(drink)) {
        matchingCocktail.push(drink);
      }
    }
    return matchingCocktail;
  }

  matchingCategory(drink: Cocktail): boolean {
    if (drink.category.match(this.chosenCategory)) {
      return true;
    } else {
      return false;
    }
  }

  navigateToCocktail(cocktailId) {
    this.router.navigate(['/cocktail-info', cocktailId]);
  }
}
