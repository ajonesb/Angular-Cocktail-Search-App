import { Cocktail } from './cocktail';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  constructor(private http: HttpClient) {}

  getCocktailsByName(name: string): Promise<Array<Cocktail>> {
    return this.http
      .get('https://www.thecocktaildb.com/api/json/v1/1/search.php', {
        params: { s: name }
      })
      .toPromise()
      .then(res => {
        if (res['drinks']) {
          const drinks = [];
          for (const drink of res['drinks']) {
            drinks.push(new Cocktail(drink));
          }
          return drinks;
        } else {
          return [];
        }
      });
  }

  getCocktail(id: string): Promise<Cocktail> {
    return this.http
      .get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php', {
        params: { i: id }
      })
      .toPromise()
      .then(res => {
        if (res['drinks'] && res['drinks'].length > 0) {
          return new Cocktail(res['drinks'][0]);
        }
      });
  }

  getCategoryList(): Promise<Array<string>> {
    return this.http
      .get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
      .toPromise()
      .then(res => {
        const categories = [];
        if (res) {
          for (const category of res['drinks']) {
            categories.push(category.strCategory);
          }
        }
        return categories;
      });
  }

  getCocktailByIngredient(ingredient: string): Promise<Array<any>> {
    return this.http
      .get('https://www.thecocktaildb.com/api/json/v1/1/filter.php', {
        params: { i: ingredient }
      })
      .toPromise()
      .then(res => {
        if (res && res['drinks']) {
          return res['drinks'];
        } else {
          return [];
        }
      });
  }

  alreadyPresent(
    related: Array<{ id: string; name: string; image: string; ref: number }>,
    id
  ) {
    for (let i = 0; i < related.length; i++) {
      if (related[i].id === id) {
        return i;
      }
    }
    return -1;
  }

  async getRelatedCocktails(cocktail: Cocktail) {
    const related: Array<{
      id: string;
      name: string;
      image: string;
      ref: number;
    }> = [];
    for (const ingredient of cocktail.ingredients) {
      await this.getCocktailByIngredient(ingredient.name).then(
        cocktailsFound => {
          for (const cocktailFound of cocktailsFound) {
            if (cocktail.id !== cocktailFound.idDrink) {
              const present = this.alreadyPresent(
                related,
                cocktailFound.idDrink
              );
              if (present === -1) {
                related.push({
                  id: cocktailFound.idDrink,
                  name: cocktailFound.strDrink,
                  image: cocktailFound.strDrinkThumb,
                  ref: 1
                });
              } else {
                related[present].ref += 1;
              }
            }
          }
        }
      );
    }
    related.sort(function(a, b) {
      return b.ref - a.ref;
    });
    return related;
  }
}
