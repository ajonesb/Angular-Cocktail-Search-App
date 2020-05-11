import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NutritionalService {

  constructor(private http: HttpClient) { }

  getNutrientsInfo(ingredients: Array<{name: string, measure: string}>) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'x-app-id': '3c8bd6e1',
        'x-app-key': '56b779b1cf17c0987cf542961cdf06b8'
      })
    };
    let query = '';
    for (let i = 0; i < ingredients.length; i++) {
      query += ingredients[i].measure + ' ' + ingredients[i].name + ' ';
    }
    const body = {query: query};
    return this.http.post('https://trackapi.nutritionix.com/v2/natural/nutrients', body, httpOptions)
    .toPromise();
  }
}
