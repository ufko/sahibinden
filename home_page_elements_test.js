
Feature('sahibinden.com Home Page');

Scenario('Page elements exist', (I) => {
    I.amOnPage('https://www.sahibinden.com');

    I.amOnPage('https://www.sahibinden.com');

    I.seeElement({xpath:'/html/body//div[contains(@class, \'header\')]/p/a[contains(@class, \'logo\')]'});
    I.seeElement({xpath:'/html/body//div[contains(@class, \'header\')]/form/input[@id=\'searchText\']'});
    I.seeElement({xpath:'/html/body//div[contains(@class, \'header\')]/form/a[contains(text(),\'Detaylı Arama\')]'});
    I.seeElement({xpath:'/html/body//div[contains(@class, \'header\')]/ul/li[contains(@class, \'login-text\')]/a[contains(text(),\'Giriş Yap\')]'});
    I.seeElement({xpath:'/html/body//div[contains(@class, \'header\')]/ul/li[contains(@class, \'register-text\')]/a[contains(text(),\'Üye Ol\')]'});
    I.seeElement({xpath:'/html/body//div[contains(@class, \'header\')]/ul/li[contains(@class, \'new-classified\')]/a[contains(text(),\'Ücretsiz* İlan Ver\')]'});

    I.seeElement({xpath:'/html/body//ul[contains(@class, \'categories-left-menu\')]/li/a[contains(text(), \'Vasıta\')]'});
    I.seeElement({xpath:'/html/body//ul[contains(@class, \'categories-left-menu\')]/li/a[contains(text(), \'Vasıta\')]/../ul/li/a[contains(text(), \'Otomobil\')]'});
    I.seeElement({xpath:'/html/body//ul[contains(@class, \'categories-left-menu\')]/li/a[contains(text(), \'Vasıta\')]/../ul/li/a[contains(text(), \'Arazi, SUV & Pick-up\')]'});
    I.seeElement({xpath:'/html/body//ul[contains(@class, \'categories-left-menu\')]/li/a[contains(text(), \'Vasıta\')]/../ul/li/a[contains(text(), \'Motosiklet\')]'});

    I.seeElement({xpath:'/html/body//div[contains(@class, \'showcase\')]/h3[contains(., \'Anasayfa Vitrini\')]'});
    I.seeNumberOfElements({xpath:'/html/body//div[contains(@class, \'showcase\')]/ul/li'}, 56);

});