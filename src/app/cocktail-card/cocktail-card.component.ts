import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cocktail-card',
  templateUrl: './cocktail-card.component.html',
  styleUrls: ['./cocktail-card.component.scss']
})
export class CocktailCardComponent implements OnInit {

  @Input() name = '';
  @Input() image = '';
  @Input() id = '';

  constructor() { }

  ngOnInit() {
  }

}
