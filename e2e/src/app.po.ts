import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }


  // Test Elements

  getTitleText() {
    return element(by.css('.title')).getText();
  }

  getSearchTextDescription() {
    return element(by.css('.search-input-description')).getText();
  }

  getFilterButtonDescription() {
    return element(by.css('.advanced-btn-description')).getText();
  }

  // getWindStrengthTextbox() {
  //   return element(by.css('#city-wind-label')).getText() as Promise<string>;
  // }

  // getSydneyApiLink() {
  //   return element(by.css('[ng-reflect-router-link="/city,2147714"]'));
  // }

  // getBlacktownApiLink() {
  //   return element(by.css('[ng-reflect-router-link="/city,2175411"]'));
  // }

  // getSurryHillsApiLink() {
  //   return element(by.css('[ng-reflect-router-link="/city,2147821"]'));
  // }

  // getMountDruittApiLink() {
  //   return element(by.css('[ng-reflect-router-link="/city,2156671"]'));
  // }

  // getMelbourneApiLink() {
  //   return element(by.css('[ng-reflect-router-link="/city,2158177"]'));
  // }
}
