
const I = actor();

module.exports = {

    locators: {
        category: '//div[contains(@class, \'category-list-wrapper\')]//ul/li/span[contains(text(), ',
        inputPlaceholder: '//input[contains(@placeholder, '
    },

    clickCategories(categories) {
        for(var i = 0; i < categories.length; i++) {
            I.wait(1);
            I.click({xpath:this.locators.category + '\'' + categories[i] + '\')]'})
        }
    },

    fillYearFields(minYear, maxYear) {
        I.fillField({xpath:this.locators.inputPlaceholder + '\'Min Yıl\')]'}, minYear);
        I.fillField({xpath:this.locators.inputPlaceholder + '\'Max Yıl\')]'}, maxYear);
    }
};

