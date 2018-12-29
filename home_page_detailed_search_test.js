
Feature('sahibinden.com Home Page Detailed Search');

Scenario('Detailed search displays not found message when a result doesn\'t exist', (I) => {
    I.amOnPage('https://www.sahibinden.com');
    I.click('Detaylı Arama');

    I.wait(1);
    I.click({xpath:'//div[contains(@class, \'category-list-wrapper\')]//ul/li/span[contains(text(), \'Vasıta\')]'});
    I.wait(1);
    I.click({xpath:'//div[contains(@class, \'category-list-wrapper\')]//ul/li/span[contains(text(), \'Motosiklet\')]'});
    I.wait(1);
    I.click({xpath:'//div[contains(@class, \'category-list-wrapper\')]//ul/li/span[contains(text(), \'Yamaha\')]'});
    I.wait(1);
    I.click({xpath:'//div[contains(@class, \'category-list-wrapper\')]//ul/li/span[contains(text(), \'MT-07 ABS\')]'});

    I.fillField({xpath:'//input[contains(@placeholder, \'Min Yıl\')]'}, '1998');
    I.fillField({xpath:'//input[contains(@placeholder, \'Max Yıl\')]'}, '1999');
    I.checkOption({xpath:'//label[normalize-space()=\'Çekiş Kontrolü\']'});
    I.click('Arama Yap');
    I.wait(1);
    I.see('Arama filtrelerinize uygun ilan bulunamadı.');
});
