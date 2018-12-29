
Feature('sahibinden.com Home Page');

Scenario('Page elements exist', (I, homePage) => {
    I.amOnPage('https://www.sahibinden.com');

    homePage.validateHeader();
    homePage.validateVehicleList();
    homePage.validateShowCase();
});