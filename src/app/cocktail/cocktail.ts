export class Cocktail {
  public name: string;
  public id: string;
  public category: string;
  public ingredients: Array<{name: string, measure: string}> = [];
  public image: string;
  public instruction: string;
  public glass: string;
  public alcohol: boolean;

  constructor(drink) {
    this.name = drink.strDrink;
    this.id = drink.idDrink;
    this.category = drink.strCategory;
    this.image = drink.strDrinkThumb;
    this.instruction = drink.strInstructions;
    this.glass = drink.strGlass;
    this.alcohol = (drink.strAlcoholic === 'Alcoholic');
    for (let i = 1; i < 16; i++) {
      if (drink['strIngredient' + i] !== '') {
        this.ingredients.push({
          name: drink['strIngredient' + i],
          measure: drink['strMeasure' + i]
        });
      }
    }
  }
}
