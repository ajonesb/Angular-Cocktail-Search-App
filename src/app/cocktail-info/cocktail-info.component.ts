import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CocktailService } from './../cocktail/cocktail.service';
import { Cocktail } from '../cocktail/cocktail';
import { NutritionalService } from '../nutritional/nutritional.service';
@Component({
  selector: 'app-cocktail-info',
  templateUrl: './cocktail-info.component.html',
  styleUrls: ['./cocktail-info.component.scss']
})
export class CocktailInfoComponent implements OnInit {
  public cocktail: Cocktail;
  public related: Array<{
    id: string;
    name: string;
    image: string;
    ref: number;
  }> = [];
  public nutrition: {
    calorie: number;
    cholesterol: number;
    potassium: number;
    saturatedFat: number;
    sodium: number;
    sugar: number;
    protein: number;
  } = {
    calorie: 0,
    cholesterol: 0,
    potassium: 0,
    saturatedFat: 0,
    sodium: 0,
    sugar: 0,
    protein: 0
  };
  public dailyValue: {
    calorie: number;
    cholesterol: number;
    potassium: number;
    saturatedFat: number;
    sodium: number;
    sugar: number;
    protein: number;
  } = {
    calorie: 2500,
    cholesterol: 300,
    potassium: 4700,
    saturatedFat: 20,
    sodium: 2300,
    sugar: 100,
    protein: 50
  };

  constructor(
    private route: ActivatedRoute,
    private cocktailService: CocktailService,
    private router: Router,
    private nutritional: NutritionalService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.cocktailService.getCocktail(params.id).then(res => {
        this.cocktail = res;
        this.cocktailService
          .getRelatedCocktails(this.cocktail)
          .then(related => {
            this.related = related;
          });
        this.nutritional
          .getNutrientsInfo(this.cocktail.ingredients)
          .then(nutrients => {
            if (nutrients['foods']) {
              for (const nutrient of nutrients['foods']) {
                this.nutrition.calorie += nutrient['nf_calories'];
                this.nutrition.cholesterol += nutrient['nf_cholesterol'];
                this.nutrition.potassium += nutrient['nf_potassium'];
                this.nutrition.saturatedFat += nutrient['nf_saturated_fat'];
                this.nutrition.sodium += nutrient['nf_sodium'];
                this.nutrition.sugar += nutrient['nf_sugars'];
                this.nutrition.protein += nutrient['nf_protein'];
              }
            }
          });
      });
    });
  }

  navigateToCocktail(cocktailId) {
    this.router.navigate(['/cocktail-info', cocktailId]);
  }
}
