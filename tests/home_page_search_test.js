
Feature('sahibinden.com Home Page Search ');

const assert = require('assert');

const locators = {
  searchResultsInfo:'#searchResultsSearchForm > div > div > div > div > div > div > span',
  motorcycle: '//a[contains(text(), \'Motosiklet\') and contains(@href, \'Yamaha\')]'
};

const motorcycleModelCounts = new DataTable(['model', 'count']);
motorcycleModelCounts.add(['Yamaha MT09', 16]);
motorcycleModelCounts.add(['Yamaha MT25', 55]);
motorcycleModelCounts.add(['Yamaha MT07', 58]);

Data(motorcycleModelCounts).Scenario('Search Result Count', async (I, current) => {
    I.amOnPage('https://www.sahibinden.com');
    I.fillField('#searchText', current.model);
    I.pressKey('Enter');
    I.wait(3);
    I.click(locators.motorcycle);
    I.wait(2);
    let modelSearchResultCount = await I.grabHTMLFrom(locators.searchResultsInfo);
    assert.equal(modelSearchResultCount, current.count);
});