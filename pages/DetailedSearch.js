
const I = actor();

module.exports = {

    locators: {
        category: '//div[contains(@class, \'category-list-wrapper\')]//ul/li/span[contains(text(), '
    },

    clickCategories(categories) {
        for(var i = 0; i < categories.length; i++) {
            I.wait(1);
            I.click({xpath:this.locators.category + '\'' + categories[i] + '\')]'})
        }
    },

    fillYearFileds(minYear, maxYear) {
        I.fillField({xpath:'//input[contains(@placeholder, \'Min Yıl\')]'}, minYear);
        I.fillField({xpath:'//input[contains(@placeholder, \'Max Yıl\')]'}, maxYear);
    }
};

