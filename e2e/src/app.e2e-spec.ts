import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('Angular Cocktail Search', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });


  // Test Elements

  it('should display The heading.', () => {
    page.navigateTo();
    // Pause browser for each test with browser.pause();
    browser.pause();
    expect(page.getTitleText()).toEqual('Angular Cocktail Search');
  });

  it('should display Search description.', () => {
    page.navigateTo();
    expect(page.getSearchTextDescription()).toEqual('Type in desired cocktail and results will auto populate.');
  });

  it('should display Advanced Filter button description', () => {
    page.navigateTo();
    expect(page.getFilterButtonDescription()).toEqual('Click on Advanced filter button to filter what you typed on Search Cocktail input.');
  });



  // it ('Should show correctly city of Sydney from API Data.', () => {
  //   page.navigateTo();
  //   expect(page.getSydneyApiLink().getText()).toEqual('Paris');
  // });

  // it ('Should show correctly city of Blacktown from API Data.', () => {
  //   page.navigateTo();
  //   expect(page.getBlacktownApiLink().getText()).toEqual('Província de Barcelona');
  // });

  // it ('Should show correctly city of Surry Hills from API Data.', () => {
  //   page.navigateTo();
  //   expect(page.getSurryHillsApiLink().getText()).toEqual('Provincia de Madrid');
  // });

  // it ('Should show correctly city of Mount Druitt from API Data.', () => {
  //   page.navigateTo();
  //   expect(page.getMountDruittApiLink().getText()).toEqual('San Vitaliano');
  // });

  // it ('Should show correctly city of Melbourne from API Data.', () => {
  //   page.navigateTo();
  //   expect(page.getMelbourneApiLink().getText()).toEqual('Amsterdam');
  // });


  // afterEach(async () => {
  //   // Assert that there are no errors emitted from the browser
  //   const logs = await browser.manage().logs().get(logging.Type.BROWSER);
  //   expect(logs).not.toContain(jasmine.objectContaining({
  //     level: logging.Level.SEVERE,
  //   } as logging.Entry));
  // });
});
