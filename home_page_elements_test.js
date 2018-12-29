
Feature('sahibinden.com Home Page');

Scenario('Logo exists in header', (I) => {
    I.amOnPage('https://www.sahibinden.com');
    I.seeElement({xpath:'/html/body//div[contains(@class, \'header\')]/p/a[contains(@class, \'logo\')]'});
});

Scenario('Search bar exists in header', (I) => {
    I.amOnPage('https://www.sahibinden.com');
    I.seeElement({xpath:'/html/body//div[contains(@class, \'header\')]/form/input[@id=\'searchText\']'});
});

Scenario('Detailed Search link exists in header', (I) => {
    I.amOnPage('https://www.sahibinden.com');
    I.seeElement({xpath:'/html/body//div[contains(@class, \'header\')]/form/a[contains(text(),\'Detaylı Arama\')]'});
});

Scenario('Login link exists in header', (I) => {
    I.amOnPage('https://www.sahibinden.com');
    I.seeElement({xpath:'/html/body//div[contains(@class, \'header\')]/ul/li[contains(@class, \'login-text\')]/a[contains(text(),\'Giriş Yap\')]'});
});

Scenario('Sign Up link exists in header', (I) => {
    I.amOnPage('https://www.sahibinden.com');
    I.seeElement({xpath:'/html/body//div[contains(@class, \'header\')]/ul/li[contains(@class, \'register-text\')]/a[contains(text(),\'Üye Ol\')]'});
});

Scenario('Post Free Ad link exists in header', (I) => {
    I.amOnPage('https://www.sahibinden.com');
    I.seeElement({xpath:'/html/body//div[contains(@class, \'header\')]/ul/li[contains(@class, \'new-classified\')]/a[contains(text(),\'Ücretsiz* İlan Ver\')]'});
});

