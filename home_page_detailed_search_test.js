
Feature('sahibinden.com Home Page Detailed Search');

Scenario('Detailed search displays not found message when a result doesn\'t exist', (I, detailedSearchPage) => {
    I.amOnPage('https://www.sahibinden.com');
    I.click('Detaylı Arama');

    var categories = ['Vasıta', 'Motosiklet', 'Yamaha', 'MT-07 ABS'];
    detailedSearchPage.clickCategories(categories);
    detailedSearchPage.fillYearFileds('1998', '1999');
    I.checkOption({xpath:'//label[normalize-space()=\'Çekiş Kontrolü\']'});
    I.click('Arama Yap');
    I.wait(1);
    I.see('Arama filtrelerinize uygun ilan bulunamadı.');
});
