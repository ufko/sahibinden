
const I = actor();

module.exports = {

    locators: {
        category: '//div[contains(@class, \'category-list-wrapper\')]//ul/li/span[contains(text(), '
    },

    clickCategories(categories) {
        for(let i = 0; i < categories.length; i++) {
            I.wait(2);
            I.click({xpath:this.locators.category + '\'' + categories[i] + '\')]'});
        }
    },

    fillYearFields(minYear, maxYear) {
        I.fillField({css:'input[placeholder*=\'Min Yıl\']'}, minYear);
        I.fillField({css:'input[placeholder*=\'Max Yıl\']'}, maxYear);
    },

    checkSecurityOptions(securityOptions) {
        for (let i = 0; i < securityOptions.length; i++) {
            I.checkOption({xpath:'//label[normalize-space()=\'' + securityOptions[i] +  '\']'});
        }
    }
};

