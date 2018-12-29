
const I = actor();

module.exports = {

    locators: {
        containsText:'[contains(text(),',
        containsClass:'[contains(@class,',

        header: '//div[contains(@class, \'header\')]',
        vehicles: '//ul[contains(@class, \'categories-left-menu\')]/li/a[contains(text(), \'Vasıta\')]',
        vehicleCategories: '/../ul/li/a',
        showCase: '//div[contains(@class, \'showcase\')]'
    },

    validateHeader() {
        I.seeElement({xpath:this.locators.header + '/p/a' + this.locators.containsClass + ' \'logo\')]'});
        I.seeElement({xpath:this.locators.header + '/form/input[@id=\'searchText\']'});
        I.seeElement({xpath:this.locators.header + '/form/a' + this.locators.containsText + '\'Detaylı Arama\')]'});
        I.seeElement({xpath:this.locators.header + '/ul/li' + this.locators.containsClass + ' \'login-text\')]/a' + this.locators.containsText + '\'Giriş Yap\')]'});
        I.seeElement({xpath:this.locators.header + '/ul/li' + this.locators.containsClass + ' \'register-text\')]/a' + this.locators.containsText + '\'Üye Ol\')]'});
        I.seeElement({xpath:this.locators.header + '/ul/li' + this.locators.containsClass + ' \'new-classified\')]/a' + this.locators.containsText + '\'Ücretsiz* İlan Ver\')]'});
    },

    validateVehicleList() {
        I.seeElement({xpath:this.locators.vehicles});
        I.seeElement({xpath:this.locators.vehicles + this.locators.vehicleCategories + this.locators.containsText + ' \'Otomobil\')]'});
        I.seeElement({xpath:this.locators.vehicles + this.locators.vehicleCategories + this.locators.containsText + ' \'Arazi, SUV & Pick-up\')]'});
        I.seeElement({xpath:this.locators.vehicles + this.locators.vehicleCategories + this.locators.containsText + ' \'Motosiklet\')]'});
    },

    validateShowCase() {
        I.seeElement({xpath:'//div' + this.locators.containsClass + ' \'showcase\')]/h3[contains(., \'Anasayfa Vitrini\')]'});
        I.seeNumberOfElements({xpath:'//div' + this.locators.containsClass + ' \'showcase\')]/ul/li'}, 56);

    }
};
