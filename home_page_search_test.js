
Feature('sahibinden.com Home Page Search ');

const assert = require('assert');

let motorcycleModelCounts = new DataTable(['model', 'count']);
motorcycleModelCounts.add(['Yamaha MT07', 61]);
motorcycleModelCounts.add(['Yamaha MT09', 18]);
motorcycleModelCounts.add(['Yamaha MT25', 55]);

Data(motorcycleModelCounts).Scenario('Result count for search by model matches given', async (I, current) => {
    I.amOnPage('https://www.sahibinden.com');
    I.fillField('#searchText', current.model);
    I.pressKey('Enter');
    I.wait(3);
    I.click('a[href*=\'Yamaha\']');
    I.wait(2);
    let modelSearchResultCount = await I.grabHTMLFrom('#searchResultsSearchForm > div > div > div > div > div > div > span');
    assert.equal(modelSearchResultCount, current.count);

});